import bcrypt from 'bcrypt'
import UserModel from '@/database/models/users/user'
import { UserRegisterReq } from '@/types/users'

class UsersServices {
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
        const User = new UserModel(userData)

        User.Password = await bcrypt.hash(userData.Password, 10)
        await User.save()
        return User
      }
    } catch (e) {
      throw new Error(e)
    }
  }
  async Login(user: any) {
    return user
  }
}

export default new UsersServices()
