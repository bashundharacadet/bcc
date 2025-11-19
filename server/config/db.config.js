import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const dbURI = process.env.MONGO_URI


const connectDB = async ()=>{
    if (!dbURI) {
        console.error('MONGO_URI is not defined in environment variables')
        return
    }
    try {
        mongoose.connect(dbURI)
        console.log('MongoDB connected successfully')
    } catch (error) {
        console.error('MongoDB connection error:', error)
    }
}

export default connectDB;