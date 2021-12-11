import { Router } from 'express'
import UsersControllers from '@/controllers/users'

const UsersRouter: Router = Router()

// eslint-disable-next-line
UsersRouter
  .post('/register', UsersControllers.Register)
  .post('/login', UsersControllers.Login)

export default UsersRouter
