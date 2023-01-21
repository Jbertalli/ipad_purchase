import mongoose from 'mongoose';

const { ObjectId, String, Number } = mongoose.Schema.Types;

const CartSchema = new mongoose.Schema({
        user: {
            type: ObjectId,
            required: true
        },
        products: [
            {
                quantity: {
                    type: Number,
                    default: 1
                }, 
                product: {
                    type: String
                }, 
                total: {
                    type: Number,
                }
            }
        ]
    });

export default mongoose.models.Cart || mongoose.model("Cart", CartSchema);
