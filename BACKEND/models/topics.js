const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({

    gId:{
        type:String,
        required:true
    },
    gLeader:{
        type:String,
        required:true
    },
    mem1:{
        type:String,
        required:true
    },
    mem2:{
        type:String,
        required:true
    },
    mem3:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Topics', topicSchema);