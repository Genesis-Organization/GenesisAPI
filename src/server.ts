import express, { Application } from 'express'
import config from '@/config/server'
import middlewares from '@/middlewares/index'
import serveApi from '@/routes/api'
import serveStatic from '@/routes/static'
import connect from '@/database/connect'

const app: Application = express()

const init = async () => {
  await connect()

  app.disable('etag')

  app.use(middlewares)
  app.use(serveStatic)
  app.use('/api', serveApi)

  await app.listen(config.port, () => {
    config.mode == 'DEV' &&
      console.log(
        `\x1b[36mApp running at:\x1b[0m http://localhost:${config.port}/`,
        '\n\x1b[4m\n___________________________________________________\x1b[0m\n'
      )
  })
}

export default init
