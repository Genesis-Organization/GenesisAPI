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
    const filter: string = req.query.filter as string
    const filterInt = parseInt(filter)
    const target = req.query.target

    let sciences

    if (filter) {
      if (target == 'this') {
        sciences = await ScienceModel.find({ ScienceID: filterInt })
      } else {
        sciences = await ScienceModel.find({ Group: filterInt })
      }
    } else {
      sciences = await ScienceModel.find({})
    }
    res.status(200).json(sciences)
  }

  async getBranches(req: Request, res: Response) {
    const filter: string = req.query.filter as string
    const filterInt = parseInt(filter)
    const target = req.query.target

    let branches

    if (filter) {
      if (target == 'this') {
        branches = await BranchModel.find({ BranchID: filterInt })
      } else {
        branches = await BranchModel.find({ Science: filterInt })
      }
    } else {
      branches = await BranchModel.find({})
    }
    res.status(200).json(branches)
  }

  async getSubjects(req: Request, res: Response) {
    const filter: string = req.query.filter as string
    const filterInt = parseInt(filter)
    const target = req.query.target

    let subjects

    if (filter) {
      if (target == 'this') {
        subjects = await SubjectModel.find({ SubjectID: filterInt })
      } else {
        subjects = await SubjectModel.find({ Branch: filterInt })
      }
    } else {
      subjects = await SubjectModel.find({})
    }
    res.status(200).json(subjects)
  }
  async getFormulas(req: Request, res: Response) {
    const filter: string = req.query.filter as string
    const filterInt = parseInt(filter)
    const target = req.query.target

    let formulas

    if (filter) {
      formulas = await FormulaModel.find({ Subject: filterInt })
    } else {
      formulas = await FormulaModel.find({})
    }
    res.status(200).json(formulas)
  }
}

export default new GroupActions()
