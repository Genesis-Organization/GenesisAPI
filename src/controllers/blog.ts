import { Request, Response } from 'express'
// import jwt from 'jsonwebtoken'

// import config from '@/config/auth'
import BlogService from '@/services/blog'
import { UseAuthorization } from '@/middlewares/auth'
import { Post } from '@/types/blog'

class BlogController {
  service: BlogService

  constructor() {
    this.service = new BlogService()

    this.Publish.bind(this)
  }

  @UseAuthorization()
  async Publish(req: Request, res: Response) {
    const postData: Post = req.body.post
    this.service.Publish(postData)

    res.status(200).send(req.body)
  }
}

export default new BlogController()
