import mongoose from 'mongoose';

const { String, Number } = mongoose.Schema.Types;

const PurchaseSchema = new mongoose.Schema({
        order: {
            type: String,
            required: true
        }, 
        total: {
            type: Number,
            required: true
        }
    }, {
        timestamps: true
    }
);

export default mongoose.models.Purchase || mongoose.model("Purchase", PurchaseSchema);
