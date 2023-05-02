import React,{useContext, useEffect,useState}from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import './Home.css'
import Userlogin from './Userlogin';
import Usernotlogin from './Usernotlogin';
import { ThemeContext } from '../ThemeContext';
const Home = () => {
  const {details,setDetails,loginTrue,setLoginTrue} =useContext(ThemeContext)
  // const [data,setData]=useState("");
  // const [userLogin,setUserLogin]=useState(false)
  const getUserData= async ()=>{
   try{
    let token = localStorage.getItem("usersdatatoken");
    const res = await fetch("http://127.0.0.1:5000/about", {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Authorization": token
      }
  });
  const datares=await res.json();
  if(datares.status==201){
  console.log("res from home",datares);
  setLoginTrue(true)
  console.log(datares.validUser)
  setDetails({name:datares.validUser.name,email:datares.validUser.email})
  
  }
  if(details.res.status==401)
  {
    setLoginTrue(false)
  }
   }
   catch(err)
   {
    console.log(err)
   }
  }
useEffect(()=>{

    getUserData();


}, [])
  return (
    
    <div className='backHome'>
    <Navbar color={"black"}/>
    {console.log("login true",loginTrue)}
   {loginTrue? <Userlogin details={details.name}/>:<Usernotlogin/>}
   {/* {details.name}  {details.email} */}
    </div>
    
  )
}

export default Home
