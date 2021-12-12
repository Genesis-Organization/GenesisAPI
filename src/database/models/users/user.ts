import { prop, getModelForClass } from '@typegoose/typegoose'
import Validator from 'validator'

class User {
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

  @prop()
  public avatarFileID?: string

  @prop()
  public bannerFileID?: string
}

const UserModel = getModelForClass(User)

export default UserModel
