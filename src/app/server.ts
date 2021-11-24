import app from './app'
import config from '@/config/config'
import gqlHTTP from '@/graphql'
import middlewares from '@/middlewares/index'
import serveApi from '@/routes/api'
import serveStatic from '@/routes/static'

app.use(middlewares)

app.use('/api', serveApi)
app.use('/graphql', gqlHTTP)
app.use(serveStatic)

app.listen(config.port)
