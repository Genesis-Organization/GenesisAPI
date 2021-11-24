import { graphqlHTTP } from 'express-graphql'
import { buildSchema, GraphQLSchema } from 'graphql'

const schema: GraphQLSchema = buildSchema(`
    type Query {
        hello: String
    }
`)

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
