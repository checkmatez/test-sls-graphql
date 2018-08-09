"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
// export const hello: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
//       input: event,
//     }),
//   };
//   cb(null, response);
// }
// Construct a schema, using GraphQL schema language
const typeDefs = apollo_server_lambda_1.gql `
  type Query {
    hello: String
  }
`;
// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};
const server = new apollo_server_lambda_1.ApolloServer({ typeDefs, resolvers });
exports.hello = server.createHandler();
//# sourceMappingURL=handler.js.map