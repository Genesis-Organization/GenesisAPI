import { Router } from 'express'

import SciencesRouter from './api/sciences'
import AuthRouter from './api/auth'
import UsersRouter from './api/users'
import BlogRouter from './api/blog'

const router: Router = Router()

router.use('/sciences', SciencesRouter)
router.use('/auth', AuthRouter)
router.use('/users', UsersRouter)
router.use('/blog', BlogRouter)

export default router
