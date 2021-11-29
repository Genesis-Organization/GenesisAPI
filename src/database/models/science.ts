import { model, Schema, Model } from 'mongoose'
import { Science } from '@/types/sciences'

const ScienceSchema: Schema = new Schema({
  Group: { type: Number, required: true },
  ScienceID: { type: Number, required: true },
  ScienceName: { type: String, required: true },
})

const ScienceModel: Model<Science> = model('Sciences', ScienceSchema)

export default ScienceModel
