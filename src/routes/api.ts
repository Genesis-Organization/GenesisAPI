import { Router } from 'express'

import sciencesRouter from './api/sciences'
// import cors from '@/middlewares/cors'

const router: Router = Router()

// router.use(cors)
router.use('/sciences', sciencesRouter)

export default router
