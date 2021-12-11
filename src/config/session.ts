import { SessionOptions } from 'express-session'
import * as dotenv from 'dotenv'
dotenv.config()

const session: SessionOptions = {
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false,
}

export default session
