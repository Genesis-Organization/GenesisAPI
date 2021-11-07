import { Router, Request, Response } from 'express'
const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('OKKKKKKK')
})

export default router
