import { Resolver, Query } from 'type-graphql'
import { Group } from '../schemas/sciences'

@Resolver()
class ScienceResolver {
  @Query(() => Group)
  async hello() {
    return {
      ID: 0,
      Name: 'Natural',
    }
  }
}

export default ScienceResolver
