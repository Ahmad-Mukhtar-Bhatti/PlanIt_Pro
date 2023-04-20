import express from 'express';
import  userModel from '../mongodb/models/user.js';
import bcrypt from 'bcrypt';
import BudgetModel from'../mongodb/models/budget.js'
// import TodoModel from'../mongodb/models/todo.js'
// import ComplaintModel from'../mongodb/models/complaints.js'
// import SuggestionModel from'../mongodb/models/suggestions.js'
// import * as dotenv from 'dotenv'



const router=express.Router();


router.post('/', async (req, res) => {
    const {username, name, password,url} = req.body;

    console.log("backed recieved",username,password,url);

    const user = await userModel.findOne({ username});


    if (user) {
        console.log("Exists")
        return res.json({ message :"invalid"})
    }

    const hasher= await bcrypt.hash(password,10);
    const newUser= new userModel({name,username,password:hasher,pic:url,rank:"Admin",});

    await newUser.save()

    const users = await userModel.findOne({ username});

    const newUserbudget= new BudgetModel({U_id:users._id,balance:0,Target_amnt:0});
    await newUserbudget.save()



  


    res.json({message:"Success"});


})

export {router as signupRouter};