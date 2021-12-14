import UserModel from '@/database/models/users/user'
import { UserQueryResponse } from '@/types/user'

class UsersServices {
  async getUserInfo(login: string): Promise<UserQueryResponse | null> {
    const user = await UserModel.findOne({ Login: login })
    if (user) {
      const safeUserData: UserQueryResponse = {
        Name: user.Name,
        Surname: user.Surname,
        Email: user.Email,
        DateOfBirth: user.DateOfBirth,
        Login: user.Login,
        Degree: user.Degree,
        avatarFileID: user.avatarFileID,
        bannerFileID: user.bannerFileID,
      }
      return safeUserData
    } else return null
  }
}

export default new UsersServices()
