import { Router } from 'express'
import sciencesRouter from './sciences'

const routesShared: Router = Router()
routesShared.use('/sciences', sciencesRouter)

export default routesShared
