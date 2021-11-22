import GroupModel from '../database/models/group'
import ScienceModel from '../database/models/science'
import { Request, Response } from 'express'

class GroupActions {
  async getGroups(req: Request, res: Response) {
    const group = await GroupModel.find({})
    res.status(200).json(group)
  }
  async getSciences(req: Request, res: Response) {
    const science = await ScienceModel.find({})
    res.status(200).json(science)
  }
}

export default new GroupActions()
