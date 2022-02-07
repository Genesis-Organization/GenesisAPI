import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import config from '@/config/auth'
import UsersService from '@/services/users'

class UsersController {
  service: UsersService

  constructor() {
    this.service = new UsersService()
  }

  getUserInfo = async (req: Request, res: Response) => {
    const login = req.params.id
    try {
      const user = await this.service.getUserInfo(login)
      res.status(200).send(user)
    } catch (err) {
      res.status(400).send(err)
    }
  }
  changeDescription = async (req: Request, res: Response) => {
    const login = req.params.id
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
  changeInterests = async (req: Request, res: Response) => {
    const login = req.params.id
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
  changeEducation = async (req: Request, res: Response) => {
    const login = req.params.id
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
  changeName = async (req: Request, res: Response) => {
    const login = req.params.id

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

  changeEmail = async (req: Request, res: Response) => {
    const login = req.params.id

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

  changeDateOfBirth = async (req: Request, res: Response) => {
    const login = req.params.id

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
