import express from 'express'
import history from 'connect-history-api-fallback'
import app from './app'
import config from '@/config/config'
import router from '@/routes/index'

app.use('/api', router)

// frontend
app.use(history())
app.use(express.static(__dirname + '@/static'))

app.listen(config.port)
