import React from 'react'
import { Link } from 'react-router-dom'
import './Usernotlogin.css'
const Usernotlogin = () => {

  return (
    <div className='usernotlogin'>
     <center>
      <h1>Welcome</h1>
     <p style={{color:"#f4ed18",fontSize:"1.2rem"}}>THE HUNT IS ON, LET THE ADVENTURE BEGIN. SEEK OUT THE TREASURE, LET THE GAMES BEGIN !</p>
   <Link to="/login">  <button className='btn btn-primary mt-2'>Get Started</button></Link>
   </center>
    </div>
  )
}

export default Usernotlogin
