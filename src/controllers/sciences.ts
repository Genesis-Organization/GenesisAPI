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
    const branch = await BranchModel.find({})
    res.status(200).json(branch)
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
