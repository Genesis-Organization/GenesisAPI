import { Router } from 'express'
import BlogController from '@/controllers/blog'

const BlogRouter: Router = Router()

BlogRouter.post('/publish/:login', BlogController.Publish)

export default BlogRouter
