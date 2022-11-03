const { gql } = require('apollo-server-express');

const employerTypeDefs = gql`
  type Employer {
    _employerId: ID
    employerName: String
    employerEmail: String
    employerPassword: String
  }
  type Auth {
    token: ID!
    employer: Employer
  }
  type Query {
    employers: [Employer]
    Employer(employerName: String!): Employer
    me: Employer
  }
  type Mutation {
    addEmployer(employerName: String!, employerEmail: String!, employerPassword: String!): Auth
    login(employerEmail: String!, employerPassword: String!): Auth
  }
`;

module.exports = employerTypeDefs;