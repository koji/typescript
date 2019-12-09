import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from "graphql";

export const memberType = new GraphQLObjectType({
  name: 'member',
  description: 'member',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Member ID',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Member Name',
    },
    age: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Member Age',
    }
  }
});