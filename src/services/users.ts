import UserModel from '@/database/models/users/user'
import { UserQueryResponse } from '@/types/user'

class UsersServices {
  async getUserInfo(login: string): Promise<UserQueryResponse | null> {
    const user = await UserModel.findOne({ Login: login })
    if (user) {
      const safeUserData: UserQueryResponse = {
        Name: user.Name,
        Surname: user.Surname,
        Email: user.isEmailPublic && user.Email,
        DateOfBirth: user.isAgePublic && user.DateOfBirth,
        Login: user.Login,
        Degree: user.Degree,

        avatarFileID: user.avatarFileID,
        bannerFileID: user.bannerFileID,
        isGenesisMember: user.isGenesisMember,
        isProtected: user.isProtected,
        isSponsor: user.isSponsor,

        researchInterests: user.researchInterests,
        education: user.education,
        research: user.research,
        work: user.work,
        description: user.description,
        home: user.home,
        country: user.country,
        interests: user.interests,
        languages: user.languages,
        socialMedias: user.socialMedias,
      }
      return safeUserData
    } else return null
  }
}

export default new UsersServices()
