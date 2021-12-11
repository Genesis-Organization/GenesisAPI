import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import flash from 'express-flash'
// import history from 'connect-history-api-fallback'
import session from 'express-session'

import sessionConf from '@/config/session'
import limiter from './limiter'

const json = express.json()
const urlencoded = express.urlencoded({ extended: true })

const middlewares = [
  json,
  urlencoded,
  cors(),
  // history(),
  morgan('dev'),
  helmet(),
  limiter,
  flash(),
  session(sessionConf),
]

export default middlewares
