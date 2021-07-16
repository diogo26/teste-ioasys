const {Schema} = require('mongoose');

const figthSchema = new Schema({
    fighterRedCorner:{
        type:String,
        required:true
    },
    fighterBlueCorner:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    winner:{
        type:String,
        enum:['red','blue','draw']
    }
});

module.exports = figthSchema;