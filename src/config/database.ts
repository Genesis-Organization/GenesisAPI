import * as dotenv from 'dotenv'
dotenv.config()

const database = {
  host: process.env.DBHOST,
  user: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  database: process.env.DATABASE,
}

export default database
