const Students = require('../models/studentModel')
const bycrypt = require('bcrypt') 
const jwt = require('jsonwebtoken')
const sendMail = require('./sendMail')


const {CLIENT_URL} = process.env

const studentCtrl = {
    register: async (req, res) => {
        try {
            const {name, email, password} = req.body
            
            if(!name || !email || !password)
                return res.status(400).json({msg: "Please fill all the fields."})


            if(!validEmail(email))
                return res.status(400).json({msg: "Invalid Email"})

            const student = await Students.findOne({email})
            if(student) return res.status(400).json({msg: "This email already exists."})

            if(password.length < 6)
                return res.status(400).json({msg: "Password must have at least 6 characters."})

            const passwordHash = await bycrypt.hash(password, 12)
            const newStudent = {
                name, email, password: passwordHash
            }
            const activation_token = createActivationToken(newStudent)

            const url = `${CLIENT_URL}/student/activate/${activation_token}`
            sendMail(email, url)


            res.json({msg: "Register Success! Please activate your email to start."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


function validEmail(email){
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return regex.test(email);
}

const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})    
}

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '5m'})    
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '5m'})    
}


module.exports = studentCtrl