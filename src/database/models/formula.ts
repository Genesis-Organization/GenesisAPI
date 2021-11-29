import { model, Schema, Model } from 'mongoose'

import { Formula } from '@/types/sciences'

const FormulaSchema: Schema = new Schema({
  Subject: { type: Number, required: true },
  Content: { type: String, required: true },
  Desc: { type: String, required: true },
  Signs: { type: String, required: true },
})

const FormulaModel: Model<Formula> = model('Formulas', FormulaSchema)

export default FormulaModel
