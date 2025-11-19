import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mainRouter from './router/index.js'

import connectDB from './config/db.config.js'

dotenv.config()
const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())

connectDB()
app.use('/', mainRouter)


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
    console.log(`Visit http://localhost:${PORT}`)
})