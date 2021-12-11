import app from './app'
import config from '@/config/config'
import gqlHTTP from '@/graphql'
import middlewares from '@/middlewares/index'
import serveApi from '@/routes/api'
import serveStatic from '@/routes/static'

const init = async () => {
  app.use(middlewares)

  app.use('/api', serveApi)
  app.use('/graphql', await gqlHTTP())
  app.use(serveStatic)

  await app.listen(config.server.port)
}

export default init
