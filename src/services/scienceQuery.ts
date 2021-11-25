import { Request } from 'express'
import { Model } from 'mongoose'

const scienceQuery = async (req: Request, model: Model<object>) => {
  const filter: string = req.query.filter as string
  const target: string = req.query.target as string

  let response: object[]

  if (filter && target) {
    response = await model.find({}).where(target).equals(filter)
  } else {
    response = await model.find({})
  }

  return response
}

export default scienceQuery
