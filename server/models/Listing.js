const { Schema, model } = require('mongoose');

const listingSchema = new schema(
  {
    number: {
      type: Number,
      required: true,
      trim: true
    },
    streetName: {
      type: String,
      required: true,
      trim: true
    },
    suburb: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    country: {
      type: String,
      required: true,
      trim: true
    },
  }
)

const Listing = model('Listing', listingSchema);

module.exports = Listing;