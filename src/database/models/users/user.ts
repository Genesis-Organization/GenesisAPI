import { prop, getModelForClass } from '@typegoose/typegoose'

class User {
  @prop({ required: true })
  public Name!: string

  @prop({ required: true })
  public Surname!: string

  @prop({ required: true })
  public Login!: string

  @prop({ required: true })
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
