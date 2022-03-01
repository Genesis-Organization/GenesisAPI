/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import config from '@/config/auth'

export function UseAuthorization(): MethodDecorator {
  return function (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value
    descriptor.value = function (...args: any[]) {
      try {
        const request = args[0] as Request
        const response = args[1] as Response
        const headers = request.headers
        const login = request.params.login

        if (headers.authorization && login) {
          try {
            const token = headers.authorization.split(' ')[1]
            const undecoded = jwt.verify(
              token,
              config.jwt.secret
            ) as jwt.JwtPayload

            if (undecoded.user.Login == login) {
              return original.apply(this, args)
            } else {
              throw new Error()
            }
          } catch (e) {
            response.status(401).json({ error: 'Not Authorized' })
          }
        }
        response.status(401).json({ error: 'Not Authorized' })
      } catch (e) {
        //
      }
    }
  }
}
