const mongoose = require('mongoose');
const predictSchema = require('../models/predict/schema');

const model = mongoose.model('Predict', predictSchema);


module.exports = {
    create: (params) => {
          return model.create(params);
      },
    list: (query) => {
          return model.aggregate(query)
     },
    get:(id) => {
      return model.findById(id);
    },
    update: (id, params) => {
      return model.findByIdAndUpdate(id, { $set: params }, { new: true });        
    },

     
}
