import { Post } from '@/types/blog'
import PostModel from '@/database/models/blog/post'

class BlogService {
  async publishPost(postData: Post) {
    const post = new PostModel(postData)
    post.save()
  }
}

export default BlogService
