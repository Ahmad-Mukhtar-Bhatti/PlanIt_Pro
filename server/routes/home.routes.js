import express from 'express';
import jwt from 'jsonwebtoken';
import  userModel from '../mongodb/models/user.js';
import  BudgetModel from '../mongodb/models/budget.js';
import { ObjectId } from 'mongodb';



const router=express.Router();



router.post('/', async (req, res) => {
    const {userID} = req.body;

    const id=userID;

    console.log("home backed recieved",id);

    const user = await userModel.findOne({_id:id});
    // console.log(user.name);

    const budget = await BudgetModel.findOne({U_id:id});
    // console.log(budget.balance);


    if (!user) {
        return res.json({ message :"invalid"})
    }

    if (!budget) {
        return res.json({ message :"invalid"})
    }

    

    // if(! (await bcrypt.compare(password, user.password))){
    //     return res.json({ message : "invalid"})
    // }

    const token = jwt.sign({id:user._id},"secret");
    console.log(user.name,budget.balance,user.pic)
    res.json({ token ,name:user.name, balance:budget.balance,pic:user.pic});


})

export {router as homeRouter};