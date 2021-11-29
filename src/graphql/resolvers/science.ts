import { Resolver, Query } from 'type-graphql'

@Resolver()
class ScienceResolver {
  @Query(() => String)
  async hello() {
    return 'worldsdasdasdas KURWA DZIALA'
  }
}

export default ScienceResolver
