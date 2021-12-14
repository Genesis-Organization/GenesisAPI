import UserModel from '@/database/models/users/user'
import { UserQueryResponse } from '@/types/user'

class UsersServices {
  async getUserInfo(login: string): Promise<UserQueryResponse> {
    const user = await UserModel.findOne({ Login: login })
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
  }
}

export default new UsersServices()
