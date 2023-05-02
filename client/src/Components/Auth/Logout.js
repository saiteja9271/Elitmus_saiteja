import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate=useNavigate()
    const logoutuser = async () => {
       
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("http://127.0.0.1:5000/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                Accept: "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        console.log(data);

        if (data.status == 201) {
            console.log("user logout");
            localStorage.removeItem("usersdatatoken");
            navigate('/')
        } else {
            console.log("error");
        }
    }
    useEffect(()=>{
        logoutuser()
    },[])
  return (
    <div className='d-flex justify-content-center align-items-center text-bg-info' style={{width:"100vw",height:"100vh"}}>
      <h1>Thank you for visting.</h1>
    </div>
  )
}

export default Logout
