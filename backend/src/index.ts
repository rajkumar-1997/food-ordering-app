import express,{Response,Request} from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from "./database/dbConfig";


dotenv.config();
const PORT =process.env.PORT||3000;
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/api/test',(req:Request,res:Response)=>{
    res.status(200).send({message:'hello from express app'});
})

connectDB();
app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}!`);
})


