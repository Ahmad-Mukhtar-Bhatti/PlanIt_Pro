import express from 'express';
import  TxnModel from '../mongodb/models/txn.js';

const router=express.Router();

router.post('/', async (req, res) => {
  const {uid} = req.body;
  console.log("piechart backend recieved",uid);

    const Tasks = await TxnModel.find({ U_id: uid });
    // console.log(Tasks)
    if (Tasks.type==='debit'){
        res.json({message:Tasks});
    }
})

export {router as piechartRouter};