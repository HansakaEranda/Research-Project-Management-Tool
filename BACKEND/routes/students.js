const express = require('express');
const students = require('../models/students');
const Students = require('../models/students');

const router = express.Router();

//save students 
router.post('/students/save',(req,res)=>{
    let newStudent = new Students(req.body);

    newStudent.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Student registered successfully"
        });
    });
});

//get students
router.get('/students',(req,res)=>{
    Students.find().exec((err,students) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingStudents:students
        });
    });
});

//update students
router.put('/students/update/:id',(req,res)=>{
    Students.findByIdAndUpdate(
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

//delete student
router.delete('/students/delete/:id',(req,res)=>{
    Students.findByIdAndRemove(req.params.id).exec((err,deleteStudent)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete successful", deleteStudent
        });
    });
});






module.exports = router;