const mongoose = require('mongoose');
const userSchema = require('../models/user/schema');

const model = mongoose.model('User', userSchema);

module.exports = {
    create: (params) => {          
          return model.create(params);
      },
    
    getUserBy: (param) => {
        return model.findOne(param);
      },
    update: (id, params) => {
        return model.findByIdAndUpdate(id, { $set: params }, { new: true });        
      },
    incrementPredictedFights: (list) =>{
      return model.updateMany({_id:list},{
        $inc: {predictedFights:1}
      })
    }
}