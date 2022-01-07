import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import history from 'connect-history-api-fallback'

import config from '@/config/server'
import limiter from './config/limiter'
import cors, { CorsOptions } from 'cors'

const corsOptions: CorsOptions = {
  origin: [
    'http://localhost:80',
    'http://localhost:4000',
    'http://localhost:2224',
    'https://genesis.mslotwinski.eu',
  ],
  credentials: true,
}

const json = express.json()
const urlencoded = express.urlencoded({ extended: true })

const middlewares = [
  json,
  urlencoded,
  cookieParser(),
  cors(corsOptions),
  history(),
  helmet(),
  limiter,
]

config.mode == 'DEV' && middlewares.push(morgan('dev'))

export default middlewares
