import UserModel from '@/database/models/users/user'
import { UserRegisterReq } from '@/types/users'

class UsersServices {
  async Register(userData: UserRegisterReq) {
    const sameLogin = await UserModel.find({ Login: userData.Login })

    if (sameLogin.length == 0) {
      const User = new UserModel(userData)
      await User.save()
      return User
    } else {
      throw new Error('user-exist')
    }
  }
  async Login() {
    return 'a'
  }
}

export default new UsersServices()
