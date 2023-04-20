import express from 'express';
import  todoModel from '../mongodb/models/todo.js';

const router=express.Router();

router.post('/', async (req, res) => {
    const uid = req.body.uid;
    //console.log("backend recieved",uid);

    const Tasks = await todoModel.find({ U_id: uid });
    //console.log(Tasks);

    res.json({message:Tasks});

})

export {router as ToDoRouter};