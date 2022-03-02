import { Request, Response } from 'express'
import config from '@/config/auth'
import AuthService from '@/services/auth'
import { UserLoginReq, UserRegisterReq } from '@/types/auth'

class AuthController {
  service: AuthService

  constructor() {
    this.service = new AuthService()
  }

  async Register(req: Request, res: Response) {
    const userData: UserRegisterReq = {
      Name: req.body.Name,
      Surname: req.body.Surname,
      Login: req.body.Login,
      Email: req.body.Email,
      DateOfBirth: req.body.DateOfBirth,
      Degree: req.body.Degree,
      Password: req.body.Password,
      avatarFileID: 'default',
      bannerFileID: 'default',
      isEmailPublic: false,
      isAgePublic: false,
    }
    try {
      const user = await this.service.Register(userData)
      const token = await this.service.CreateToken(user)
      res.cookie('jwt', token, {
        maxAge: Number(config.jwt.expiresIn),
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
      const user = await this.service.Login(userData)
      const token = await this.service.CreateToken(user)
      res.cookie('jwt', token, {
        maxAge: Number(config.jwt.expiresIn),
      })
      res.status(200).json({ user: user._id })
    } catch (e) {
      res.status(422).send(e.message)
    }
  }
  async Logout(req: Request, res: Response) {
    res.cookie('jwt', '', {
      maxAge: 1,
    })
    res.status(200).send('Hello, how are you?')
  }
}

export default new AuthController()
