import {model, Schema, Model, Document} from 'mongoose'

interface Formula extends Document {
    Subject: number,
    Content: string,
    Desc: string,
    Signs: string,
}

const FormulaSchema: Schema = new Schema({
    Subject: {type: Number, required: true},
    Content: {type: String, required: true},
    Desc: { type: String, required:true },
    Signs: { type: String, required:true },
})

const FormulaModel: Model<Formula> = model('Formulas', FormulaSchema)

export default FormulaModel