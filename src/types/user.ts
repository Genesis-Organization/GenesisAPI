import { Types } from 'mongoose'

// PascalCase -  required data
// camelCase -   optional data

export interface User {
  _id?: Types.ObjectId
  Name: string
  Surname: string
  Login: string
  Email: string
  DateOfBirth: string
  Degree: string
  Password: string

  avatarFileID?: string
  bannerFileID?: string
  isEmailPublic: boolean
  isAgePublic: boolean

  description?: string
  education?: University[]
  socialMedias?: SocialMedia[]
  work?: Work[]
  home?: string
  country?: string
  interests?: string[]
  languages?: string[]
}

export interface Work {
  Name: string
  Position: string
  Since: string
}

export interface University {
  science: string
  degree: string
  specialization?: string
}

export interface SocialMedia {
  brand: SocialMediaList
  content: string
}

export enum SocialMediaList {
  GOOGLE = 'Google',
  FACEBOOK = 'Facebook',
  YOUTUBE = 'YouTube',
  INSTAGRAM = 'Instagram',
  TWITTER = 'Twitter',
  MICROSOFT = 'Microsoft',
  GITHUB = 'Github',
  DISCORD = 'Discord',
  REDDIT = 'Reddit',
  TELEGRAM = 'Telegram',
  PINTEREST = 'Pinterest',
  SPOTIFY = 'Spotify',
  LINKEDIN = 'LinkedIn',
  TWITCH = 'Twitch',
}

export interface UserQueryResponse {
  Name: string
  Surname: string
  Login: string
  Email?: string
  DateOfBirth?: string
  Degree: string

  avatarFileID?: string
  bannerFileID?: string
  isEmailPublic?: boolean
  isAgePublic?: boolean
  socialMedias?: SocialMedia[]
  education?: University[]
  description?: string
  home?: string
  country?: string
  work?: string
  interests?: string[]
  languages?: string[]
}
