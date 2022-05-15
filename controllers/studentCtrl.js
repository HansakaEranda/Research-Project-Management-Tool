const Students = require('../models/studentModel')

const studentCtrl = {
    register: async (req, res) => {
        try {
            res.json({msg: "Register Test"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}