const mongoose = require('mongoose');

const listing = new mongoose.Schema({
    listing:[{
        title:{
            type:String
        },
        description:{
            type:String
        }
    }]
} ,{
    timestamps:true
});

module.exports = mongoose.model('listing',listing);