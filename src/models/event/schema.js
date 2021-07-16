const { Schema } = require('mongoose');

const eventSchema = new Schema({
    name:{
        type:'string',
        required:'name-is-required'
    },
    date :{
        type: Date,
        required:true
    },
    fights: [Schema.Types.ObjectId]
});

module.exports = eventSchema;