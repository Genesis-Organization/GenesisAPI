import { Router } from 'express'
import AuthControllers from '@/controllers/users'

const UsersRouter: Router = Router()

// eslint-disable-next-line
UsersRouter
  .post('/register', AuthControllers.Register)
  .post('/login', AuthControllers.Login)

export default UsersRouter
