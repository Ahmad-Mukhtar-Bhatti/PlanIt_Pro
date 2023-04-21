import express from 'express';
import  BudgetModel from '../mongodb/models/budget.js';
import  TxnModel from '../mongodb/models/txn.js';



const router=express.Router();



router.post('/', async (req, res) => {
    const {userID,amount,comments} = req.body;


    console.log("addmoney backed recieved",amount,comments);

  

    const budget = await BudgetModel.findOne({U_id:userID});


    const newtxn= new TxnModel({U_id:userID,amount,Type:"credit"});
    await newtxn.save();


    if (!budget) {
        return res.json({ message :"invalid"})
    }

    budget.balance += parseInt(amount);
    await budget.save();


  
    console.log(budget.balance)
    res.json({balance:budget.balance});


})

export {router as addmoneyRouter};