import Order from '../../models/Orders';
import connectDb from '../../utils/connectDb';

connectDb();

export default async(req, res) => {
    switch(req.method) {
        case 'POST':
            await handlePostRequest(req, res);
            break;
        case 'DELETE':
            await handleDeleteRequest(req, res);
            break;
        case 'GET':
            await handleGetRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
}

async function handlePostRequest(req, res) {
    const { total, product, user } = req.body;
    try {
        const finalTotal = await new Order({
            user,
            total,
            product
        }).save();
        res.status(201).json({ finalTotal });
        console.log({ finalTotal });
    } catch(error) {
        console.error(error);
        res.status(500).send('Server error while updating Document');
    }
}

async function handleDeleteRequest(req, res) {
    const { total, product } = req.body;
    try {
        await Order.findOneAndDelete(total, product);
        res.status(203).send();
    } catch(error) {
        console.error(error);
        return res.status(500).send('Error deleting Orders');
    }
}

async function handleGetRequest(req, res) {
    const { total, product } = req.body;
    try {
        const orders = await Order.find({ _id: { $ne: total } }) //get order by userId
        .sort({ createdAt: 'desc' });
        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(403).send("Please login again");
    }
}
