import mongoose from 'mongoose';

const { String, ObjectId } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    // order: {
    //     type: ObjectId,
    //     ref: "Order"
    // }
  }, {
    timestamps: true
  }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
