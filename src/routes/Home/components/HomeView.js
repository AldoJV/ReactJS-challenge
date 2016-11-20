import React, { Component } from 'react'
import Slider from 'react-slick'
import {Button} from 'react-bootstrap'
import snowboard from '../assets/board.png'
import arrow from '../assets/next.png'

import './HomeView.scss'


class BoardSlick extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.refs.slider.slickNext()
  }
  previous() {
    this.refs.slider.slickPrev()
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true
    };
    return (
      <div className="row boards">
    	<div className="arrow-left"><img src={arrow} onClick={this.previous}/></div>
    	<div className="arrow-right"><img src={arrow} onClick={this.next}/></div>
        <Slider ref='slider' {...settings}>
          	<div className="text-center"><img src={snowboard} /></div>
	        <div className="text-center"><img src={snowboard} /></div>
	        <div className="text-center"><img src={snowboard} /></div>
	        <div className="text-center"><img src={snowboard} /></div>
	        <div className="text-center"><img src={snowboard} /></div>
	        <div className="text-center"><img src={snowboard} /></div>
        </Slider>

      </div>
    );
  }
}

export const HomeView = () => (
  <div>
    <h1>SNOWBOARDS</h1>
    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h5>
    <BoardSlick />
     <br />
     <h4>SNOWBOARD EXTREME SERIES</h4>
  </div>
)

export default HomeView


/*
 <div className="row boards">
    <div id="prev" className="arrow-left"><img src={arrow} /></div>
    <div id="next" className="arrow-right"><img src={arrow} /></div>
    <Slider { ...{
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      nextArrow: document.getElementById("next"),
      prevArrow: document.getElementById("prev")
    } }>
        <div className="text-center"><img src={snowboard} /></div>
        <div className="text-center"><img src={snowboard} /></div>
        <div className="text-center"><img src={snowboard} /></div>
        <div className="text-center"><img src={snowboard} /></div>
        <div className="text-center"><img src={snowboard} /></div>
        <div className="text-center"><img src={snowboard} /></div>
      </Slider>
     </div>
*/