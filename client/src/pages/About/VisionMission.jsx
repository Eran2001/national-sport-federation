import React from "react";
import img1 from "../../assets/hero-1.jpg";
import img2 from "../../assets/hero-2.jpg";

const VisionMission = () => {
  return (
    <section className="min-h-screen">
      <div className="mx-20 space-y-4">
        <section className="border flex gap-8">
          <div>
            <img src={img1} width={1000} height={1000} alt="" />
          </div>
          <div>
            <div className="flex flex-col justify-center items-stretch">
              <h1>Our Vision</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus odit nisi ut nobis minima? Aut, ad! Qui beatae
                consectetur deleniti, quia repudiandae neque ut sit voluptatum
                quis ipsam vitae odit.
              </p>
              <ul>
                <li>We want to make</li>
                <li>We want to help</li>
                <li>We want to have</li>
                <li>We want to give</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="border flex gap-8">
          <div>
            <img src={img2} width={1000} height={1000} alt="" />
          </div>
          <div>
            <div>
              <h1>Our Mission</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus odit nisi ut nobis minima? Aut, ad! Qui beatae
                consectetur deleniti, quia repudiandae neque ut sit voluptatum
                quis ipsam vitae odit.
              </p>
              <ul>
                <li>We want to make</li>
                <li>We want to help</li>
                <li>We want to have</li>
                <li>We want to give</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default VisionMission;
