const mongoose = require('mongoose');

const fightSchema = require('./schema');

const Fight = mongoose.model('Fight', eventSchema);

module.exports = Fight;