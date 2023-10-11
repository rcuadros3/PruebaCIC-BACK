import { createPool } from 'mysql2/promise'
import {
  DB_DATABASE,
  DB_HOST,
  DB_USER,
  DB_PORT,
  DB_PASSWORD,
} from '../config.js'

export const connection = createPool({
  host: DB_HOST,
  user: DB_USER,
  port: DB_PORT,
  password: DB_PASSWORD,
  database: DB_DATABASE,
})
