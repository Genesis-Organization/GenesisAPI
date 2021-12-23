// IT IS A ROOT FILE TO MANAGE APP
import 'module-alias/register'
import 'reflect-metadata'

import config from '@/config/server'
import init from './server'

config.mode == 'DEV' &&
  console.log(
    '\x1b[4m\n___________________________________________________\x1b[0m\n\n' +
      '\x1b[36m' +
      'Genesis API v1.3.1 \x1b[0m\n' +
      '\x1b[32m' +
      `Node: ${process.version} \x1b[0m\n` +
      'by: Mateusz Słotwiński\n'
  )

init()
