import { Router } from 'express'
import GroupActions from '../../controllers/sciences'

const sciencesRouter: Router = Router()
sciencesRouter.get('/groups', GroupActions.getGroups)

export default sciencesRouter
