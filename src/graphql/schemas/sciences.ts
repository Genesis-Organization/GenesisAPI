import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Group {
  @Field()
  ID: number

  @Field()
  Name: string
}
