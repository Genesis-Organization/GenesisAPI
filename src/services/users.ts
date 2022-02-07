import bcrypt from 'bcrypt'

import UserModel from '@/database/models/users/user'
import AuthService from './auth'
import { ResearchInterest, University, UserQueryResponse } from '@/types/user'

class UsersServices {
  authService: AuthService

  constructor() {
    this.authService = new AuthService()
  }

  getUserInfo = async (login: string): Promise<UserQueryResponse | null> => {
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
  changeDescription = async (login: string, description: string) => {
    const user = await UserModel.findOne({ Login: login })
    user.description = description
    user.save()
    const token = this.authService.CreateToken(user)
    return token
  }
  changeInterests = async (login: string, interests: ResearchInterest[]) => {
    const user = await UserModel.findOne({ Login: login })
    user.researchInterests = interests
    user.save()
    const token = this.authService.CreateToken(user)
    return token
  }
  changeEducation = async (login: string, education: University[]) => {
    const user = await UserModel.findOne({ Login: login })
    user.education = education
    user.save()
    const token = this.authService.CreateToken(user)
    return token
  }
  changeName = async (
    login: string,
    password: string,
    name: string,
    surname: string
  ) => {
    const user = await UserModel.findOne({ Login: login })
    const verify = await bcrypt.compare(password, user.Password)

    if (user && verify) {
      user.Name = name
      user.Surname = surname
      user.save()
      const token = this.authService.CreateToken(user)
      return token
    } else throw new Error('Invalid password')
  }

  changeEmail = async (login: string, password: string, email: string) => {
    const user = await UserModel.findOne({ Login: login })
    const verify = await bcrypt.compare(password, user.Password)

    if (user && verify) {
      user.Email = email
      user.save()
      const token = this.authService.CreateToken(user)
      return token
    } else throw new Error('Invalid password')
  }

  changeDateOfBirth = async (
    login: string,
    password: string,
    dateofbirth: string
  ) => {
    const user = await UserModel.findOne({ Login: login })
    const verify = await bcrypt.compare(password, user.Password)

    if (user && verify) {
      user.DateOfBirth = dateofbirth
      user.save()
      const token = this.authService.CreateToken(user)
      return token
    } else throw new Error('Invalid password')
  }
}

export default UsersServices
