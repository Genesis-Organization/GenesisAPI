import { prop, getModelForClass } from '@typegoose/typegoose'

class Science {
  @prop()
  public Group?: number

  @prop()
  public ScienceID?: number

  @prop()
  public ScienceName?: string
}

const ScienceModel = getModelForClass(Science)

export default ScienceModel
