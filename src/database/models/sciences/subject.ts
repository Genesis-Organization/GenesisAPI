import { prop, getModelForClass } from '@typegoose/typegoose'

class Subject {
  @prop()
  public Science?: number

  @prop()
  public Branch?: number

  @prop()
  public SubjectID?: number

  @prop()
  public SubjectName?: string
}

const SubjectModel = getModelForClass(Subject)

export default SubjectModel
