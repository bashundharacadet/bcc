import {createNotice, getNotices, getNoticeById, updateNotice, deleteNotice} from './notice.controller.js'
import express from 'express'


const router = express.Router()
router.get('/test', (req, res)=>{
    res.send('Notice route is working')
})


router.post('/', createNotice)
router.get('/', getNotices)
router.get('/:id', getNoticeById)
router.put('/:id', updateNotice)
router.delete('/:id', deleteNotice)



export default router