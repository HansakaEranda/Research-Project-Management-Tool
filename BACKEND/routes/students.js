const express = require('express');
const Students = require('../models/students');

const router = express.Router();

//register students 
router.post('/register',(req,res)=>{
    const { stname, regNo, stemail, stuserName, stpwd} = req.body
    Students.findOne({stuserName:stuserName}, (err,student) =>{
        if(student){
            res.send({message:"User already registered"})
        } else {
            const newStudent = new Students({
                stname,
                regNo,
                stemail,
                stuserName,
                stpwd
            })
            newStudent.save((err) => {
                if(err){
                    return res.status(400).json({
                        error:err
                    });
                }else{
                    return res.status(200).json({
                        message: "Successfully Registered, Please login now." 
                    });
                }
                
            });
        }
    })

    
});

//login
router.post("/stlogin",(req,res) => {
    const {stuserName, stpwd} = req.body
    Students.findOne({stuserName:stuserName}, (err, students) => {
        if (students) {
            if(stpwd === students.stpwd) {
                res.send({message :"Login Successful", students:students})
            } else {
                res.send({message : "Password didn't match"})
            }
        } else {
            res.send({message:"User not registered"})
        }
    })
})

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

//get a specific student details
router.get('/students/:id',(req,res) => {
    let studentId = req.params.id;

    Students.findById(studentId,(err,student) => {
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            student
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