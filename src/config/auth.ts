import * as dotenv from 'dotenv'
dotenv.config()

const auth = {
  jwt: {
    secret: process.env.JWT_SECRET,
  },
}

export default auth
