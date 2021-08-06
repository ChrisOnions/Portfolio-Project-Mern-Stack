const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
// const Workorder = require('./workorder')

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    workOrders: {
      type: Schema.Types.ObjectId,
      ref: 'Workorder',
    },
    listing: {
      type: Schema.Types.ObjectId,
      ref: 'Listing',
    },
  },
);

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    // With "salt round" they actually mean the cost factor. The cost factor controls how much time is needed to calculate a single BCrypt hash
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
