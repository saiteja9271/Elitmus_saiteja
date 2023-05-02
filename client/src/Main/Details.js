import React, { useEffect, useState } from "react";
import Card from "./Card";

const Details = () => {

    const [data,setData] = useState([])
    async function getData(){
        const data=await fetch('http://localhost:5000/get-users');
        const id=await data.json()
        setData(id.data)
    }
    
    useEffect(() => {
        getData()
    }, []);
  return (
    <div className="mt-5" style={{width:"94vw"}}>
    <center><h3>User Details</h3></center>
    <div className="d-flex" style={{color:"white",overflow:'scroll'}}>
    {   
        data.map((e,i)=>
        <div key={i} style={{margin:"10px"}}>
            <Card name={e.name} email={e.email}  score={e.score} per={e.performance} acc={e.accuracy} time={e.time}/>
            {/* <p>{e.name}</p>
            <p>{e.email}</p> */}
        </div>
        )
    }
    </div>
    </div>
  )
};

export default Details;
