import { Types } from 'mongoose'

export interface User {
  _id: Types.ObjectId
  Name: string
  Surname: string
  Login: string
  Email: string
  DateOfBirth: string
  Degree: string
  Password: string

  avatarFileID?: string
  bannerFileID?: string
}
