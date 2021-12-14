import { Request, Response } from 'express'

import UsersServices from '@/services/users'

class UsersController {
  async getUserInfo(req: Request, res: Response) {
    const login = req.params.id
    const user = await UsersServices.getUserInfo(login)
    res.send(user)
  }
}

export default new UsersController()
