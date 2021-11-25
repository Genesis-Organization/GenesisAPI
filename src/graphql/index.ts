import { graphqlHTTP } from 'express-graphql'
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'
import path from 'path'

const schema = loadSchemaSync(path.join(__dirname, './schemas/schema.gql'), {
  loaders: [new GraphQLFileLoader()],
})

const root = {
  hello: () => {
    return 'Hello world!'
  },
}

const gqlHTTP = graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
})

export default gqlHTTP
