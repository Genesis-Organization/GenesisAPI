import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import history from 'connect-history-api-fallback'

import limiter from './limiter'

const json = express.json()
const urlencoded = express.urlencoded({ extended: true })

const middlewares = [
  json,
  urlencoded,
  cors(),
  history(),
  morgan('dev'),
  helmet(),
  limiter,
]

export default middlewares
