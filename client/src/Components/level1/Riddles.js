import './Riddle.css'
import RiddlePage from './RiddlePage'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows:true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const questions=[`What is blue and smells like red paint?`,`You see me once in June, twice in November, and not at all in May. What am I?`,`What flowers are kissable?`,`What word is pronounced the same if you take away four of its five letters?`,`What kind of room has no doors or windows?`,`I am weightless but put me in a bucket and I will make it lighter. What am I?`];
    const answers=[`it is blue paint,in picture 8 you will find 3 blue paint drops,so first digit is 3`,`It is "E",in picture 5 you will find only 1"E",so second digit is 1`,`It is tulips,in picture 4 you will fint 5 tulips,s0,third digit is 5`,`It is queue,in picture 3 you will find 5 members standing in queue,so fourth digit is 5`,`it is mushroom,in picture 7 you will find 3 mushrooms,so fifth digit is 3`,`It is "hole", in picture 8 you will find 8 holes,so sixth digit is 8`];
    return (
      
      <div className='sid conatiner' >
  
        <Slider {...settings} className='container slider'>
      <div>
      <RiddlePage data={{"ques":questions[0],"quesId":1,"answer":answers[0]}}/> 
          </div>
          <div>
          <RiddlePage data={{"ques":questions[1],"quesId":2,"answer":answers[1]}}/>
          </div>
          <div>
          <RiddlePage data={{"ques":questions[2],"quesId":3,"answer":answers[2]}}/>
          </div>
          <div>
          <RiddlePage data={{"ques":questions[3],"quesId":4,"answer":answers[3]}}/>
          </div>
          <div>
          <RiddlePage data={{"ques":questions[4],"quesId":5,"answer":answers[4]}}/>
          </div>
          <div>
          <RiddlePage data={{"ques":questions[5],"quesId":6,"answer":answers[5]}}/>
          </div>
        
        </Slider>
      </div>
    );
  }
}