import { Request, Response } from 'express'

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
}

export default new UsersController()
