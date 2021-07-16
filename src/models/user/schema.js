
const { Schema } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: 'name-is-required',
  },
  email: {
    type: String,
    required: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  predictedFights:{
    type: Number,
    default:0
  },
  isAdmin:{
      type:Boolean
  },
  passwordResetToken: {
    type: String,
  },
  passwordResetTokenExpiresAt: {
    type: Date,
  },

}, { timestamps: true, collection: 'users' });

userSchema.methods.toJSON = function toJSON() {
  const obj = this.toObject();
  delete obj.password;
  delete obj.__v;
  delete obj.passwordResetToken;
  delete obj.passwordResetTokenExpiresAt;
  delete obj.isAdmin;
  return obj;
};

module.exports = userSchema;