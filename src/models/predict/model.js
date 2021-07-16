const mongoose = require('mongoose');

const predictSchema = require('./schema');

const Predict = mongoose.model('Predict', predictSchema);

module.exports = Predict
;