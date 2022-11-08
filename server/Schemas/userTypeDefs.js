const { gql } = require('apollo-server-express');

const userTypeDefs = gql`
  type User {
    _userId: ID
    userName: String
    UserEmail: String
    userPassword: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(userName: String!): User
    me: User
  }
  type Mutation {
    addUser(userName: String!, userEmail: String!, userPassword: String!): Auth
    login(userEmail: String!, userPassword: String!): Auth
  }
`;

module.exports = userTypeDefs;