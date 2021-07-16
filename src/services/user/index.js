const {create} = require('./create');
const {resetPassword} = require('./resetPassword');
const {getDecodedUser} = require('./getDecodedUser')
const {incrementPredictedFights } = require('./incrementPredictedFights');

module.exports = {
  create,
  resetPassword,
  getDecodedUser,
  incrementPredictedFights
}