import { model, Schema, Model } from 'mongoose'
import { Branch } from '@/types/sciences'

const BranchSchema: Schema = new Schema({
  Science: { type: Number, required: true },
  BranchID: { type: Number, required: true },
  BranchName: { type: String, required: true },
  Desc: { type: String, required: true },
})

const BranchModel: Model<Branch> = model('Branches', BranchSchema)

export default BranchModel
