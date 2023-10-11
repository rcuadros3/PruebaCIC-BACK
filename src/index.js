import cors from 'cors'
import express from 'express'
import http from 'http'
import { PORT } from '../config.js'
import courseRoutes from './routes/course.routes.js'
import topicRoutes from './routes/topic.routes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1', courseRoutes)
app.use('/api/v1', topicRoutes)

const server = http.createServer(app)

server.listen(PORT)
console.log('Listening on port', PORT)
