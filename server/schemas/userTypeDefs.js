const { gql } = require('apollo-server-express');

const userTypeDefs = gql`
type Employer {
    employerName: String
    employerEmail: String
    employerPassword: String
    employerDescription: String
    employerLocation: String
    jobs:Schema.type.String
  }
  type User {
    _userId: ID
    userName: String
    UserEmail: String
    userPassword: String
    isEmployer: Boolean 
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    employers:[Employer]
    employer(employerName:String!)
    meEmployer: Employer
    users: [User]
    user(userName: String!): User
    me: User
  }
  type Mutation {
    addUser(userName: String!, userEmail: String!, userPassword: String!, isEmployer: Boolean): Auth
    login(userEmail: String!, userPassword: String!): Auth
  }

`;

module.exports = userTypeDefs;