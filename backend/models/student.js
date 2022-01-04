const mongoose = require("mongoose")
const StudentData = mongoose.Schema({
    "course":{
        type:String
    },
    "course_date":{
        type:String
    },
    "registration_fee":{
        type:String
    },
    "last_name":{
        type:String
    },
    "first_name":{
        type:String
    },
    "middle_name":{
        type:String
    },
    "date_of_birth":{
        type:String
    },
    "gender":{
        type:String
    },
    "student_number":{
        type:String
    },
    "father_number":{
        type:String
    },
    "mother_number":{
        type:String
    },
    "alter_number":{
         type:String
    },
    "email":{
         type:String
    },
    "emergency_contact_number":{
         type:String
    },
    "current_address":{
         type:String
    },
    "permanent_address":{
         type:String
    },
    "college_name":{
         type:String
    },
    "year":{
         type:String
    },
    "type_of_education":{
         type:String
    },

   
})

module.exports = mongoose.model("Student",StudentData)