import bcrypt from 'bcrypt'
import UserModel from '@/database/models/users/user'
import { UserRegisterReq } from '@/types/users'

class UsersServices {
  async Validate(userData: UserRegisterReq) {
    const sameLogin = await UserModel.find({ Login: userData.Login })
    const sameEmail = await UserModel.find({ Email: userData.Email })
    if (sameLogin.length === 0) {
      if (sameEmail.length === 0) {
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
  async Login() {
    return 'a'
  }
}

export default new UsersServices()
