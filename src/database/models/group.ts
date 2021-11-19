import { model, Schema, Model, Document } from 'mongoose'

interface Group extends Document {
  GroupID: number
  GroupName: string
}

const GroupSchema: Schema = new Schema({
  GroupID: { type: Number, required: true },
  GroupName: { type: String, required: true },
})

const GroupModel: Model<Group> = model('Groups', GroupSchema)

export default GroupModel
