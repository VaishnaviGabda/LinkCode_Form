
const express = require('express')
const router = express.Router()
const Student = require("../models/student")


router.post('/' ,(req,res,next)=>{
    console.log("inside router post");
     students = Student(req.body)
     students.save()
     .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });

})

module.exports = router