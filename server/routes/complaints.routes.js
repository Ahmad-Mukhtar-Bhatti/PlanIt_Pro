import express from 'express';
import  ComplaintModel from '../mongodb/models/complaints.js';



const router=express.Router();

router.post('/', async (req, res) => {
    const {userID,comments} = req.body;

    console.log("submit backed recieved",userID,comments);

    const newcomplaints= new ComplaintModel({U_id:userID,Description:comments});
    await newcomplaints.save();

    res.json({message:"Success"});
})

export {router as complaintsRouter};