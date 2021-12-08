import { Router } from 'express'
import UsersControllers from '@/controllers/users'

const UsersRouter: Router = Router()

// eslint-disable-next-line
UsersRouter
  .post('/login', UsersControllers.Login)
  .post('/register', UsersControllers.Register)

export default UsersRouter
