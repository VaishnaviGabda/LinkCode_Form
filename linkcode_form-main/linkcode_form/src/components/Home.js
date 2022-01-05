import React, { useState } from 'react'
import './Home.css'
import axios from 'axios'

function Home() {


  const [courseName, setcourseName] = useState("")
  const [courseDate, setcourseDate] = useState("")
  const [reg_fee, setreg_fee] = useState("")
  const [bal_fee, setbal_fee] = useState("")
  const [last_name, setlast_name] = useState("")
  const [first_name, setfirst_name] = useState("")
  const [middle_name, setmiddle_name] = useState("")
  const [dob, setdob] = useState("")
  const [gender, setgender] = useState("")
  const [student_no, setstudent_no] = useState("")
  const [mother_no, setmother_no] = useState("")
  const [alt_no, setalt_no] = useState("")
  const [father_no, setfather_no] = useState("")
  const [email, setemail] = useState("")
  const [emeregency_no, setemeregency_no] = useState("")
  const [address, setaddress] = useState("")
  const [college, setcollege] = useState("")
  const [year, setyear] = useState("")
  const [type_edu, settype_edu] = useState("")
  const [year_completetion, setyear_completetion] = useState("")

  const data = {
     "course":courseName,
    "course_date":courseDate,
    "balance_fee":bal_fee,
    "registration_fee":reg_fee,
    "last_name":last_name,
    "first_name":first_name,
    "middle_name":middle_name,
    "date_of_birth":dob,
    "gender":gender,
    "student_number":student_no,
    "father_number":father_no,
    "mother_number":mother_no,
    "alter_number":alt_no,
    "email":email,
    "emergency_contact_number":emeregency_no,
    "address":address,
    "college_name":college,
    "year":year,
    "type_of_education":type_edu,
    "year_of_comp":year_completetion
  }

  const submit_data = ()=>{
    axios.post("https://linkcodeform.herokuapp.com/student/",data)
    .then(() =>{
      console.log("Saved..");
    })
    .catch((error) => {
      console.log(error.message);
    })
  }


    return (
        <form className="home">
            {/* course reg */}
            <div className="course__reg">
            <h2 className="header">Course Registration</h2>
            <div className="input__data">
              <input required="true" placeholder='Course Name' onChange={e =>setcourseName(e.target.value)}/>
              <input  required="true" placeholder='Course Date' onChange={e =>setcourseDate(e.target.value)}/>
              <input  required="true" placeholder='Registration Fee' onChange={e =>setreg_fee(e.target.value)}/>
              <input  required="true" placeholder='Balance Fee' onChange={e =>setbal_fee(e.target.value)}/>    
            </div> 
            </div> 

            {/* student info  */}
            <div className="student__info">
            <h2 className="header">Student Information</h2>
            <div className="input__data">
              <input required="true" placeholder='Last Name' onChange={e =>setlast_name(e.target.value)}/>
              <input  required="true" placeholder='First Name' onChange={e =>setfirst_name(e.target.value)}/>
              <input  required="true" placeholder='Middle Name' onChange={e =>setmiddle_name(e.target.value)}/>
              <input  required="true" placeholder='DOB' onChange={e =>setdob(e.target.value)}/>

              
              <input required="true" placeholder='Gender' onChange={e =>setgender(e.target.value)}/>
              
             

  
              
              <input  required="true" placeholder="Student's Number" onChange={e =>setstudent_no(e.target.value)}/>
              <input required="true" placeholder="Father's Number" onChange={e =>setfather_no(e.target.value)}/>
              <input  required="true"placeholder="Mother's Number" onChange={e =>setmother_no(e.target.value)}/>
              <input  required="true" placeholder="Alter's Number" onChange={e =>setalt_no(e.target.value)}/>    

              <input  required="true" placeholder="Email Address" onChange={e =>setemail(e.target.value)}/>
              <input  required="true" placeholder="Emergency Contact No." onChange={e =>setemeregency_no(e.target.value)}/> 
              <input  required="true" placeholder="Address" onChange={e =>setaddress(e.target.value)}/>    
            </div> 
            </div>  

            {/* educational details */}
            <div className="educational__details" >
            <h2 className="header">Educational Details</h2>
            <div className="input__data">
              <input  required="true" placeholder='College Name' onChange={e =>setcollege(e.target.value)}/>
              <input  required="true" placeholder='Year' onChange={e =>setyear(e.target.value)}/>
              <input  required="true" placeholder='Diploma / Degree / Graduation' onChange={e =>settype_edu(e.target.value)}/>
              <input   required="true" placeholder='Year of completion' onChange={e =>setyear_completetion(e.target.value)}/>
            </div> 
            </div> 

            <div className="submit">
              <button type="submit" onClick={submit_data}>Submit</button>
            </div>   

        </form>
    )
}

export default Home
