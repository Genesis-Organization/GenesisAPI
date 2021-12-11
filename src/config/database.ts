import * as dotenv from 'dotenv'
dotenv.config()

const session = {
  host: process.env.DBHOST,
  user: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  database: process.env.DATABASE,
}

export default session
