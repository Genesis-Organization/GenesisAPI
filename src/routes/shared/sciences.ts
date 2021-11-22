import { Router } from 'express'
import GroupActions from '../../controllers/sciences'

const sciencesRouter: Router = Router()
sciencesRouter
  .get('/groups', GroupActions.getGroups)
  .get('/sciences', GroupActions.getSciences)

export default sciencesRouter
