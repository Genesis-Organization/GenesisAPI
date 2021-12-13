import { Router } from 'express'

import SciencesRouter from './api/sciences'
import AuthRouter from './api/auth'

const router: Router = Router()

router.use('/sciences', SciencesRouter)
router.use('/auth', AuthRouter)

export default router
