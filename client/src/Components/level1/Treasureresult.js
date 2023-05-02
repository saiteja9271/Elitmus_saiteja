import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeContext } from '../../ThemeContext'

const Treasureresult = () => {
  const {cnt,details,setDetails,timmer}=useContext(ThemeContext)
  // const [performance,setPerformance]=useState(0);
  // const [accuracy,setAccuracy]=useState(0);
  // const [time,setTime]=useState(10)
  const loc=useLocation()
  const trycnt=loc.state.cnttry;
  const performance=100-20*(3-trycnt)-2*(cnt.cluecnt-cnt.anscnt)-3*cnt.anscnt;
  const accuracy=((trycnt/3)*100 ).toPrecision(4);
  const score=100-5*cnt.cluecnt-10*cnt.anscnt-10*(3-trycnt)
  if(timmer.secs<0)
  {
    timmer.mins=timmer.mins-1;
    timmer.secs=60+timmer.secs;
  }
  const time=timmer.mins+"mins:"+timmer.secs+"secs";
  const submit=async()=>{
    let token = localStorage.getItem("usersdatatoken");
    const res=await fetch("http://127.0.0.1:5000/update", { 
    method: "PATCH",
    headers: {
        "Content-Type" : "application/json",
        "authorization": token
      },
      body:JSON.stringify({name:details.name,email:details.email,performance:performance,accuracy:accuracy,time:time,score:score})
  });

  const data=res.json();
  console.log(data);
  
  }
  const bodied={
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height:"100vh",
    width:"100vw"
  }
  const styled={
    backgroundColor: "black",
    boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    padding: "20px",
    borderRadius: '5px',
    marginBottom: '20px',
    color:"#fff",
    width:"300px",
    
  }
  
  return (
    <div style={bodied}>

      
      <div style={styled}>
      <center> <h5>hey {details.name} this is user result</h5> 
      <h4 style={{textDecoration:"underline"}}>Summary</h4></center>
        <h5 className='ml-3'><b>Score:</b> {score}</h5>
        <h5 className='ml-3'><b>performance:</b>{performance}%</h5>
        <h5 className='ml-3'><b>Accuracy:</b>{accuracy } %</h5>
        <h5 className='ml-3'><b>Time Taken:</b>{time}</h5>
       <Link to="/"><center> <button className='btn btn-primary mt-3' onClick={submit}>Ok</button>
        </center></Link> 
      </div>
    </div>
  )
}

export default Treasureresult
