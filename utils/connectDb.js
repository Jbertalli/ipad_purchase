import mongoose from 'mongoose';

const connection  = {};

async function connectDb() {
    if (connection.isConnected) {
        console.log("Using existing connection", connection.isConnected);
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_SRV, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("DB Connected", connection.isConnected);
}

export default connectDb;
