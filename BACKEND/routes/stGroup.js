const express = require('express');
const StudentGroup = require('../models/stGroup');

const router = express.Router();

//save student group 
router.post('/stgroups/save',(req,res)=>{
    let newGroup = new StudentGroup(req.body);

    newGroup.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Group registered successfully"
        });
    });
});

//get student group
router.get('/stgroups',(req,res)=>{
    StudentGroup.find().exec((err,stgroups) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingStGroups:stgroups
        });
    });
});

//get a specific student group details
router.get('/stgroups/:id',(req,res) => {
    let stgroupId = req.params.id;

    StudentGroup.findById(stgroupId,(err,stGroup) => {
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            stGroup
        });
    });
});

//update student group
router.put('/stgroups/update/:id',(req,res)=>{
    StudentGroup.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete student group
router.delete('/stgroups/delete/:id',(req,res)=>{
    StudentGroup.findByIdAndRemove(req.params.id).exec((err,deleteStGroup)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete successful", deleteStGroup
        });
    });
});


module.exports = router;