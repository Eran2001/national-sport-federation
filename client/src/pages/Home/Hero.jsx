import React from "react";

import Button from "../../components/ui/Button";

const Hero = () => {
  return (
    <div className="pt-10 pb-6">
      {/* Hero Section */}
      <section className="bg-opacity-30">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Text Content */}
            <div className="h-full">
              <div></div>
              <h1 className="text-4xl font-bold text-light sm:text-6xl xl:text-8xl">
                WHERE SPORTS & SPIRITS COLLIDE!
              </h1>
              <div className="mt-4 flex justify-start items-center gap-4 text-black lg:mt-8">
                <Button text="Contact Us" />
                <Button text="Get Involved" />
              </div>
            </div>

            {/* Image */}
            <div className="">
              <div className="w-full h-[70vh] bg-primary"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
