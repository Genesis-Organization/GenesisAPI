import { Router } from 'express'
import ScienceControllers from '@/controllers/sciences'

const SciencesRouter: Router = Router()

// eslint-disable-next-line
SciencesRouter
  .get('/groups', ScienceControllers.getGroups)
  .get('/sciences', ScienceControllers.getSciences)
  .get('/branches', ScienceControllers.getBranches)
  .get('/sciencseobj', ScienceControllers.getSciencesObject)
  .get('/branchesobj', ScienceControllers.getBranchesObject)
  .get('/fetchsciences', ScienceControllers.fetchSciences)

// .get('/subjects', ScienceControllers.getSubjects)
// .get('/formulas', ScienceControllers.getFormulas)

export default SciencesRouter
