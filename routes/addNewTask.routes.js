import express from 'express';
import  todoModel from '../mongodb/models/todo.js';

const router=express.Router();

router.post('/', async (req, res) => {
    const {uid,task} = req.body;

    console.log("backend recieved",task);

    const latestTask = await todoModel.find({ U_id: uid })
    .sort({ Priority: -1 }) // sort by priority in descending order
    .limit(1) // limit to the document with highest priority
    .exec();

    let highest_priority;
    if (latestTask.length > 0) {
        highest_priority = latestTask[0].Priority;
        console.log("Latest task:", latestTask[0], latestTask[0].Priority);
        const newTask = new todoModel({U_id:uid, Description:task, Priority: highest_priority+1});

        await newTask.save();

        res.json({message:"Success"});
    } else {
        console.log("No task exists");
        const newTask = new todoModel({U_id:uid, Description:task, Priority: 1});
        
        await newTask.save();

        res.json({message:"Success"});
    }

    //const newTask = new todoModel({U_id:uid, Description:task, Priority: 2});
    //console.log(newTask)
})

export {router as addNewTaskRouter};