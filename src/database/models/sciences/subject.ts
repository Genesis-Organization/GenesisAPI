import { model, Schema, Model, Document } from 'mongoose'

interface Subject extends Document {
  Science: number
  Branch: number
  SubjectID: number
  SubjectName: string
}

const SubjectSchema: Schema = new Schema({
  Science: { type: Number, required: true },
  Branch: { type: Number, required: true },
  SubjectID: { type: Number, required: true },
  SubjectName: { type: String, required: true },
})

const SubjectModel: Model<Subject> = model('Subjects', SubjectSchema)

export default SubjectModel
