import express from 'express';
import jwt from 'jsonwebtoken';
import  userModel from '../mongodb/models/user.js';
import bcrypt from 'bcrypt';
import BudgetModel from '../mongodb/models/budget.js';
import ComplaintModel from '../mongodb/models/complaints.js';

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



// To get specific user data and balance
router.post('/user', async (req, res) => {
    try {
        console.log("User db backed received");

        // Query to get names and usernames
        const query = { name: { $regex: req.body.name, $options: 'i' } };
        const projection = { password: 0 };

        const users = await userModel.find(query, projection);
        // users = {users._id, users.username, users.name, users.rank};
        
        
        const usernamesAndNames = users.map(user => {
            return {
              username: user.username,
              name: user.name,
              id: user._id
            };
          });
          
        const usernames = usernamesAndNames.map(user => user.username);

        // Query to get the balance
        const query2 = { username: { $regex: usernames, $options: 'i' } };
        const balancee = await BudgetModel.find(query2, projection);
        const userBalance = balancee.map(user => {
            return {
                id: user.U_id,
                balance: user.balance,
            
            };
          });

        // console.log(userBalance);

        // console.log(usernamesAndNames);

        
        // Joining the datas
        const joinedData = usernamesAndNames.map(user => {
            const { id, username, name } = user;
            const balanceObj = userBalance.find(balance => balance.id && balance.id.toString() === id.toString()) || { balance: 0 };
            const { balance } = balanceObj;
            return { id, username, name, balance };
        });
          
        
        console.log(joinedData);


        const searcheddata = joinedData.map(user => {
            return {
              username: user.username,
              name: user.name,
              balance: user.balance
            };
          });

          
        return res.json({ users: searcheddata });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
});


// To get complaints
router.post('/complaints', async (req, res) => {
    try {
        console.log("Complaint db backed recieved");


        // Getting complaints data
        const complain = await ComplaintModel.find({}, {_id: 0 });

        // console.log(complain);
        // // Getting users
        // const users = await userModel.find({}, { name: 1, _id: 1 });
        // console.log(users);



        // const joinedData = complain.map(user => {
        //     const { id, username, name } = user;
        //     const balanceObj = userBalance.find(balance => balance.id && balance.id.toString() === id.toString()) || { balance: 0 };
        //     const { balance } = balanceObj;
        //     return { id, username, name, balance };
        // });
          
        
        // console.log(joinedData);


        const complaindata = complain.map(user => {
            return {
              UserID: user.U_id,
              Description: user.Description,
            };
          });

        return res.json({ users: complaindata });


    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
});


export {router as adminallRouter};