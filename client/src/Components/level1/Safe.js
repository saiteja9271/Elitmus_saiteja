import React ,{useContext, useState}from 'react'
import safeclose from'./photos/safeclose.jpg';
import safeopen from'./photos/safeopen.jpg';
import './Safe.css'
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';
const Safe = () => {
  const {timmer,setTimmer}=useContext(ThemeContext);
   const current = new Date();
    const [pass,setPass]=useState("");
    const [res,setRes]=useState(false);
    const [tryLeft,setTryLeft]=useState(3);
    const [error,setError]=useState("")
    const [summary,setSummary]=useState(false)
    const navigate=useNavigate()
    const validate=()=>{
        
        if(pass=="315538"){
         setRes(true);
         setSummary(true);
         setError("you won the treasure"); 
        setTimmer({hours:(current.getHours()-timmer.hours),mins:(current.getMinutes()-timmer.mins),secs:(current.getSeconds()-timmer.secs)})
        
        }
        else
        {  
          setRes(false);
          if(tryLeft>1){
            
            setTryLeft(tryLeft-1);
        }
            if(tryLeft==1){
            setError("You have no try's lef ---- you have lost the treasure");
            setTryLeft(0)
            }

        }
      
    }
    const nav=()=>{
      navigate("/treasure/result",{state:{cnttry:tryLeft}})  
    }
  return (
    <div className='safe'>
      <center><img src={(res && true)? safeopen:safeclose} className='imgwidth'/><br/>
      <span className='text-primary'>Enter the password:</span><input type="text" value={pass} name="pass" onChange={(e)=>setPass(e.target.value)}/><br/>
      {summary?<button className="btn btn-primary mt-2 ml-5" onClick={nav}>Check Result</button>:<button className="btn btn-primary mt-2 ml-5" onClick={validate}>submit</button>}
      <p className='text-bg-danger'> {error}</p>
      
      <p className="text-bg-dark mt-3">NO.of try's left:{tryLeft}</p>
      <p>NOTE:<i>if no.of try's increases overall score will be reduced.</i></p>
      </center>
    </div>
  )
}

export default Safe
