const { Schema, model } = require('mongoose');

const workOrderSchema = new Schema(
  {
    date: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    category: {
      type: String,
      required: true,
      min: [10, 'Please Writhe the problem in detail'],
      max: 280,
    },
    problem: {
      type: String,
      required: true,
      min: [10, 'Please Writhe the problem in detail'],
      max: 280,
    },
    reply: {
      type: Boolean,
      required: true,
    },
    statusOpen: {
      type: Boolean,
      default: true
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
const Workorder = model('workorder', workOrderSchema);

module.exports = Workorder
