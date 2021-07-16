
const { Schema } = require('mongoose');

const predictSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        required:true
    },
    fightId:{
        type:Schema.Types.ObjectId,
        required:true
    },
    result:{
        type:String,
        enum:['win','lose','draw'],
        required:true
    },
    fighter:{
        type:String,
        enum:['red','blue']
    }

}, { timestamps: true, collection: 'predicts' });



module.exports = predictSchema;