const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({

    lname:{
        type:String,
        required:true
    },
    lregNo:{
        type:String,
        required:true
    },
    lemail:{
        type:String,
        required:true
    },
    lcontactNo:{
        type:String,
        required:true
    },
    staff:{
        type:String,
        required:true
    },
    luserName:{
        type:String,
        required:true
    },
    lpwd:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Staff', staffSchema);