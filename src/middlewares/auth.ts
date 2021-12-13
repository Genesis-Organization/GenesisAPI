import config from '@/config/auth'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt
  if (token) {
    jwt.verify(
      token,
      config.jwt.secret,
      (err: { message: string }, decodedToken: any) => {
        if (err) {
          console.log(err.message)
        } else {
          console.log(decodedToken)
          next()
        }
      }
    )
  }
}

export default requireAuth
