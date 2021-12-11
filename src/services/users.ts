import bcrypt from 'bcrypt'
import UserModel from '@/database/models/users/user'
import { UserRegisterReq } from '@/types/users'

class UsersServices {
  async Register(userData: UserRegisterReq) {
    const sameLogin = await UserModel.find({ Login: userData.Login })
    if (sameLogin.length === 0) {
      try {
        const User = new UserModel(userData)
        User.Password = await bcrypt.hash(userData.Password, 10)
        await User.save()
        return User
      } catch (e) {
        throw new Error(e)
      }
    } else {
      throw new Error('user-exist')
    }
  }
  async Login() {
    return 'a'
  }
}

export default new UsersServices()
