import express from 'express';
import jwt from 'jsonwebtoken';
import { createUser,getAllUsers,getUserInfoByID } from '../controllers/user.controller.js';
import  userModel from '../mongodb/models/user.js';


const router=express.Router();

router.route('/').get(getAllUsers)
router.route('/').get(createUser)
router.route('/:id').get(getUserInfoByID)


router.post('/', async (req, res) => {
    const {username, password} = req.body;

    console.log("backed recieved",username,password);

    const user = await userModel.findOne({ username});

    if (!user) {
        return res.json({ message :"invalid"})
    }

    if(password !== user.password){
        return res.json({ message : "invalid"})
    }

    const token = jwt.sign({id:user._id},"secret");
    res.json({ token ,userID:user._id});


})

router.post('/signup', async (req, res) => {
    const {username, password} = req.body;
    console.log("yooo");

    console.log("backed recieved",username,password);

    const user = await userModel.findOne({ username});

    if (!user) {
        return res.json({ message :"invalid"})
    }

    if(password !== user.password){
        return res.json({ message : "invalid"})
    }

    const token = jwt.sign({id:user._id},"secret");
    res.json({ token ,userID:user._id});


})

export {router as userRouter};