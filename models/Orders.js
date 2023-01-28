import mongoose from 'mongoose';

const { String, Number, ObjectId } = mongoose.Schema.Types;

const OrderSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User"
    },
    total: {
        type: Number,
        required: true
    },
    product: {
        type: String,
        required: true
    }
  }, {
    timestamps: true
});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
