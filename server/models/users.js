
import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number},
    email: {type: String}
});

const UsersModel = mongoose.model('users', UsersSchema);

export default UsersModel;