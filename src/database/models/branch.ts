import {model, Schema, Model, Document} from 'mongoose'

interface Branch extends Document {
    Science: number,
    BranchID: number,
    BranchName: string,
}

const BranchSchema: Schema = new Schema({
    Science: {type: Number, required: true},
    BranchID: { type: Number, required:true },
    BranchName: { type: String, required:true },
})

const BranchModel: Model<Branch> = model('Branches', BranchSchema)

export default BranchModel