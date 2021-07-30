const { Schema, model } = require('mongoose');
const listingSchema = new Schema(
  {
    user: {
      required: true,
      trim: true
    },
    date: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    problem: {
      type: String,
      required: true,
      min: [10, 'Please Writhe the problem in detial'],
      max: 12
    },
    statusOpen: {
      type: Boolean,
      required: true,
      trim: true,
      setDefaultsOnInsert: true,
    },
    handledBy: {
      type: String,
      setDefaultsOnInsert: "",
      trim: true
    },
    workerComments: {
      type: String,
      setDefaultsOnInsert: "",
      trim: true
    },
  }
)

const Listing = model('Listing', listingSchema);

module.exports = Listing;