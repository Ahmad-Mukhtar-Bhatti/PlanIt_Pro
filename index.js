import express, { application } from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js'
import {loginRouter} from './routes/login.routes.js'
import {signupRouter} from './routes/signup.routes.js'
import {homeRouter} from './routes/home.routes.js'
import {addmoneyRouter} from './routes/addmoney.routes.js'
import {removemoneyRouter} from './routes/removemoney.routes.js'
import {addNewTaskRouter} from './routes/addNewTask.routes.js'
import { ToDoRouter } from './routes/ToDo.routes.js'
import { removeTaskRouter } from './routes/removeTask.routes.js'
import { adjustTaskRouter } from './routes/adjustTask.routes.js'
import { piechartRouter } from './routes/piechart.routes.js'
import { complaintsRouter } from './routes/complaints.routes.js'
import { adminallRouter } from './routes/admin.routes.js'
import { getPredictionsRouter } from './routes/getpredictions.routes.js'
import { EditRouter } from './routes/edit.routes.js'
import { predictRouter } from './routes/predict.routes.js'

dotenv.config()

const App=express();
App.use(cors());
App.use(express.json());

// App.get('/',(req,res) =>{
//     res.send({message:'Hello'})
// })

App.use('/login',loginRouter);
App.use('/signup',signupRouter);
App.use('/home',homeRouter);
App.use('/addmoney',addmoneyRouter);
App.use('/removemoney',removemoneyRouter);
App.use('/addNewTask',addNewTaskRouter)
App.use('/ToDo', ToDoRouter)
App.use('/removeTask', removeTaskRouter)
App.use('/adjustTask', adjustTaskRouter)
App.use('/submitComplaints', complaintsRouter)
App.use('/piechart', piechartRouter)
App.use('/admin', adminallRouter);
App.use('/getPredictions', getPredictionsRouter)
App.use('/edit', EditRouter)
App.use('/predict', predictRouter)
const PORT=process.env.PORT || 3010;


if(process.env.NODE_ENV === 'production'){
    App.use(express.static('client/build'))
}

const startServer = async () => {
    try{
        connectDB(process.env.MONGODB_URL)
        App.listen(PORT, () => console.log('server listening on ',PORT))
    }
    catch(error){
        console.error(error)
    }
}

startServer();
