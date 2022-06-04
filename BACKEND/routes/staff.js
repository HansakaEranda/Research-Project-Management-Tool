const express = require('express');
const Staff = require('../models/staff');

const router = express.Router();


//get staff
router.get('/staff',(req,res)=>{
    Staff.find().exec((err,staff) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingStaff:staff
        });
    });
});

//get a specific staff details
router.get('/staff/:id',(req,res) => {
    let staffId = req.params.id;

    Staff.findById(staffId,(err,staff) => {
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            staff
        });
    });
});

//get specific details of staff members
router.get("/getstaff",(req,res) => {

    Staff.find({},{_id:0,lname:1,lemail:2,lcontactNo:3,staff:4}).exec((err,staff) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            staff
        });
    });
});

//update staff
router.put('/staff/update/:id',(req,res)=>{
    Staff.findByIdAndUpdate(
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

//delete staff
router.delete('/staff/delete/:id',(req,res)=>{
    Staff.findByIdAndRemove(req.params.id).exec((err,deleteStaff)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete successful", deleteStaff
        });
    });
});


//register staff 
router.post('/lcregister',(req,res)=>{
    const { lname, lregNo, lemail, lcontactNo, luserName, lpwd} = req.body
    Staff.findOne({luserName:luserName}, (err,staff) =>{
        if(staff){
            res.send({message:"User already registered"})
        } else {
            const newStaff = new Staff({
                lname,
                lregNo,
                lemail,
                lcontactNo,
                luserName,
                lpwd
            })
            newStaff.save((err) => {
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


//Staff login
router.post("/lclogin",(req,res) => {
    const {luserName, lpwd} = req.body
    Staff.findOne({luserName:luserName}, (err, staff) => {
        if (staff) {
            if(lpwd === staff.lpwd) {
                res.send({message :"Login Successful", staff:staff})
            } else {
                res.send({message : "Password didn't match"})
            }
        } else {
            res.send({message:"User not registered"})
        }
    })
});

module.exports = router;