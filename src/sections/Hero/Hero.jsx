import React from "react";
import './Hero.css'
import { PrimaryButton } from '../../components/index';

export default function Hero() {
  return (
    <>
      <div className="hero-main">
        <div className="hero-text">
          <h6 className="hero-subtitle">Welcome to Games Market</h6>
          <h4 className="hero-title">
            <em>Browse</em> Our Popular Games Here
          </h4>
          <PrimaryButton>Browse Now</PrimaryButton>
        </div>
        
      </div>
    </>
  );
}
