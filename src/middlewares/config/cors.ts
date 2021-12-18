import cors, { CorsOptions } from 'cors'

const corsOptions: CorsOptions = {
  origin: [
    'http://localhost:80',
    'http://localhost:4000',
    'http://localhost:2224',
    'https://genesis.mslotwinski.eu',
  ],
  credentials: true,
}

export default cors(corsOptions)
