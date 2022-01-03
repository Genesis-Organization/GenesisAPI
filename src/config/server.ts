import * as dotenv from 'dotenv'
dotenv.config()

const server = {
  port: process.env.PORT,
  mode: process.env.MODE,
}

export default server
