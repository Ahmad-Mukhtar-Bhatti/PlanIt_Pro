import express from 'express';
import jwt from 'jsonwebtoken';
import { createUser,getAllUsers,getUserInfoByID } from '../controllers/user.controller.js';
import  userModel from '../mongodb/models/user.js';
import bcrypt from 'bcrypt';


const router=express.Router();

// router.route('/').get(getAllUsers)
// router.route('/').get(createUser)
// router.route('/:id').get(getUserInfoByID)





router.post('/', async (req, res) => {
    const {username, password,} = req.body;

    console.log("backed recieved",username,password);

    const user = await userModel.findOne({ username});

    if (user) {
        return res.json({ message :"invalid user exists"})
    }

    const hasher= await bcrypt.hash(password,10);
    const newUser= new userModel({username,password:hasher});

    await newUser.save()


    res.json({message:"Success"});


})

export {router as signupRouter};