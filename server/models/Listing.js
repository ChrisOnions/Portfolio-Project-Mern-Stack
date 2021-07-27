const { Schema, model } = require('mongoose');


const listingSchema = new Schema(
  {
    houseNumber: {
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
    price: {
      type: Number,
      required: true,
      trim: true
    },
    forSale: {
      type: Boolean,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  }
)

const Listing = model('Listing', listingSchema);

module.exports = Listing;