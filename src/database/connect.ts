import mongoose, { ConnectOptions } from 'mongoose'
import config from '@/config/server'
import mongoDB from './config'

const options: ConnectOptions = {}

const connect = async () => {
  await mongoose
    .connect(mongoDB(), options)
    .then(() => {
      if (config.mode == 'DEV')
        console.log('Database: \x1b[32mConnected!\x1b[0m')
    })
    .catch((err) => {
      if (config.mode == 'DEV')
        console.log('Database: \x1b[31mError!\x1b[0m\n\n', err)
    })
}

export default connect
