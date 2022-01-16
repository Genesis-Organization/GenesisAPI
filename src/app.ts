import 'module-alias/register'
import 'reflect-metadata'

import config from '@/config/server'
import { log_start, log_end } from './logs'
import createServer from './server'

log_start()
const init = async () => {
  const server = await createServer()

  server.listen(config.port, () => log_end(config.port))
}

init()
