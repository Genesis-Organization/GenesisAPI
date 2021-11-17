import { Router } from 'express'
import GroupActions from '../actions/groups'
const router: Router = Router()

router.get('/groups', GroupActions.getGroups)

export default router
