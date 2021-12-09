import { UserRegisterReq } from '@/types/users'

class UsersServices {
  async Register(userData: UserRegisterReq) {
    return userData
  }
  async Login() {
    return 'a'
  }
}

export default new UsersServices()
