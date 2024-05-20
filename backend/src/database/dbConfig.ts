import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const mongodbURL=process.env.MONGODB_URL;
const connectDB=async()=>{
    try {
        await mongoose.connect(mongodbURL as string);
        console.log('Database Connected!');
    } catch (error) {
        console.log('Database error:',error);
    }
}

export default connectDB;