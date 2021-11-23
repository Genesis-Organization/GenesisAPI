import express, { Application } from 'express'
import cors from 'cors'

const app: Application = express()

// database
import mongoose from 'mongoose'
import mongoDB from '@/database/config'
mongoose.connect(mongoDB(), {}).then(() => console.log('Connected!'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// cors
app.use(cors())
app.options('*', cors())

export default app
