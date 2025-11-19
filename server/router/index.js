import express from 'express'
import noticeRoutes from  '../features/notices/notice.router.js'

const router = express.Router()
router.get('/', (req, res)=>{
    res.send('Server is running...')
})

router.get('/hi', (req, res)=>{
    res.send('Hi from the backend!')
})


router.use('/notice', noticeRoutes)


export default router