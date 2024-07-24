import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection({ scrollToRef }) {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-3.mp4" autoPlay loop muted  /> */}

      <h1 style={{ color: "blue" }} className="animate-left-to-center" >SRI MARUTI PACKAGINGS</h1>
      <p>Where Innovation meets Corrugation</p>
      <div className="hero-btns animate-right-to-center">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={() => scrollToRef()}
          linkTo="/"
        >
          OUR PRODUCTS
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          linkTo="/contact"
        >
          CONTACT US{" "}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
