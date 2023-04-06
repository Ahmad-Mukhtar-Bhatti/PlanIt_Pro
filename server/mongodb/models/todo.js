import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    username:{type: String, required: true,ref: 'User'},
    risk:{type: String, required: false},
    Description:{type: String, required: false},
    Priority:{type: Number, required: false}
})

const TodoModel = mongoose.model('Todo',todoSchema)

export default TodoModel;