import mongoose from "mongoose"

const schema = new mongoose.Schema({
        email: String,
        firstname: String,
        lastname: String,
        role: String,
        password: String
})

export default mongoose.model("users", schema)