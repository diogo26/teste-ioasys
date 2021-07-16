const mongoose = require('mongoose');
const eventSchema = require('../models/event/schema');

const model = mongoose.model('Event', eventSchema);

module.exports = {
    create: (params) => {
          return model.create(params);
      },
    getEvents: (query) => {
          return model.aggregate(query)
     },
    get:(id) => {
      return model.findById(id);
    },
    update: (id, params) => {
      return model.findByIdAndUpdate(id, { $set: params }, { new: true });        
    },

     
}