import * as dotenv from 'dotenv'
dotenv.config()

const auth = {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
}

export default auth
