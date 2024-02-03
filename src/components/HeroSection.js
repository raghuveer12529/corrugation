import React from 'react'
import { Button } from './Button';
import './HeroSection.css'


function HeroSection() {
  return (
      <div className="hero-container">
          <video src="/videos/video-3.mp4" autoPlay loop muted />
          <h1 style={{color:'blue'}}>SRI MARUTI PACKAGING</h1>
          <p>Where Innovation meets Corrugation</p>
          <div className="hero-btns" >
              <Button className="btns" buttonStyle="btn--outline" buttonSize='btn--large'>ABOUT US</Button>
              <Button className="btns" buttonStyle="btn--outline" buttonSize='btn--large'>CONTACT US <i className="far fa-play-circle"/></Button>
          </div>
    </div>
  )
}

export default HeroSection