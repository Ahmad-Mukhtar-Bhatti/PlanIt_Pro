import express from 'express';
import  todoModel from '../mongodb/models/todo.js';

const router=express.Router();

router.post('/', async (req, res) => {
    const { uid, task, str } = req.body;

    console.log("backend received", uid);
    console.log("backend received", task);
    console.log("backend received", str);

    const existingTask = await todoModel.findOne({ U_id: uid, Description: task });

    let newPriority;
    if (str === "inc") {
        const currentPriority = existingTask.Priority;
        console.log("Existing task:", existingTask, currentPriority);
        newPriority = currentPriority + 1;
        existingTask.Priority = newPriority;
        await existingTask.save();
        const Tasks = await todoModel.find({ U_id: uid }).sort({ Priority: -1 });
        res.json({ message: Tasks });
    } else {
        const currentPriority = existingTask.Priority;
        console.log("Existing task:", existingTask, currentPriority);
        newPriority = currentPriority - 1;
        existingTask.Priority = newPriority;
        await existingTask.save();
        const Tasks = await todoModel.find({ U_id: uid }).sort({ Priority: -1 });
        res.json({ message: Tasks });
    }
})


export {router as adjustTaskRouter};