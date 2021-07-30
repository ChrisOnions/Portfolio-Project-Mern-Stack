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
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (_, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }
      throw new AuthenticationError('Not logged in');
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials 1');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials 2');
      }
      const token = signToken(user);
      return { token, user };
    }
  }
}

module.exports = resolvers;

