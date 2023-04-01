import express from 'express';
import jwt from 'jsonwebtoken';
import { createUser,getAllUsers,getUserInfoByID } from '../controllers/user.controller.js';
import { userModel} from '../mongodb/models/user.js';


const router=express.router();

router.route('/').get(getAllUsers)
router.route('/').get(createUser)
router.route('/:id').get(getUserInfoByID)


router.post('/'), async (req, res) => {
    const{username, password} = req.body;
    const user = await userModel.findOne({ username: username});

    if (!user) {
        return res.json({ message :"User does not exist"})
    }

    if(password !== user.password){
        return res.json({ message : "Incorrect credential"})
    }

    const token = jwt.sign({id:user._id},"secret");
    res.json({ token ,userID:user._id});


}

export {router as userRouter};