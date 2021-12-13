import mongoose, { ConnectOptions } from 'mongoose'
import mongoDB from './config'

const options: ConnectOptions = {}

mongoose
  .connect(mongoDB(), options)
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err))
