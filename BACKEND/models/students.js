const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

    groupId:{
        type:String,
        required:true
    },
    groupLeader:{
        type:String,
        required:true
    },
    member1:{
        type:String,
        required:true
    },
    member2:{
        type:String,
        required:true
    },
    member3:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Students', studentSchema);