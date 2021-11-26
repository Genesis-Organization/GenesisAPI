import { Model } from 'mongoose'

const scienceQuery = async (
  model: Model<object>,
  filter?: string,
  target?: string
) => {
  let response: object[]

  if (filter && target) {
    response = await model.find({}).where(target).equals(filter)
  } else {
    response = await model.find({})
  }

  return response
}

export default scienceQuery
