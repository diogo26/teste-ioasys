const mongoose = require('mongoose');

const eventSchema = require('./schema');

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;