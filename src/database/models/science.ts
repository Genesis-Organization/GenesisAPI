import {model, Schema, Model, Document} from 'mongoose'

interface Science extends Document {
    Group: number,
    ScienceID: number,
    ScienceName: string,
}

const ScienceSchema: Schema = new Schema({
    Group: {type: Number, required: true},
    ScienceID: { type: Number, required:true },
    ScienceName: { type: String, required:true },
})

const ScienceModel: Model<Science> = model('Sciences', ScienceSchema)

export default ScienceModel