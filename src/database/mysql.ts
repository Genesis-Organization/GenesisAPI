import mysql from 'mysql'
import config from '../config/config'

const connection:mysql.Connection = mysql.createConnection({
  user: config.database.user,
  host: config.database.host,
  password: config.database.password,
  database: config.database.database,
})

export default connection
