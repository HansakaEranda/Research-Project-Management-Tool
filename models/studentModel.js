const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "Please enter your email"],
        trim: true,
        unique: true
    },

    password: {
        type: String,
        required: [true, "Please enter your password"]
        
    },

    role: {
        type: Number,
        default: 0 //0 = user, 1 = admin
        
    },

    avater: {
        type: String,
        default: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
        
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Students", studentSchema)