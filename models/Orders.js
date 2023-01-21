import mongoose from 'mongoose';

const { String, Number, ObjectId } = mongoose.Schema.Types;

const OrderSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    total: {
        type: Number
    },
    product: {
        type: String
    }
  }, {
    timestamps: true
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
