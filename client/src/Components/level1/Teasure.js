import React ,{useContext, useState} from 'react'
import Riddles from './Riddles'
import Safe from './Safe'
import Image from './Image'
import Instruction from './Instruction'
import Abd from '../../UserContext'
import { ThemeContext } from '../../ThemeContext'
import SimpleSlider from './Riddles'
const Teasure = () => {
 const{timmer,setTimmer}=useContext(ThemeContext)
 const sty={
  backdropFilter:"blur(3.5px)",
  WebkitBackdropFilter: "blur(3.5px)",
  // backgroundColor:"#d9dddc"
 }
  return (
    
    <div style={sty}>
      <div>you have started at:{timmer.hours}:{timmer.mins}:{timmer.secs}</div>
      <div className='mt-3 mb-5'><SimpleSlider/></div>
      <div className='mt-3'><Image/></div>
      <div className='mt-3'><Safe /></div>
    </div>
  
  )
}
export default Teasure;
// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Riddles from "./Riddles";
// export default class Responsive extends Component {
//   render() {
//     var settings = {
//       dots: true,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     };
  
//     return (
//       <div>
//         <h2> Responsive </h2>
//         <Slider {...settings}>
//           <div>
//           <Riddles/>
//           </div>        
//         </Slider>
//       </div>
//     );
//   }
// }