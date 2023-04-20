import express from 'express';
import  todoModel from '../mongodb/models/todo.js';

const router=express.Router();

router.delete('/', async (req, res) => {
    const { uid, task } = req.body;

    console.log("backend received", {uid, task });

    const deletedTask = await todoModel.deleteOne({ U_id: uid, Description: task }).exec();

    if (deletedTask.deletedCount === 1) {
        console.log("Task deleted:", task);
        const Tasks = await todoModel.find({ U_id: uid }).sort({ Priority: -1 });
        res.json({ message: Tasks });
    } else {
        console.log("Task not found:", task);
        res.status(404).json({ message: "Task not found" });
    }
});

export {router as removeTaskRouter};