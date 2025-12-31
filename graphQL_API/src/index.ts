import * as e from 'express';
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";
import { queryType } from "./fields";

const PORT = 8888;
const app = e();

const schema = new GraphQLSchema({
  query: queryType
});

app.use(
  '/graphql',
  e.json(),
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, ()=>console.log(`listening on :${PORT}`));