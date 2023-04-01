import express, { application } from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js'
import userRouter from './routes/user.routes.js'


dotenv.config()

const App=express();
App.use(cors());
App.use(express.json());

App.get('/',(req,res) =>{
    res.send({message:'Hello'})
})


App.use('/api/v1/users',userRouter);

const startServer = async () => {
    try{
        connectDB(process.env.MONGODB_URL)
        App.listen(8080, () => console.log('server listening on 8080'))
    }
    catch(error){
        console.error(error)
    }
}

startServer();
