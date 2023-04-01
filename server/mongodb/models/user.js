import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    U_id:{type: String, required: true},
    name:{type: String, required: true},
    password:{type: String, required: true},
    rank:{type: String, required: true}

})

const userModel = mongoose.model('User',userSchema)

export default userModel;