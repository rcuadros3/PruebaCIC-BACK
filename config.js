import { config } from 'dotenv'
config()

export const PORT = process.env.PORT || 3003
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_DATABASE = process.env.DB_DATABASE || 'buy_sell_car'
export const DB_PORT = process.env.DB_PORT || '3606'
