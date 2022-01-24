import { Router } from 'express'

import UsersControllers from '@/controllers/Users'
const UsersRouter: Router = Router()

// eslint-disable-next-line
UsersRouter.get('/:id', UsersControllers.getUserInfo)
  .put('/:id/desc', UsersControllers.changeDescription)
  .put('/:id/interests', UsersControllers.changeInterests)
  .put('/:id/education', UsersControllers.changeEducation)
  .put('/:id/name', UsersControllers.changeName)
  .put('/:id/email', UsersControllers.changeEmail)
  .put('/:id/dateofbirth', UsersControllers.changeDateOfBirth)
// .put('/:id/password', UsersControllers.changePassword)

export default UsersRouter
