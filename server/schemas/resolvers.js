const { AuthenticationError } = require('apollo-server-express');
const { User, Listing } = require('../models');
const { signToken } = require('../utils/auth');
// jsonwebtoken

const resolvers = {
  Query: {
    getUsers: async () => {
      return await User.find({});
    },
    getlistings: async () => {
      return await Listing.find({})
    }
  },

  Mutation: {
    addUser: async (_, { username, firstName, lastname, email, password }) => {
      const user = await User.create({ username, firstName, lastname, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Sorry Try Again');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Sorry Try Again');
      }
      const token = signToken(user);
      return { token, user };
    },
  }
}

module.exports = resolvers;
