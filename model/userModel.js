import mongoose from "mongoose";
const schema = mongoose.Schema({
    name: {
        type: String
    },
    email: String,
    message: String
})
const user = mongoose.model('Portfolio-users', schema)
export default user;