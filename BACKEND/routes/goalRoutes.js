const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.status(200).json({message: 'Get goals '})
})

router.post('/', (req,res) => {
    res.status(200).json({message: 'Set goals '})
})

router.put('/:id', (req,res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

//Hansaka
router.delete('/:id', (req,res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = router