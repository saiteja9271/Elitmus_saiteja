import React,{useState} from 'react'
import './Admin.css'
import Adminportal from './Adminportal'
import Navbar from '../Navbar'

const Admin = () => {
    const [adminpassword,setAdminpassword]=useState("")
    const [adminName,setAdminName]=useState("")
    const [adminpassworderror,setAdminpassworderror]=useState("")
    const [admin,setAdmin]=useState(false)

    const submitHandler=()=>{
         setAdmin(true)
        console.log("admin's portal",adminpassword)
        if(adminpassword==="elitmus-admin" && adminName=="sai"){
        setAdmin(true)
        setAdminpassworderror('');
        }else{
            // setAdmin(false)
            setAdminpassworderror("invalid credentials"); 
        }

    };

    
  return (
    <>
    {/* <Navbar color={"black"}/> */}
      <div className='adminn'>
        
   { admin&&true ? <Adminportal/>:
   (
        <div className="container">
        <div className="col-md-6 add">
          <form id="loginform" onSubmit={submitHandler}>
            <div className="form-group  mt-1 mb-3">
                <label className="textclr" for="UserInput">Admin Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="UserInput"
                  name="name"
                  // aria-describedby="emailHelp"
                  placeholder="Enter user name"
                  onChange={(event) => setAdminName(event.target.value)}
                  value={adminName}
                />
               
              </div>

              
              <div className="form-group  mt-3 mb-3">
                <label className="textclr" for="exampleInputPassword2">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  placeholder="Enter password"
                  onChange={(event) => setAdminpassword(event.target.value)}
                  value={adminpassword}
                />
                <small id="passworderror" className="text-danger form-text">
                  {adminpassworderror}
                </small>
              </div>
              <center>
                <button type="submit" className="btn m-2" >
                submit
              </button>
              </center>
            </form>
            </div>
        </div>
   )}
    </div>
    </>
  )
}

export default Admin
