import { Router } from 'express'

import UsersControllers from '@/controllers/Users'
const UsersRouter: Router = Router()

// eslint-disable-next-line
UsersRouter
  .get('/:id', UsersControllers.getUserInfo)
  .put('/desc/:id', UsersControllers.changeDescription)
  .put('/interests/:id', UsersControllers.changeInterests)

export default UsersRouter
