import mongoose, { ConnectOptions } from 'mongoose'
import mongoDB from '@/database/config'

const options: ConnectOptions = {}

mongoose.connect(mongoDB(), options).then(() => console.log('Connected!'))
