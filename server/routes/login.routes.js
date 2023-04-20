import express from 'express';
import jwt from 'jsonwebtoken';
import  userModel from '../mongodb/models/user.js';
import bcrypt from 'bcrypt';


const router=express.Router();


router.post('/', async (req, res) => {
    const {username, password} = req.body;

    console.log("login backed recieved",username,password);

    const user = await userModel.findOne({ username});

    if (!user) {
        return res.json({ message :"invalid"})
    }

    if(! (await bcrypt.compare(password, user.password))){
        return res.json({ message : "invalid"})
    }

    const token = jwt.sign({id:user._id},"secret");
    res.json({ token ,userID:user._id});


})

export {router as loginRouter};