import Validator from 'validator'
import {
  prop,
  modelOptions,
  getModelForClass,
  Severity,
} from '@typegoose/typegoose'
import {
  University,
  SocialMedia,
  ResearchInterest,
  Research,
  Work,
} from '@/types/user'

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
class User {
  // REQUIRED

  @prop({ required: true })
  public Name!: string

  @prop({ required: true })
  public Surname!: string

  @prop({ required: true, minlength: 5 })
  public Login!: string

  @prop({ required: true, validate: [Validator.isEmail, 'incorrect-email'] })
  public Email!: string

  @prop({ required: true })
  public DateOfBirth!: string

  @prop({ required: true })
  public Degree!: string

  @prop({ required: true })
  public Password!: string

  // DEFAULT

  @prop()
  public avatarFileID?: string

  @prop()
  public bannerFileID?: string

  @prop()
  public isEmailPublic?: boolean

  @prop()
  public isAgePublic?: boolean

  @prop()
  public isGenesisMember?: boolean

  @prop()
  public isProtected?: boolean

  @prop()
  public isSponsor?: boolean

  // OPTIONAL
  @prop()
  public researchInterests?: ResearchInterest[]

  @prop()
  public education?: University[]

  @prop()
  public research?: Research[]

  @prop()
  public description?: string

  @prop()
  public socialMedias?: SocialMedia[]

  @prop()
  public home?: string

  @prop()
  public country?: string

  @prop()
  public work?: Work[]

  @prop()
  public interests?: string[]

  @prop()
  public languages?: string[]
}

const UserModel = getModelForClass(User)

export default UserModel
