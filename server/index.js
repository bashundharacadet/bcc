import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())


app.get('/', (req, res)=>{
    res.send('Server is running...')
})

app.get('/hi', (req, res)=>{
    res.send('Hi from the backend!')
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
    console.log(`Visit http://localhost:${PORT}`)
})