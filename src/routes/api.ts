import { Router } from 'express'
import GroupActions from '../controllers/groups'
const router: Router = Router()

router.get('/groups', GroupActions.getGroups)

export default router
