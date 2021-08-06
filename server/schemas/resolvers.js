const { AuthenticationError } = require('apollo-server-express');
const { User, Listing, Workorder, Category } = require('../models');
const { signToken } = require('../utils/auth');
// jsonwebtoken

const resolvers = {
  Query: {
    getUsers: async () => {
      return await User.find({});
    },
    getlistings: async () => {
      return await Listing.find({})
    },
    WorkOrders: async () => {
      return await Workorder.find({})
    },
    getCategory: async () => {
      console.log('GetCategory', 'Doot')
      return await Category.find({})
    },
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
    },
    addWorkOrder: async (_, args) => {

      const { category, problem, reply, statusOpen } = args;
      const workOrder = await Workorder.create({ category, problem, reply, statusOpen })
      return workOrder;
    },
    updateWorkOrder: async (_, { _id, statusOpen, handledBy, workerComments }) => {
      console.log('updateWorkOrder', 'Doot')
      return await Workorder.findOneAndUpdate(
        { _id: _id },
        {
          statusOpen,
          handledBy,
          workerComments
        },
      )
    },
    removeWorkOrder: async (_, { _id }) => {
      const order = await Workorder.findOneAndDelete(
        {
          _id: _id
        }
      );
      return "Work-Order Deleted"
    }
  }
}
module.exports = resolvers;
// (parent, args, ctx, info)
// parent, args, context, info