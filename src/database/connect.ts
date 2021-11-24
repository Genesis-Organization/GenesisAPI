import mongoose from 'mongoose'
import mongoDB from '@/database/config'
mongoose.connect(mongoDB(), {}).then(() => console.log('Connected!'))
