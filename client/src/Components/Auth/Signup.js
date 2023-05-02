import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css"
import Navbar from "../Navbar";
// import json from 'json'
const Signup = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [cpasswordError, setCpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  
  const handleValidation = () => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z1-9]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "min length is 8 Characters and Max 22 Characters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }
    if(password!==cpassword)
    {
      formIsValid = false;
      setCpasswordError(
        "confirm password and password are not matching."
      );
      return false;
    }else{
      setCpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    console.log(email,password)
    if(handleValidation())
    {
      const res=await fetch("http://localhost:5000/register",{
        method:"POST",
        headers:{
        "content-Type":"application/json"
        },
        body:JSON.stringify({name,email,password,performance:"NOT PLAYED",accuracy:"NOT PLAYED",time:"NOT PLAYED",score:"0"})
      })
      const data=await res.json();
      console.log(data.status)
      if(data.status==421)
      window.alert("email already exist")
      if(data.status ==422 || !data)
      window.alert("inValid Credentials")
      if(data.status==201){
      window.alert("Registration successfull")
      navigate("/login")
      }

    }
    setName("");
    setEmail("");
    setPassword("");
    setCpassword("");
  };

  return (
    <>
     <Navbar color={"black"}/>
    <div className="register">
    <div className="Log" >
    
      <div className="container">
        <div className="row d-flex justify-content-center nj">
        <center><p className="textclrL">REGISTRATION</p></center>  
          <div className="col-md-12">
            <form id="loginform" onSubmit={loginSubmit} method="POST">
            <div className="form-group  mt-1 mb-3">
                <label className="textclr" for="UserInput">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="UserInput"
                  name="name"
                  // aria-describedby="emailHelp"
                  placeholder="Enter user name"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                />
                {/* <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small> */}
              </div>
              <div className="form-group  mt-1 mb-3">
                <label className="textclr" for="EmailInput">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </div>
              
              <div className="form-group  mt-3 mb-3">
                <label className="textclr" for="exampleInputPassword2">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <div className="form-group  mt-3 mb-3">
                <label className="textclr" for="exampleInputPassword1">Re-enter Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter password"
                  onChange={(event) => setCpassword(event.target.value)}
                  value={cpassword}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                  {cpasswordError}
                </small>
              </div>
              <center>
                <button type="submit" className="btn m-2" >
                Register
              </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Signup;
