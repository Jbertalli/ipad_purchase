import Product from '../../models/Product';
import Cart from '../../models/Cart';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await handleGetRequest(req, res);
            break;
        case "DELETE":
            await handleDeleteRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
};

async function handleGetRequest(req, res) {
    const { _id } = req.query;
    const product = await Product.findOne({ _id });
    res.status(200).json(product);
}

async function handleDeleteRequest(req, res) {
    const { _id } = req.query;
    try {
        //delete product by id
        await Product.findOneAndDelete({ _id });
        //remove product from all carts referenced by 'product'
        await Cart.updateMany(
            { "products.product": _id },
            { $pull: { products: { product: _id } } }
        )
    } catch(error) {
        console.error(error);
        return res.status(500).send('Error deleting product');
    }
}
