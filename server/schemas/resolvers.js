const { User } = require('../models');
// jwt
// const { signToken } = require('../utils/auth');

// const stripe = require('stripe') for donations 
// ('sk_test_4eC39HqLyjWDarjtT1zdp7dc'); test

const resolvers = {
  Query: {
    sayHi: () => 'hello world'

    // user: async () => {
    //   return await User.find();
    // },
  }
}
module.exports = resolvers;
