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

    const query = await SciencesServices.getGroups(filter, target)
    res.status(200).json(query)
  }

  async getSubjects(req: Request, res: Response) {
    const filter: string = req.query.filter as string
    const target: string = req.query.target as string

    const query = await SciencesServices.getGroups(filter, target)
    res.status(200).json(query)
  }
  async getFormulas(req: Request, res: Response) {
    const filter: string = req.query.filter as string
    const target: string = req.query.target as string

    const query = await SciencesServices.getGroups(filter, target)
    res.status(200).json(query)
  }
}

export default new ScienceControllers()
