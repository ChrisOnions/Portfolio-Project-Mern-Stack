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

  type Category{
    name: String
  },

  type WorkOrder {
    _id: ID!
    date: String
    user: User!
    category:String!
    problem: String!
    reply: Boolean!
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
    WorkOrders: [WorkOrder]
    getCategory: [Category]
  },
  
  type Mutation {
    addUser(firstName: String!, lastName: String!, email:String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User

    addWorkOrder(category: String, problem: String reply:Boolean, statusOpen: Boolean): WorkOrder
    updateWorkOrder(_id: ID!, statusOpen: Boolean, handledBy: String, workerComments: String ): WorkOrder

    removeWorkOrder(_id:ID!): String

    login(email: String!,password: String!): Auth
  }
`;

module.exports = typeDefs;

