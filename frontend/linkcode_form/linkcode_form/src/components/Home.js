import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="home">
            {/* course reg */}
            <div className="course__reg">
            <h2 className="header">Course Registration</h2>
            <div className="input__data">
              <input placeholder='Course Name'/>
              <input placeholder='Course Date'/>
              <input placeholder='Registration Fee'/>
              <input placeholder='Balance Fee'/>    
            </div> 
            </div> 

            {/* student info  */}
            <div className="student__info">
            <h2 className="header">Student Information</h2>
            <div className="input__data">
              <input placeholder='Last Name'/>
              <input placeholder='First Name'/>
              <input placeholder='Middle Name'/>
              <input placeholder='DOB'/>

              <input placeholder='Gender'/> 
              <input placeholder="Student's Number"/>
              <input placeholder="Father's Number"/>
              <input placeholder="Mother's Number"/>
              <input placeholder="Alter's Number"/>    

              <input placeholder="Email Address"/>
              <input placeholder="Emergency Contact No."/> 
              <input placeholder="Address"/>    
            </div> 
            </div>  

            {/* educational details */}
            <div className="educational__details">
            <h2 className="header">Educational Details</h2>
            <div className="input__data">
              <input placeholder='College Name'/>
              <input placeholder='Year'/>
              <input placeholder='Diploma / Degree'/>
              <input placeholder='Year of completion'/>
            </div> 
            </div> 

            <div className="submit">
              <button type="submit">Submit</button>
            </div>   

        </div>
    )
}

export default Home
