import express, { application } from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js'
import {userRouter} from './routes/user.routes.js'


dotenv.config()

const App=express();
App.use(cors());
App.use(express.json());

App.get('/login',(req,res) =>{
    console.log("yoo");
    res.send({message:'Hello'})
})

App.use(express.json());

// define a route for the /api/data endpoint
App.post('/api/data', (req, res) => {
  // get the data from the request body
  const data = req.body;

  // do something with the data
  console.log(data);

  // send a response
  res.json({ message: 'Data received!' });
});


App.use('/api/v1/users',userRouter);

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
