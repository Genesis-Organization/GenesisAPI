import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import config from '@/config/auth'
import UsersService from '@/services/users'
import { UseAuthorization } from '@/middlewares/auth'

class UsersController {
  service: UsersService

  constructor() {
    this.service = new UsersService()
  }

  async getUserInfo(req: Request, res: Response) {
    const login = req.params.login
    try {
      const user = await this.service.getUserInfo(login)
      res.status(200).send(user)
    } catch (err) {
      res.status(400).send(err)
    }
  }

  @UseAuthorization()
  async changeDescription(req: Request, res: Response) {
    const login = req.params.login
    const token = req.body.token
    const description = req.body.description
    try {
      await jwt.verify(token, config.jwt.secret)
      const newToken = await this.service.changeDescription(login, description)
      res.cookie('jwt', newToken, {
        maxAge: Number(config.jwt.expiresIn),
      })
      res.status(200).send(newToken)
    } catch (err) {
      res.status(402).send(err)
    }
  }
  async changeInterests(req: Request, res: Response) {
    const login = req.params.login
    const token = req.body.token
    const interests = req.body.interests
    try {
      await jwt.verify(token, config.jwt.secret)
      const newToken = await this.service.changeInterests(login, interests)
      res.cookie('jwt', newToken, {
        maxAge: Number(config.jwt.expiresIn),
      })
      res.status(200).send(newToken)
    } catch (err) {
      res.status(402).send(err)
    }
  }
  async changeEducation(req: Request, res: Response) {
    const login = req.params.login
    const token = req.body.token
    const education = req.body.education
    try {
      await jwt.verify(token, config.jwt.secret)
      const newToken = await this.service.changeEducation(login, education)
      res.cookie('jwt', newToken, {
        maxAge: Number(config.jwt.expiresIn),
      })
      res.status(200).send(newToken)
    } catch (err) {
      res.status(402).send(err)
    }
  }
  async changeName(req: Request, res: Response) {
    const login = req.params.login

    const name = req.body.name
    const password = req.body.password
    const token = req.body.token
    const surname = req.body.surname
    try {
      await jwt.verify(token, config.jwt.secret)
      const newToken = await this.service.changeName(
        login,
        password,
        name,
        surname
      )
      res.cookie('jwt', newToken, {
        maxAge: Number(config.jwt.expiresIn),
      })
      res.status(200).send(newToken)
    } catch (err) {
      res.status(402).send(err)
    }
  }

  async changeEmail(req: Request, res: Response) {
    const login = req.params.login

    const password = req.body.password
    const token = req.body.token
    const email = req.body.email
    try {
      await jwt.verify(token, config.jwt.secret)
      const newToken = await this.service.changeEmail(login, password, email)
      res.cookie('jwt', newToken, {
        maxAge: Number(config.jwt.expiresIn),
      })
      res.status(200).send(newToken)
    } catch (err) {
      res.status(402).send(err)
    }
  }

  async changeDateOfBirth(req: Request, res: Response) {
    const login = req.params.login

    const password = req.body.password
    const token = req.body.token
    const dateofbirth = req.body.dateofbirth
    try {
      await jwt.verify(token, config.jwt.secret)
      const newToken = await this.service.changeDateOfBirth(
        login,
        password,
        dateofbirth
      )
      res.cookie('jwt', newToken, {
        maxAge: Number(config.jwt.expiresIn),
      })
      res.status(200).send(newToken)
    } catch (err) {
      res.status(402).send(err)
    }
  }
}

export default new UsersController()
