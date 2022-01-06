import { Router } from 'express'
import AuthControllers from '@/controllers/auth'

const UsersRouter: Router = Router()

// eslint-disable-next-line
UsersRouter.post('/login', AuthControllers.Login)
  .post('/register', AuthControllers.Register)
  .get('/logout', AuthControllers.Logout)

export default UsersRouter
