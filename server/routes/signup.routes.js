import express from 'express';
import { createUser,getAllUsers,getUserInfoByID } from '../controllers/user.controller.js';
import  userModel from '../mongodb/models/user.js';
import bcrypt from 'bcrypt';


const router=express.Router();


router.post('/', async (req, res) => {
    const {username, name, password} = req.body;

    console.log("backed recieved",username,password);

    const user = await userModel.findOne({ username});

    if (user) {
        console.log("Exists")
        return res.json({ message :"invalid"})
    }

    const hasher= await bcrypt.hash(password,10);
    const newUser= new userModel({name,username,password:hasher,rank:"User"});

    await newUser.save()

    res.json({message:"Success"});


})

export {router as signupRouter};