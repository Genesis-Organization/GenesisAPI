import { prop, modelOptions, getModelForClass } from '@typegoose/typegoose'
import * as mongoose from 'mongoose'

@modelOptions({ existingMongoose: mongoose })
class Branch {
  @prop()
  public Science?: number

  @prop()
  public BranchID?: number

  @prop()
  public BranchName?: string

  @prop()
  public Desc?: string
}

const BranchModel = getModelForClass(Branch)

export default BranchModel
