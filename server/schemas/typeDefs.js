const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
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

  type WorkOrder {
    _id: ID!
    user: User!
    date: String!
    problem: String!
    statusOpen: Boolean
    handledBy: String
    workerComments: String
  }
  type Auth {
    token: ID!
    user: User
  },

  type Query {
    getUsers: [User]
    getlistings: [Listing]
    getWorkOrder: [WorkOrder]
  },
  
  type Mutation {
    addUser(firstName: String!,lastName: String!,email:String!,password: String!,): Auth

    updateUser(firstName: String, lastName: String, email: String, password: String): User

    addWorkOrder(user: User, date: String ,problem: String)

    updateWorkOrder(statusOpen: Boolean, handledBy: String, workerComments: String)

    login(email: String!,password: String!): Auth
  }
`;

module.exports = typeDefs;

