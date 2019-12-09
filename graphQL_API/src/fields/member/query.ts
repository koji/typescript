import { GraphQLList } from 'graphql';
import { getMemberList } from "./resolvers";
import { memberType } from "./types";

export const memberQuery = {
  memberList: {
    type: new GraphQLList(memberType),
    description: "Get list of members data.",
    resolve: getMemberList
  }
};