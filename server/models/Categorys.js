const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      min: [5, 'Please Writhe the problem in detail'],
      max: 16
    },
  }
);
const Category = model('Category', categorySchema);

module.exports = Category;


