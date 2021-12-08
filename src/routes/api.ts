import { Router } from 'express'

import SciencesRouter from './api/sciences'
import UsersRouter from './api/users'
// import cors from '@/middlewares/cors'

const router: Router = Router()
// router.use(cors)

router.use('/sciences', SciencesRouter)
router.use('/users', UsersRouter)

export default router
