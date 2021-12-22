import app from './app'
import config from '@/config/server'
import middlewares from '@/middlewares/index'
import serveApi from '@/routes/api'
import serveStatic from '@/routes/static'

const init = async () => {
  app.disable('etag')

  app.use(middlewares)
  app.use(serveStatic)
  app.use('/api', serveApi)

  await app.listen(config.port)
}

export default init
