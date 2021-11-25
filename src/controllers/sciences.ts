import GroupModel from '@/database/models/group'
import ScienceModel from '@/database/models/science'
import BranchModel from '@/database/models/branch'
import SubjectModel from '@/database/models/subject'
import FormulaModel from '@/database/models/formula'
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
  async getBranches(req: Request, res: Response) {
    const filter = req.query.filter
    const value = req.query.value

    if (filter && value) {
      const branches = await BranchModel.find({filter: value})
      res.status(200).json(branches)
    } else {
      const branches = await BranchModel.find({})
      res.status(200).json(branches)
    }
  }
  async getSubjects(req: Request, res: Response) {
    const subjects = await SubjectModel.find({})
    res.status(200).json(subjects)
  }
  async getFormulas(req: Request, res: Response) {
    const formulas = await FormulaModel.find({})
    res.status(200).json(formulas)
  }
}

export default new GroupActions()
