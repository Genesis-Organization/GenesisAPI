import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'type-graphql'
import ScienceResolver from './resolvers/science'

const gqlServer = async () => {
  const schema = await buildSchema({
    resolvers: [ScienceResolver],
    emitSchemaFile: true,
  })

  const gqlHTTP = graphqlHTTP({
    schema,
    graphiql: true,
  })

  return gqlHTTP
}

export default gqlServer
