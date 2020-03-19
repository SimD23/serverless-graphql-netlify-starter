const { gql } = require("apollo-server");

module.export = `
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;
