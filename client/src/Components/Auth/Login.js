import React, { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"
import {auth, google, facebook, twitter, github} from './fire'
import {signInWithPopup, signOut} from 'firebase/auth'
import {Link,useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const LoginFalse = () => (
    <div className="iconi d-flex">
    <img height='40' width='40' onClick={() => login(google)} src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" />
      <img height='40' width='40' onClick={() => login(facebook)} src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png" />
      <img height='40' width='40' onClick={() => login(twitter)} src="https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png" />
    </div>
  )
  
function LoginTrue(){
  return(
<>
      <h1>Welcome!</h1>
      <img src={user.photoURL} style={{width:120}}/>
      <p>Welcome {user.displayName}! Your account {user.email} has been successfully logged in at {user.metadata.lastSignInTime}</p>
      <button style={{width:150}} onClick={logout}>
        Logout
      </button>
      </>
  );
}
  
  const login = async(provider) => {
    const result = await signInWithPopup(auth, provider) 
    setUser(result.user)
    setIsLogin(true)
    console.log(result)
  }

  const logout = async() => {
    const result = await signOut(auth)
    setUser(null)
    setIsLogin(false)
    console.log(result)
  }
  

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and min length is 8 Characters and Max 22 Characters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    // handleValidation();
    console.log("hello submited");
    const res=await fetch("http://127.0.0.1:5000/signin",{
      method:"POST",
      headers:{
        "content-Type":"application/json",
      },
      body:JSON.stringify({email,password})
    })
    const data=await res.json();
    console.log("THIS ID IS ME",data.result.userLogin.name,data.result.token)
    if(data.status==400 || !data)
    window.alert("Invalid registration")
    if(data.status==201){
      localStorage.setItem("usersdatatoken",data.result.token);
    window.alert("login successfull")
    navigate('/')
    }
  };
  const linkStyle = {
    paddingRight: "3px",
    color: 'blue',
    fontSize:'medium',
    fontWeight:'600',
  };

  return (
    <div >
      <Navbar color={"black"}/>
      <div className="Logi">
      <div className="container">
        <div className="njki row d-flex justify-content-center">
        <center><p className="textclrLi">LOGIN</p></center>  
          <div className="col-md-12">
            <form id="loginform" method="POST" onSubmit={loginSubmit}>
              <div className="form-group  mt-1 mb-3">
                <label className="textclri" for="EmailInput">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </div>
              <div className="form-group  mt-3 mb-3">
                <label className="textclri" for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <div className="form-group form-check m-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label textclri">Remember me</label>
                <div className="rei d-flex ">
                <p class="acc">Don't have an account?</p>
                <Link to="/register" style={linkStyle}>Register now</Link>
                </div>
              </div>
              <center>

                <Link to="/"><input type="submit" className="btn m-2" value="Login" onClick={loginSubmit}/></Link>
              </center>


              <div className="k"></div>
             
              <center><p className="acc">or login using</p></center>
        
              {isLogin && user ? window.location.href="/home":<LoginFalse/>}
              <br/>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default Login;
