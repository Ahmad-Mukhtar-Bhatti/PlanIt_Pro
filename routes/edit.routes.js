import express from 'express';
import jwt from 'jsonwebtoken';
import  userModel from '../mongodb/models/user.js';
import bcrypt from 'bcrypt';


const router=express.Router();


router.post('/', async (req, res) => {
    const {uid,name, password,oldpassword,url} = req.body;

    console.log("login backed recieved",req.body);

    const user = await userModel.findOne({_id: uid});

    if (!user) {
        return res.json({ message :"invalid"})
    }

    if(! (await bcrypt.compare(oldpassword, user.password))){
        return res.json({ message : "invalid"})
    }
    else{
        user.name = name;
        user.password = password;
        user.pic = url;

        user.save();
        return res.json({ message :"Success"})

    }

   
    


})
export {router as EditRouter};