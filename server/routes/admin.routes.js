import express from 'express';
import jwt from 'jsonwebtoken';
import  userModel from '../mongodb/models/user.js';
import bcrypt from 'bcrypt';


const router=express.Router();

router.post('/', async (req, res) => {
    try {
        console.log("User db backed recieved");
        const users = await userModel.find({}, { name: 1, _id: 0 });
        console.log(users);
        return res.json({ users: users });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
});

router.post('/user', async (req, res) => {
    try {
        console.log("User db backed received");

        const query = { name: { $regex: req.body.name, $options: 'i' } };
        const projection = { password: 0 };

        const users = await userModel.find(query, projection);

        console.log(users);
        return res.json({ users: users });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
});


export {router as adminallRouter};