import connectDb from '../../utils/connectDb';
import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

connectDb();

export default async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!isLength(name, { min: 3, max: 20 })) {
            return res.status(422).send("Name must be 3-20 characters long")
        } else if (!isLength(password, { min: 5 })) {
            return res.status(422).send("Password must be at least 5 characters long")
        } else if (!isEmail(email)) {
            return res.status(422).send("Email must be valid")
        }
        const user = await User.findOne({ email });
        if (user) {
            res.status(422).send(`User already exists with the email ${email}`);
        }
        const hash = await bcrypt.hash(password, 10);
        const newUser = await new User({
            name,
            email,
            password: hash
        }).save();
        console.log({ newUser });
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        })
        res.status(201).json(token);
    } catch(error) {
        console.error(error);
        res.status(500).send("Error signing up user");
    }
}
