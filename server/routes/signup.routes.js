import express from 'express';
import  userModel from '../mongodb/models/user.js';
import bcrypt from 'bcrypt';
import BudgetModel from'../mongodb/models/budget.js'
import TodoModel from'../mongodb/models/todo.js'
import ComplaintModel from'../mongodb/models/complaints.js'
import SuggestionModel from'../mongodb/models/suggestions.js'
import * as dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary'

dotenv.config();

<<<<<<< HEAD
cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});
=======
// cloudinary.config({
//     cloud_name : process.env.CLOUD_NAME,
//     api_key: process.env.CLOUD_API_KEY,
//     api_secret: process.env.CLOUD_API_SECRET
// });
>>>>>>> bc555b118cf81eaf528e9876d17d10d0aadd7f64

const router=express.Router();


router.post('/', async (req, res) => {
    const {username, name, password,url} = req.body;

    console.log("backed recieved",username,password,url);

    const user = await userModel.findOne({ username});

<<<<<<< HEAD
    const photoUrl = await cloudinary.uploader.upload(`https://icon-library.com/images/unknown-person-icon/unknown-person-icon-4.jpg`)

    console.log(photoUrl.url)


      
=======
    // const photoUrl = await cloudinary.uploader.upload(pic)

    // console.log(photoUrl.url)


>>>>>>> bc555b118cf81eaf528e9876d17d10d0aadd7f64
    if (user) {
        console.log("Exists")
        return res.json({ message :"invalid"})
    }

    const hasher= await bcrypt.hash(password,10);
<<<<<<< HEAD
    const newUser= new userModel({name,username,password:hasher,pic:photoUrl.url,rank:"User",});
=======
    const newUser= new userModel({name,username,password:hasher,pic:url,rank:"User",});
>>>>>>> bc555b118cf81eaf528e9876d17d10d0aadd7f64

    await newUser.save()

    const users = await userModel.findOne({ username});

    const newUserbudget= new BudgetModel({U_id:users._id,balance:0,Target_amnt:0});
    await newUserbudget.save()

<<<<<<< HEAD
    const newUsertodo= new TodoModel({U_id:users._id});
    await newUsertodo.save()
=======
    // const newUsertodo= new TodoModel({U_id:users._id});
    // await newUsertodo.save()
>>>>>>> bc555b118cf81eaf528e9876d17d10d0aadd7f64

    // const newUsercomplaint= new ComplaintModel({U_id:users._id});
    // await newUsercomplaint.save()

<<<<<<< HEAD
    const newUsersugg= new SuggestionModel({Description:"hello"});
    await newUsersugg.save()
=======
    // const newUsersugg= new SuggestionModel({Description:"hello"});
    // await newUsersugg.save()
>>>>>>> bc555b118cf81eaf528e9876d17d10d0aadd7f64



    res.json({message:"Success"});


})

export {router as signupRouter};