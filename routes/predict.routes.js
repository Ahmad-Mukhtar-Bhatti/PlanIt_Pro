import express from 'express';
import  BudgetModel from '../mongodb/models/budget.js';
import { generate } from './suggestions-generator.py';

const router=express.Router();

router.post('/', async (req, res) => {
  
  const uid = req.body.userID
  console.log("predict backend recieved",uid);

    const budget = await BudgetModel.find({U_id:uid});
    console.log(budget)

    if (!budget) {
      return res.json({ message :"invalid"})
  }
    
    else{
        expense = {1:500, 2:700, 3:350, 4:1200, 5:200,6:20,7:300,8:240,9:1000,10:130,11:700,12:700,13:60,14:140,15:500,16:500,17:500,18:900,19:700,20:460,21:1000}

    
        const response = await axios.post('http://localhost:5000/api/suggestions', {
        balance: budget.balance,
        expense: expense,
        });

        const suggestions = response.data;
        res.send(suggestions);
    }
})

export {router as predictRouter};