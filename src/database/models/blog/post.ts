import { prop, modelOptions, getModelForClass } from '@typegoose/typegoose'
import * as mongoose from 'mongoose'

@modelOptions({ existingMongoose: mongoose })
class Post {
  @prop()
  public UserID?: string

  @prop()
  public Title?: string

  @prop()
  public Content?: string

  @prop()
  public Date?: string
}

const PostModel = getModelForClass(Post)

export default PostModel
