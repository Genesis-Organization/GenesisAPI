import { Request, Response } from 'express'

import AuthServices from '@/services/auth'
import { UserLoginReq, UserRegisterReq } from '@/types/auth'

class AuthControllers {
  async Register(req: Request, res: Response) {
    const userData: UserRegisterReq = {
      Name: req.body.Name,
      Surname: req.body.Surname,
      Login: req.body.Login,
      Email: req.body.Email,
      DateOfBirth: req.body.DateOfBirth,
      Degree: req.body.Degree,
      Password: req.body.Password,
    }
    try {
      const user = await AuthServices.Register(userData)
      const token = await AuthServices.CreateToken(user._id)
      res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 21,
      })
      res.status(201).json({ user: user._id })
    } catch (e) {
      res.status(422).send(e.message)
    }
  }
  async Login(req: Request, res: Response) {
    const Login = req.body.Login
    const Password = req.body.Password
    const userData: UserLoginReq = {
      Login,
      Password,
    }
    try {
      const user = await AuthServices.Login(userData)
      const token = await AuthServices.CreateToken(user._id)
      res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 21,
      })
      res.status(200).json({ user: user._id })
    } catch (e) {
      res.status(422).send(e.message)
    }
  }
}

export default new AuthControllers()
