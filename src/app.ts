// libs
import express, { Application } from 'express'
import history from 'connect-history-api-fallback'
import cors from 'cors'

const app: Application = express()
import config from './config/config'

// database
import mongoose from 'mongoose'
import mongoDB from './database/config'
mongoose.connect(mongoDB(), {}).then(() => console.log('Connected!'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// cors
app.use(cors())
app.options('*', cors())

// apirouting
import router from './routes/api'
app.use('/api', router)

// frontend
app.use(history())
app.use(express.static(__dirname + '/static'))

app.listen(config.port)
