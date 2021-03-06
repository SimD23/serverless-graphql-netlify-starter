const ApolloServer = require("apollo-server").ApolloServer;
const ApolloServerLambda = require("apollo-server-lambda").ApolloServer;
const { gql } = require("apollo-server-lambda");
// require("./config");
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Teliko is Online"
  }
};

function createLambdaServer() {
  return new ApolloServerLambda({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true
  });
}

function createLocalServer() {
  return new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true
  });
}

module.exports = { createLambdaServer, createLocalServer };
