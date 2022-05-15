const router = require('express').Router()
const studentCtrl = require('../controllers/studentCtrl')

router.post('/register', studentCtrl.register)

module.exports = router