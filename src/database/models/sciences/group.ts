import { prop, getModelForClass } from '@typegoose/typegoose'

class Group {
  @prop()
  public GroupID?: number

  @prop()
  public GroupName?: string
}

const GroupModel = getModelForClass(Group)

export default GroupModel
