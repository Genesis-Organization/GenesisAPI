import { Request, Response } from 'express'

import UserServices from '@/services/users'

class UsersControllers {
  async Register(req: Request, res: Response) {
    const query = await UserServices.Register()
    res.status(200).send(query)
  }
  async Login(req: Request, res: Response) {
    const query = await UserServices.Login()
    res.send(query)
  }
}

export default new UsersControllers()
