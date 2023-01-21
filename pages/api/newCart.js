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
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
}

async function handlePostRequest(req, res) {
    const { total, product } = req.body;
    // if (!('authorization' in req.headers)) {
    //     return res.status(401).send('No authorization token');
    // }
    try {
        // const { userId } = jwt.verify(
        //     req.headers.authorization,
        //     process.env.JWT_SECRET
        // );
        const finalTotal = await new Order({
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
    // if (!('authorization' in req.headers)) {
    //     return res.status(401).send('No authorization token');
    // }
    try {
        // const { userId } = jwt.verify(
        //     req.headers.authorization,
        //     process.env.JWT_SECRET
        // );
        await Order.findOneAndDelete(total, product);
        // await Order.findOneAndDelete({ product);
        res.status(203).send();
    } catch(error) {
        console.error(error);
        return res.status(500).send('Error deleting Orders');
    }
}
