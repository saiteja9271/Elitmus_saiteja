import React from 'react'
import { Link } from 'react-router-dom'
import './Usernotlogin.css'
const Userlogin = (prop) => {
  return (
     <div className='d-flex justify-content-center align-items-center mt-4'>
     <center>
      <h1>Welcome {prop.details}</h1>
     <p style={{color:"#f4ed18",fontSize:"1.2rem"}}>THE HUNT IS ON, LET THE ADVENTURE BEGIN. SEEK OUT THE TREASURE, LET THE GAMES BEGIN !</p>
   <Link to="/treasure/instruction">  <button className='btn btn-primary mt-2'>Get Started</button></Link>
   </center>
    </div>
    
  )
}

export default Userlogin
