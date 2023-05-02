import React from 'react'

const Card = (prop) => {
  return (

    <div class="card" style={{width: "18rem",height:"18rem",backgroundColor:"black"}}>
  <div class="card-body">
    <div className="d-flex justify-content-center align-items-center">
    <div style={{width: "8rem",marginRight:'5px'}}>
   <center> 
    <p class="card-subtitle mb-2 text-body-secondary text-bg-primary">{prop.name}</p>
    <p class="card-subtitle mb-2 text-body-secondary text-bg-dark">{prop.email}</p>
    </center>
    </div>
    <div className='ml-auto '>
        <img src="https://tse3.mm.bing.net/th?id=OIP.qM6Kb9CWbwqInwp_XyDpHwHaIa&pid=Api&P=0" style={{width: "8rem",height:"7.5rem"}}/>
    </div>
    </div>
    <div style={{borderTop:"1px solid #fff",margin:"10px 0px 3px 0px"}}>
        <p className='mt'>ACCURACY: {prop.acc}</p>
        <p>SCORE:{prop.score}</p>
        <p>PERFORMANCE: {prop.per}</p>
        <p>TIME TAKEN:  {prop.time}</p>
    </div>
  </div>
</div>

  )
}

export default Card
