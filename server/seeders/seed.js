const db = require('../config/connection');
const { User, Listing, Category, Workorder } = require('../models');

const userSeeds = require('./userSeeds.json');
const categorySeed = require('./categoryseed.json');
const listingSeed = require('./listingSeed.json');
const workOrderSeed = require('./workOrderSeeds.json');

function seedDB() {
  db.once('open', async () => {
    try {
      await User.deleteMany({});
      await Listing.deleteMany({});
      await Category.deleteMany({});
      await Workorder.deleteMany({});

      await User.create(userSeeds);
      await Category.create(categorySeed);
      await Listing.create(listingSeed);
      await Workorder.create(workOrderSeed);


      console.log('all done!');
      process.exit(0);

    } catch (err) {
      console.error(err);
      console.log('UH-OH');
      process.exit(1);
    }
  });
}
module.exports = seedDB;
