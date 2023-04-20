import express from 'express';
import  TxnModel from '../mongodb/models/txn.js';

const router=express.Router();

router.post('/', async (req, res) => {
  
  const uid = req.body.userID
  console.log("getpredictions backend recieved",uid);

    const Tasks = await TxnModel.find({U_id:uid});
    console.log(Tasks)

    if (!Tasks) {
      return res.json({ message :"invalid"})
  }
    else if (Tasks.Type ==='debit'){
        res.json({message:Tasks});
    }
    else{
       res.json({message:Tasks});
    }
})

export {router as getPredictionsRouter};