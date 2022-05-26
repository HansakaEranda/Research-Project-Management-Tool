const express = require('express');
const Topics = require('../models/topic');

const router = express.Router();

router.post('/topic/insert', (req,res) => {
    let newTopicDtl = new Topics(req.body);

    newTopicDtl.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Details added successfully!"
        });
    });
});

router.get('/topic', (req,res) => {
    Topics.find().exec((err, topic) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingTopics:topic
        });
    });
});

module.exports = router;