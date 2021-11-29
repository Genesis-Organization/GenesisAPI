import { Router } from 'express'
import GroupActions from '@/controllers/sciences'

const sciencesRouter: Router = Router()
sciencesRouter
  .get('/groups', GroupActions.getGroups)
  .get('/sciences', GroupActions.getSciences)
// .get('/branches', GroupActions.getBranches)
// .get('/subjects', GroupActions.getSubjects)
// .get('/formulas', GroupActions.getFormulas)

export default sciencesRouter
