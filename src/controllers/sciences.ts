import { Request, Response } from 'express'

import SciencesServices from '@/services/sciences'

class ScienceControllers {
  async getGroups(req: Request, res: Response) {
    const filter: string = req.query.filter as string
    const target: string = req.query.target as string

    const query = await SciencesServices.getGroups(filter, target)
    res.status(200).json(query)
  }

  async getSciences(req: Request, res: Response) {
    const filter: string = req.query.filter as string
    const target: string = req.query.target as string

    const query = await SciencesServices.getSciences(filter, target)
    res.status(200).json(query)
  }

  async getBranches(req: Request, res: Response) {
    const filter: string = req.query.filter as string
    const target: string = req.query.target as string

    const query = await SciencesServices.getBranches(filter, target)
    res.status(200).json(query)
  }

  // async getSubjects(req: Request, res: Response) {
  //   const filter: string = req.query.filter as string
  //   const target: string = req.query.target as string

  //   const query = await SciencesServices.getSubjects(filter, target)
  //   res.status(200).json(query)
  // }

  // async getFormulas(req: Request, res: Response) {
  //   const filter: string = req.query.filter as string
  //   const target: string = req.query.target as string

  //   const query = await SciencesServices.getFormulas(filter, target)
  //   res.status(200).json(query)
  // }

  async getSciencesObject(req: Request, res: Response) {
    const filter: string = req.query.filter as string
    const target: string = req.query.target as string

    const query = await SciencesServices.getScienceObject(filter, target)
    res.status(200).json(query)
  }

  async getBranchesObject(req: Request, res: Response) {
    const filter: string = req.query.filter as string
    const target: string = req.query.target as string

    const query = await SciencesServices.getBranchesObject(filter, target)
    res.status(200).json(query)
  }

  async fetchSciences(req: Request, res: Response) {
    const science: string = req.query.science as string
    const branch: string = req.query.branch as string

    try {
      const query = await SciencesServices.fetchSciences(science, branch)
      res.status(200).json(query)
    } catch (err) {
      res.status(400).send(err)
    }
  }
}

export default new ScienceControllers()
