import React from "react";
import img1 from "../../assets/hero-1.jpg";
import img4 from "../../assets/hero-4.jpg";
import img6 from "../../assets/hero-6.jpg";

// CardItem is a reusable component for each card
const CardItem = ({ imgSrc, title, description }) => (
  <div className="card flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-full h-full">
    <a href="#">
      <img
        className="rounded-t-lg w-full object-cover aspect-[3/2]"
        src={imgSrc}
        alt=""
      />
    </a>
    <div className="p-5 flex flex-col flex-1">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-1">
        {description}
      </p>
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>
);

const cardsData = [
  {
    imgSrc: img1,
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    imgSrc: img4,
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    imgSrc: img6,
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
];

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cardsData.map((card, idx) => (
        <div
          key={idx}
          className="flex"
          style={{ height: "100%", minHeight: "420px" }}
        >
          <CardItem {...card} />
        </div>
      ))}
    </div>
  );
};

export default Card;
