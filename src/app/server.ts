import app from './app'
import config from '@/config/config'
import gqlHTTP from '@/graphql'
import middlewares from '@/middlewares/index'
import serveApi from '@/routes/api'
import serveStatic from '@/routes/static'

app.use(middlewares)

async function init() {
  app.use('/api', serveApi)
  app.use('/graphql', await gqlHTTP())
  app.use(serveStatic)
}

init()
app.listen(config.port)
