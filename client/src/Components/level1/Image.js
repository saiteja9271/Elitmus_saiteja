import React from 'react'
import clock from './photos/clock.jpg';
import queue from './photos/queue.jpg';
import tulips from './photos/tulips.png';
import paint from './photos/paint2.png';
import mushroom from './photos/mushroom.jpg';
import envelope from './photos/envelope2.png';
import alphabet from './photos/alphabet.png'
import holes from './photos/holes.jpg';
import mango from './photos/mango.jpg';
import './Image.css'
const Image = () => {
  return (
     
      <div className='image'>
      <div className='imgh'><img src={clock} /></div>
      <div className='imgh'><img src={queue} /></div>
      <div className='imgh'><img src={tulips} /></div>
      <div className='imgh'><img src={mango}  /></div>
      <div className='imgh'><img src={alphabet} /></div>
      <div className='imgh'><img src={envelope} /></div>
      <div className='imgh'><img src={mushroom} /></div>
      <div className='imgh'><img src={paint} /></div>
      <div className='imgh'><img src={holes} /></div>
      </div>

  )
}

export default Image
