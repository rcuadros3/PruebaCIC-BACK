import { Router } from 'express'
import {
  deleteCTopic,
  getCTopic,
  getCTopics,
  postCTopic,
  putCTopic,
} from '../controllers/topic.controllers.js'

const router = Router()

router.get('/topics/:course', getCTopics)

router.get('/topic/:id', getCTopic)

router.post('/topic', postCTopic)

router.put('/topic/:id', putCTopic)

router.delete('/topic/:id', deleteCTopic)

export default router
