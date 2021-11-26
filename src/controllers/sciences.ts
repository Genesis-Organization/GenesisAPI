import { Request, Response } from 'express'

import scienceQuery from '@/services/scienceQuery'

import GroupModel from '@/database/models/group'
import ScienceModel from '@/database/models/science'
import BranchModel from '@/database/models/branch'
import SubjectModel from '@/database/models/subject'
import FormulaModel from '@/database/models/formula'

class GroupActions {
  async getGroups(req: Request, res: Response) {
    const filter: string = req.query.filter as string
    const target: string = req.query.target as string

    const query = await scienceQuery(GroupModel, filter, target)
    res.status(200).json(query)
  }

  async getSciences(req: Request, res: Response) {
    const filter: string = req.query.filter as string
    const target: string = req.query.target as string

    const query = await scienceQuery(ScienceModel, filter, target)
    res.status(200).json(query)
  }

  async getBranches(req: Request, res: Response) {
    const filter: string = req.query.filter as string
    const target: string = req.query.target as string

    const query = await scienceQuery(BranchModel, filter, target)
    res.status(200).json(query)
  }

  async getSubjects(req: Request, res: Response) {
    const filter: string = req.query.filter as string
    const target: string = req.query.target as string

    const query = await scienceQuery(SubjectModel, filter, target)
    res.status(200).json(query)
  }
  async getFormulas(req: Request, res: Response) {
    const filter: string = req.query.filter as string
    const target: string = req.query.target as string

    const query = await scienceQuery(FormulaModel, filter, target)
    res.status(200).json(query)
  }
}

export default new GroupActions()
