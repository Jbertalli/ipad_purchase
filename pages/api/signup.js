import connectDb from '../../utils/connectDb';
import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
    const { name, email, password} = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            res.status(422).send(`User already exists with the email ${email}`);
        }
        const hash = await bcrypt.hash(password, 10);
        const newUser = await new User({
            name,
            email,
            password
        }).save();
        console.log({ newUser });
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        })
        res.status(201).json(token);
    } catch(error) {
        console.error(error);
    }
}
