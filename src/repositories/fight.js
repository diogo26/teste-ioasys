const mongoose = require('mongoose');
const fightSchema = require('../models/fight/schema');

const model = mongoose.model('Fight', fightSchema);


module.exports = {
    create(params){
        return model.create(params);
    },
    get:(id) => {
        return model.findById(id);
      },
    update: (id, params) => {
        return model.findByIdAndUpdate(id, { $set: params }, { new: true });        
      },
}