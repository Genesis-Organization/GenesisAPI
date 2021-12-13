import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
// import flash from 'express-flash'
// import history from 'connect-history-api-fallback'
import passport from 'passport'

import session from './session'
import cors from '@/middlewares/cors'

import limiter from './limiter'

const json = express.json()
const urlencoded = express.urlencoded({ extended: true })

const middlewares = [
  session,
  json,
  urlencoded,
  cookieParser(),
  cors,
  // history(),
  morgan('dev'),
  helmet(),
  limiter,
  passport.initialize(),
  passport.session(),
]

export default middlewares
