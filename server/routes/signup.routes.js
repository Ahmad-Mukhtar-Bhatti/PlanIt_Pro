import express from 'express';
import  userModel from '../mongodb/models/user.js';
import bcrypt from 'bcrypt';
import BudgetModel from'../mongodb/models/budget.js'
import TodoModel from'../mongodb/models/todo.js'
import ComplaintModel from'../mongodb/models/complaints.js'
import SuggestionModel from'../mongodb/models/suggestions.js'

const router=express.Router();


router.post('/', async (req, res) => {
    const {username, name, password} = req.body;

    console.log("backed recieved",username,password);

    const user = await userModel.findOne({ username});

    if (user) {
        console.log("Exists")
        return res.json({ message :"invalid"})
    }

    const hasher= await bcrypt.hash(password,10);
    const newUser= new userModel({name,username,password:hasher,rank:"User"});

    await newUser.save()

    const newUserbudget= new BudgetModel({username,balance:0,Target_amnt:0});
    await newUserbudget.save()

    const newUsertodo= new TodoModel({username});
    await newUsertodo.save()

    const newUsercomplaint= new ComplaintModel({username,Complaint_id:1});
    await newUsercomplaint.save()

    const newUsersugg= new SuggestionModel({Sugg_key:1,Description:""});
    await newUsersugg.save()



    res.json({message:"Success"});


})

export {router as signupRouter};