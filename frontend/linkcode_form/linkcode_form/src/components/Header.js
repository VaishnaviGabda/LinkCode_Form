
import React from 'react'
import logo from './images/linkcode.png'
import './Header.css'

function Header() {
    return (
        <div>
        <div className='logo'>
        <img src={logo} alt='LinkCode'/>
         </div>
        <div>
            <h6 className='detail'>| SOFTWARE DEVELOPER | INTERNSHIP | PROJECT CONSULTING | CORPORATE INDUSTRIAL TRAINING | CORPORATE COLLEGE WORKSHOP | AUTOMATION | WEB SITE DEVELOPMENT |
                MOBILE APP DEVELOPMENT |</h6>
            </div>
                <hr></hr>
        </div>
            

       
    )
}

export default Header
