import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../ThemeContext'
const RiddlePage = (props) => {
  const {cnt,setCnt}=useContext(ThemeContext)
  const [hint,setHint]=useState({clue:false,ans:false})
  const [f,setF]=useState({cluef:false,ansf:false})
  const updateclue=async()=>{
     setHint({...hint,clue:!hint.clue});
    if(!f.cluef)
    {
       setCnt({...cnt,cluecnt:cnt.cluecnt+1});
       setF({...f,cluef:true})
      
    }
  }
  const updateans=async()=>{
    
     setHint({...hint,ans:!hint.ans});
    if(!f.ansf)
    { 
      
       setCnt({...cnt,cluecnt:cnt.cluecnt-1});
       setF({...f,cluef:true})
       setCnt({...cnt,anscnt:cnt.anscnt+1});
       setF({...f,ansf:true})
      
    }
  }


  
  return (
  <div style={{color:"#fff"}}>
   <div className='ques '><h4>{props.data.quesId}.{props.data.ques}</h4></div>
      <div className='d-flex mt-3'>
     <div >
     <button  style={{color:"#fff",padding:"8px 12px 8px 12px",backgroundColor:"blue",marginRight:"5rem",marginLeft:'1.2rem',borderRadius:"10px"}} onClick={updateclue}>Clue</button>
      {
        (hint.clue)?<div className='clue mb-2'>any color of paint will have same smell</div>:<div className='mb-2'></div>
      }
     </div>
     <div className='ml-5'>
      <button style={{color:"#fff",padding:"8px 13px 8px 13px",backgroundColor:"blue",marginRight:"5rem",marginLeft:'1.2rem',borderRadius:"10px"}}  onClick={updateans}>Ans</button>
      {
        (hint.ans && true )?<div className='clue mb-2'>{props.data.answer}</div>:<div className='mb-2'></div>
      }
     </div>
     </div>
      
    </div>
  )
}

export default RiddlePage
