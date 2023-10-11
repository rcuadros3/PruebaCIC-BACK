import { Router } from 'express'
import {
  deleteCRoute,
  getCRoute,
  getCRoutes,
  postCRoute,
  putCRoute,
} from '../controllers/course.controllers.js'

const router = Router()

router.get('/courses', getCRoutes)

router.get('/course/:id', getCRoute)

router.post('/course', postCRoute)

router.put('/course/:id', putCRoute)

router.delete('/course/:id', deleteCRoute)

export default router
