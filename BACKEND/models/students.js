const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

    stname:{
        type:String,
        required:true
    },
    regNo:{
        type:String,
        required:true
    },
    stemail:{
        type:String,
        required:true
    },
    stuserName:{
        type:String,
        required:true
    },
    stpwd:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Students', studentSchema);