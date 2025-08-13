import React from "react";
import Card from "@/components/ui/Card";

import img1 from "@/assets/hero-1.jpg";
import img4 from "@/assets/hero-4.jpg";
import img6 from "@/assets/hero-6.jpg";

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
    img: img4,
    title: "Results",
    description: "Hello Results",
  },
  {
    buttonText: "Constitution",
    buttonLink: "#",
    img: img6,
    title: "Constitution",
    description: "Hello Constitution",
  },
];

const QuickLinks = () => {
  return (
    <section className="py-8 px-4">
      <h1 className="text-2xl font-medium my-8 text-center">QuickLinks</h1>
      <div className="flex justify-around items-center">
        {links.map((link) => (
          <Card
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
