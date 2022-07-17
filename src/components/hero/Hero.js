import React from "react";
import "./hero.css";
import trainer from "../../assets/trainer.svg";

const Hero = () => {
  return (
    <section className="hero-section">
      <span className="blur-effect"></span>
      <div className="absolute">
        <div className="get-started">
          <div></div>
          <span>get started</span>
        </div>
      </div>
      <div className="hero-left">
        <h3>Let's get you in</h3>
        <h1>Shape</h1>
        <p>We help you build your ideal body</p>
      </div>

      <div className="hero-right">
        <img src={trainer} alt="trainer" />
      </div>
    </section>
  );
};

export default Hero;
