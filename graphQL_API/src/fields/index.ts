import { GraphQLObjectType } from "graphql";
import { memberField } from "@/fields/member/";

export const queryType = new GraphQLObjectType({
  name: "Query",
  description: "The root query type.",
  fields: {
    ...memberField.query
  }
});
