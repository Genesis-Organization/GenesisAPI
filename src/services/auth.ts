import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '@/config/auth'
import UserModel from '@/database/models/users/user'
import { UserLoginReq, UserRegisterReq } from '@/types/auth'

class AuthServices {
  async Validate(userData: UserRegisterReq) {
    const existsLogin = await UserModel.exists({ Login: userData.Login })
    const existsEmail = await UserModel.exists({ Email: userData.Email })
    if (existsLogin === false) {
      if (existsEmail === false) {
        return true
      } else {
        throw new Error('email-exist')
      }
    } else {
      throw new Error('user-exist')
    }
  }
  async Register(userData: UserRegisterReq) {
    try {
      const isValid = await this.Validate(userData)
      if (isValid === true) {
        const newUser = new UserModel(userData)
        const salt = await bcrypt.genSalt()
        newUser.Password = await bcrypt.hash(userData.Password, salt)

        const userResponse = await newUser.save()
        return userResponse
      }
    } catch (e) {
      throw new Error(e)
    }
  }
  async Login(loginReq: UserLoginReq) {
    const user = await UserModel.findOne({
      Login: loginReq.Login,
    })
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(
        loginReq.Password,
        user.Password
      )
      if (isPasswordCorrect === true) {
        return user
      } else {
        throw new Error('wrong-password')
      }
    } else {
      throw new Error('wrong-data')
    }
  }
  async CreateToken(id: string) {
    return jwt.sign({ id }, config.jwt.secret, {
      expiresIn: 1000 * 60 * 60 * 24 * 21,
    })
  }
}

export default new AuthServices()
