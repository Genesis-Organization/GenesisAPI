import express, { Application } from 'express'
import middlewares from '@/middlewares/index'
import serveApi from '@/routes/api'
import serveStatic from '@/routes/static'
import connect from '@/database/connect'

const app: Application = express()

const createServer = async () => {
  await connect()

  app.disable('etag')

  app.use(middlewares)
  app.use(serveStatic)
  app.use('/api', serveApi)

  return app
}

export default createServer
