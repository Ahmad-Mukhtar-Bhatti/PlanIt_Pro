import express from 'express';
import  BudgetModel from '../mongodb/models/budget.js';



const router=express.Router();



router.post('/', async (req, res) => {
    const {userID,amount,type} = req.body;


    console.log("removemoney backed recieved",amount,type);

  

    const budget = await BudgetModel.findOne({U_id:userID});


    if (!budget) {
        return res.json({ message :"invalid"})
    }

    budget.balance -= parseInt(amount);
    await budget.save();


  
    console.log(budget.balance)
    res.json({balance:budget.balance});


})

export {router as removemoneyRouter};