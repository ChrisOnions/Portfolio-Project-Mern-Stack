const { Schema, model } = require('mongoose');

const workOrder = new Schema(
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
      min: [10, 'Please Writhe the problem in detail'],
      max: 280,
    },
    statusOpen: {
      type: Boolean,
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

const workOrder = model('workOrder', workOrderSchema);

module.exports = workOrder;