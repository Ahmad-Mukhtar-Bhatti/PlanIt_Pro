import express from 'express';
import jwt from 'jsonwebtoken';
import { createUser,getAllUsers,getUserInfoByID } from '../controllers/user.controller.js';
import  userModel from '../mongodb/models/user.js';
import  BudgetModel from '../mongodb/models/budget.js';
import bcrypt from 'bcryptjs/dist/bcrypt.js';


const router=express.Router();



router.post('/', async (req, res) => {
    const {username} = req.body;

    // console.log("home backed recieved",username);

    const user = await userModel.findOne({ username});
    // console.log(user.name);

    const budget = await BudgetModel.findOne({username});
    // console.log(budget.balance);


    if (!user) {
        return res.json({ message :"invalid"})
    }

    // if(! (await bcrypt.compare(password, user.password))){
    //     return res.json({ message : "invalid"})
    // }

    const token = jwt.sign({id:user._id},"secret");
    res.json({ token ,uname:user.name, userbalance:budget.balance});


})

export {router as homeRouter};