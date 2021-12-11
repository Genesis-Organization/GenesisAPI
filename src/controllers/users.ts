import { Request, Response } from 'express'

import UserServices from '@/services/users'
import { UserRegisterReq } from '@/types/users'

class UsersControllers {
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
      const isValid = await UserServices.Validate(userData)
      if (isValid === true) {
        const query = await UserServices.Register(userData)
        res.status(200).send(query)
      }
    } catch (e) {
      res.status(422).send(e.message)
    }
  }
  async Login(req: Request, res: Response) {
    const query = await UserServices.Login()
    res.send(query)
  }
}

export default new UsersControllers()
