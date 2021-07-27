const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    firstName: String!
    lastname: String!
    email:String!
    password: String!
    createdAt: String
    # listing [Listing]
  },
  type Listing {
    _id: ID!
    houseNumber: Int!
    streetName: String!
    suburb: String!
    city: String!
    country: String!
    price: Int!
    forSale: Boolean
    createdAt: String
  },
  type Auth {
    token: ID!
    user: User
  },

  type Query {
    getUsers: [User]
    getlistings: [Listing]
  },
  
  type Mutation {
    addUser(
      username: String!,
      firstName: String!,
      lastname: String!,
      email:String!,
      password: String!,
    ): Auth
    login(email: String!,
    password: String!
    ): Auth
  }
`;

module.exports = typeDefs;

