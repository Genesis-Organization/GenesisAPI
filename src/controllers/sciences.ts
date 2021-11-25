import { Request, Response } from 'express'

import scienceQuery from '@/services/scienceQuery'

import GroupModel from '@/database/models/group'
import ScienceModel from '@/database/models/science'
import BranchModel from '@/database/models/branch'
import SubjectModel from '@/database/models/subject'
import FormulaModel from '@/database/models/formula'

class GroupActions {
  async getGroups(req: Request, res: Response) {
    const group = await GroupModel.find({})
    res.status(200).json(group)
  }

  async getSciences(req: Request, res: Response) {
    const query = await scienceQuery(req, ScienceModel)
    res.status(200).json(query)
  }

  async getBranches(req: Request, res: Response) {
    const query = await scienceQuery(req, BranchModel)
    res.status(200).json(query)
  }

  async getSubjects(req: Request, res: Response) {
    const query = await scienceQuery(req, SubjectModel)
    res.status(200).json(query)
  }
  async getFormulas(req: Request, res: Response) {
    const query = await scienceQuery(req, FormulaModel)
    res.status(200).json(query)
  }
}

export default new GroupActions()
