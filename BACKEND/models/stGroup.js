const mongoose = require('mongoose');

const stGroupSchema = new mongoose.Schema({

    gLeaderID:{
        type:String,
        required:true
    },
    gLeaderName:{
        type:String,
        required:true
    },
    mem1ID:{
        type:String,
        required:true
    },
    mem1Name:{
        type:String,
        required:true
    },
    mem2ID:{
        type:String,
        required:true
    },
    mem2Name:{
        type:String,
        required:true
    },
    mem3ID:{
        type:String,
        required:true
    },
    mem3Name:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('StudentGroup', stGroupSchema);