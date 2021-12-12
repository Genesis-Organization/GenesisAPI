import * as dotenv from 'dotenv'
dotenv.config()

const server = {
  port: process.env.PORT,
  adminIP: process.env.ADMIN_IP,
  mode: process.env.MODE,
}

export default server
