import { Router } from 'express'
import routesShared from './shared/index'

const router: Router = Router()
router.use('/shared', routesShared)

export default router
