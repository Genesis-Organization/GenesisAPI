import { Request, Response } from 'express'
// import jwt from 'jsonwebtoken'

// import config from '@/config/auth'
import BlogService from '@/services/users'

class BlogController {
  service: BlogService

  constructor() {
    this.service = new BlogService()
  }

  publishPost = async (req: Request, res: Response) => {
    res.send(req.body)
  }
}

export default new BlogController()
