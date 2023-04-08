import express, { application } from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js'
import {loginRouter} from './routes/login.routes.js'
import {signupRouter} from './routes/signup.routes.js'
import {homeRouter} from './routes/home.routes.js'

dotenv.config()

const App=express();
App.use(cors());
App.use(express.json());

App.get('/',(req,res) =>{
    res.send({message:'Hello'})
})

App.use('/login',loginRouter);
App.use('/signup',signupRouter);
App.use('/home',homeRouter);

// App.get('/signup',(req,res) =>{
//     res.send({message:'Hello'})
// })

const startServer = async () => {
    try{
        connectDB(process.env.MONGODB_URL)
        App.listen(3010, () => console.log('server listening on 3010'))
    }
    catch(error){
        console.error(error)
    }
}

startServer();
