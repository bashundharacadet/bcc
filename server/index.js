import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT

const app = express()
app.use(express.json())



app.get('/', (req, res)=>{
    res.send('Server is running...')
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
    console.log(`Visit http://localhost:${PORT}`)
})