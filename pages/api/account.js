import User from '../../models/User';
import Order from '../../models/Orders';
import jwt from 'jsonwebtoken';
import connectDb from '../../utils/connectDb';

connectDb();

export default async(req, res) => {
    switch(req.method) {
        case 'GET':
            await handleGetRequest(req, res);
            break;
        case 'DELETE':
            await handleDeleteRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
}

async function handleGetRequest (req, res) {
    if (!("authorization" in req.headers)) {
        return res.status(401).send("No authorization token");
    }

    try {
        const { userId } = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        const user = await User.findOne({ _id: userId });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send("No user found");
        }
    } catch(error) {
        res.status(403).send("Invalid token");
    }
}

async function handleDeleteRequest(req, res) {
    try {
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        await User.findOneAndDelete({ _id: { $eq: userId } });
        await Order.deleteMany({ user: { $eq: userId } });
        res.status(203).send(userId);
    } catch(error) {
        console.error(error);
        return res.status(500).send('Error deleting User');
    }
}
