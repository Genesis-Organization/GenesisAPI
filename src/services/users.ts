import bcrypt from 'bcrypt'

import UserModel from '@/database/models/users/user'
import AuthServices from './auth'
import { ResearchInterest, University, UserQueryResponse } from '@/types/user'

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
    } else throw new Error('Invalid user data')
  }
  async changeDescription(login: string, description: string) {
    const user = await UserModel.findOne({ Login: login })
    user.description = description
    user.save()
    const token = AuthServices.CreateToken(user)
    return token
  }
  async changeInterests(login: string, interests: ResearchInterest[]) {
    const user = await UserModel.findOne({ Login: login })
    user.researchInterests = interests
    user.save()
    const token = AuthServices.CreateToken(user)
    return token
  }
  async changeEducation(login: string, education: University[]) {
    const user = await UserModel.findOne({ Login: login })
    user.education = education
    user.save()
    const token = AuthServices.CreateToken(user)
    return token
  }
  async changeName(
    login: string,
    password: string,
    name: string,
    surname: string
  ) {
    const user = await UserModel.findOne({ Login: login })
    const verify = await bcrypt.compare(password, user.Password)

    if (user && verify) {
      user.Name = name
      user.Surname = surname
      user.save()
      const token = AuthServices.CreateToken(user)
      return token
    } else throw new Error('Invalid password')
  }

  async changeEmail(login: string, password: string, email: string) {
    const user = await UserModel.findOne({ Login: login })
    const verify = await bcrypt.compare(password, user.Password)

    if (user && verify) {
      user.Email = email
      user.save()
      const token = AuthServices.CreateToken(user)
      return token
    } else throw new Error('Invalid password')
  }

  async changeDateOfBirth(
    login: string,
    password: string,
    dateofbirth: string
  ) {
    const user = await UserModel.findOne({ Login: login })
    const verify = await bcrypt.compare(password, user.Password)

    if (user && verify) {
      user.DateOfBirth = dateofbirth
      user.save()
      const token = AuthServices.CreateToken(user)
      return token
    } else throw new Error('Invalid password')
  }
}

export default new UsersServices()
