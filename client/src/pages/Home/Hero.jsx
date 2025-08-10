import React from "react";
import HeroImg from "../../assets/hero-2.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen">
      <img
        src={HeroImg}
        alt="hero-img"
        className="w-full h-screen object-cover"
      />
    </div>
  );
};

export default Hero;
