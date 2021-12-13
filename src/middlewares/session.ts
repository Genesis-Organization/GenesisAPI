import session, { SessionOptions } from 'express-session'

const config: SessionOptions = {
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false,
}

export default session(config)
