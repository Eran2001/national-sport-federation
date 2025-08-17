import { useEffect, useState } from "react";
import heroImg1 from "@/assets/hero-1.jpg";
import heroImg2 from "@/assets/hero-2.jpg";

import Icon from "@/components/ui/Icon";

const slidesData = [
  { src: heroImg2, thumb: heroImg2, alt: "The Woods" },
  { src: heroImg1, thumb: heroImg1, alt: "Snowy Mountains" },
];

function Hero() {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex > slidesData.length) newIndex = 1;
    if (newIndex < 1) newIndex = slidesData.length;
    setSlideIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      plusSlides(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [slideIndex]);

  // const currentSlide = (n) => {
  //   setSlideIndex(n);
  // };

  // <div className="min-h-screen">
  //     <img
  //       src={HeroImg}
  //       alt="hero-img"
  //       className="w-full h-screen object-cover"
  //     />
  //   </div>

  return (
    <div className="relative min-h-screen bg-amber-300">
      {/* Slides */}
      {/* {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`${
            slideIndex === index + 1 ? "block" : "hidden"
          } mySlides`}
        >
          <img
            // src={slide.src}
            alt={slide.alt}
            className="w-full h-screen object-cover"
          />
        </div>
      ))} */}

      {/* Next/Previous Buttons */}
      {/* <button
        className="absolute top-[50%] left-0 transform cursor-pointer -translate-y-1/2 text-primary font-bold text-xl p-4 rounded-r-md bg-black flex items-center justify-center"
        onClick={() => plusSlides(-1)}
      >
        <Icon icon="heroicons:chevron-double-left" size={30} />
      </button>

      <button
        className="absolute top-[50%] right-0 transform cursor-pointer -translate-y-1/2 text-primary font-bold text-xl p-4 rounded-l-md bg-black flex items-center justify-center"
        onClick={() => plusSlides(1)}
      >
        <Icon icon="heroicons:chevron-double-right" size={30} />
      </button> */}

      {/* Thumbnails */}
      {/* <div className="flex flex-wrap">
        {slidesData.map((slide, index) => (
          <div key={index} className="w-1/6 p-1">
            <img
              src={slide.thumb}
              alt={slide.alt}
              className={`w-full cursor-pointer opacity-60 hover:opacity-100 ${
                slideIndex === index + 1 ? "opacity-100" : ""
              }`}
              onClick={() => currentSlide(index + 1)}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Hero;
