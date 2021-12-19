import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import config from '@/config/auth'
import UsersServices from '@/services/users'

class UsersController {
  async getUserInfo(req: Request, res: Response) {
    const login = req.params.id
    try {
      const user = await UsersServices.getUserInfo(login)
      res.status(200).send(user)
    } catch (err) {
      res.status(422).send(err)
    }
  }
  async changeDescription(req: Request, res: Response) {
    const login = req.params.id
    const token = req.body.token
    const description = req.body.description
    try {
      await jwt.verify(token, config.jwt.secret)
      const newToken = await UsersServices.changeDescription(login, description)
      res.cookie('jwt', newToken, {
        maxAge: Number(config.jwt.expiresIn),
      })
      res.status(200).send(newToken)
    } catch (err) {
      res.status(403).send(err)
    }
  }
  async changeInterests(req: Request, res: Response) {
    const login = req.params.id
    const token = req.body.token
    const interests = req.body.interests
    try {
      await jwt.verify(token, config.jwt.secret)
      const newToken = await UsersServices.changeInterests(login, interests)
      res.cookie('jwt', newToken, {
        maxAge: Number(config.jwt.expiresIn),
      })
      res.status(200).send(newToken)
    } catch (err) {
      res.status(403).send(err)
    }
  }
}

export default new UsersController()
