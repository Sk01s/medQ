import mongoose from "mongoose";
const connection = {};

const connectDb = async () => {
    if (connection.isConnected) {
        // Using existing database connection
        // console.log("Using existing connection")
        return;
    }
    //Use new database connection
    console.log("DB Before");
    const db = await mongoose
        .connect(process.env.MONGO_SRV, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((e) => {
            console.log("connect");
            return e;
        })
        .catch((e) => {
            console.error("connect");
            return e;
        });

    console.log("DB Connected");

    connection.isConnected = db.connections?.[0].isReadyState;
};

export default connectDb;
