import express from "express";
import { connectDb } from './connect.js';
import { router} from './router/user.js'

const app = express();
const PORT = 3000;

// DB connection
connectDb("mongodb://localhost:27017/")
.then(()=> console.log('connected to db'))
.catch((err)=> console.log('Cant connnect',err))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// crud
app.use('/',router)

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
});