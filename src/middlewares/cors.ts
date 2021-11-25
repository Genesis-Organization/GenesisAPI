import cors, { CorsOptions } from 'cors'
import { CustomOrigin, StaticOrigin } from '@/types/cors'

const whitelist: string[] = [
  'http://localhost:4000',
  'http://localhost:2224',
  'https://genesis.mslotwinski.eu/',
  'https://genesis-foundation.netlify.app/',
]

const allowedHeaders: string[] = [
  'Origin',
  'X-Requested-With',
  'Content-Type',
  'Accept',
  'X-Access-Token',
]

const origin: CustomOrigin = (
  userOrigin: string,
  callback: (err: Error, origin?: StaticOrigin) => void
) => {
  if (whitelist.indexOf(userOrigin) !== -1) {
    callback(null, true)
  } else {
    callback(new Error('Not allowed by CORS'))
  }
}

const corsOptions: CorsOptions = {
  allowedHeaders,
  origin,
}

export default cors(corsOptions)