import React from "react";
import Card from "@/components/ui/Card";

import img1 from "@/assets/hero-1.jpg";
import img2 from "@/assets/hero-2.jpg";

const links = [
  {
    buttonText: "Register",
    buttonLink: "#",
    img: img1,
    title: "Register",
    description: "Hello Register",
  },
  {
    buttonText: "Results",
    buttonLink: "#",
    img: img2,
    title: "Results",
    description: "Hello Results",
  },
  {
    buttonText: "Constitution",
    buttonLink: "#",
    img: img1,
    title: "Constitution",
    description: "Hello Constitution",
  },
];

const QuickLinks = () => {
  return (
    <section className="bg-red-300">
      <h1 className="text-2xl font-medium text-center">QuickLinks</h1>
      <div className="flex justify-around items-center">
        {links.map((link, index) => (
          <Card
            key={index}
            image={link.img}
            title={link.title}
            description={link.description}
            buttonText={link.buttonText}
            buttonLink={link.buttonLink}
          />
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
