import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../ThemeContext'
import './Instruction.css'
const Instruction = () => {
  const {timmer,setTimmer} =useContext(ThemeContext)
  const current = new Date();
  return (
  
    <div className='bodie'>
        <div>
           <h4 className='text-bg-dark pt-2 pb-2 mt-3 mb-2'><center>Here is a treasure hunt for you</center> </h4>
           <ul className='list'>
           <li> You got a 2-months long summer vacation and you want to explore new things during your vacation. One fine day you and your friends planned to go to the haunted house near your village. That place was so scary and no one will dare to get there. You all roaming here and there inside the haunted house. Your eyes caught some interesting thing which was a mystery box. You tried to open it but it has a pin to get unlocked. you found a paper rolled at the side of the box. You saw the paper with different riddles with few images and here the real game begins!   </li>
           </ul>
               <ol className='list'>
                <li >Here we have 6 riddles to be solved.(For a 6-digit pin)</li>
                <li>Each of its answer is based on the pictures given.</li> 
                 <li>Answer from the picture finds you the way to get each digit of the pin</li>
                <li>Every riddle has a clue but beware of loosing your score by using it</li>
                <li>Overall you will get 3 tries, this can decide your final accuracy.</li>
                <li>Hope everthing works out for you, GOOD LUCK!</li>
                </ol>
        </div>
        <center><Link to="/treasure"><button className='btn btn-primary' onClick={()=>setTimmer({hours:current.getHours(),mins:current.getMinutes(),secs:current.getSeconds()})}>Begin the game</button></Link></center>
       
    </div>
  )
}

export default Instruction
