import mongoose from "mongoose";
const connectDb = () => {
    const url = 'mongodb://localhost:27017/graphql';

    try {
        mongoose.connect(
            url, {
                useNewUrlParser: true
            }
        )
    } catch(err) {
        console.log(err.message);
    }

    const dbConnection = mongoose.connection;
    dbConnection.once("open", () => {
        console.log('Database connected');
    })

    dbConnection.on('err', () => {
        console.error(`Connection Error: ${err}`);
    })

}

export default connectDb();