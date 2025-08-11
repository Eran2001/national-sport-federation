import React from "react";
import img6 from "../../assets/hero-6.jpg";

const UpcomingEvents = () => {
  return (
    <>
      <h1 className="text-2xl font-medium my-8 text-center">Upcoming Events</h1>
      <div className="flex justify-center items-center">
        <div className="mx-auto my-4 w-100 border shadow-2xl rounded-3xl">
          <div>
            <img src={img6} alt="img-sample" className="w-full" height={100} />
            <h1 className="my-4 text-lg font-medium">
              Sample Cricket Image - New
            </h1>
            <p className="text-base text-slate-700 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quis provident omnis cumque ea.
            </p>
            <hr className="my-4" />
            <p className="font-medium text-lg">Time</p>
            <span className="my-4 inline-block">
              Now, 2 2024 - Nov, 14 2024
            </span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="border mt-4 p-4 bg-secondary text-primary rounded-4xl">
              View Location
            </button>
          </div>
        </div>
        <div className="mx-auto my-4 w-100 border shadow-2xl rounded-3xl">
          <div>
            <img src={img6} alt="img-sample" className="w-full" height={100} />
            <h1 className="my-4 text-lg font-medium">
              Sample Cricket Image - New
            </h1>
            <p className="text-base text-slate-700 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quis provident omnis cumque ea.
            </p>
            <hr className="my-4" />
            <p className="font-medium text-lg">Time</p>
            <span className="my-4 inline-block">
              Now, 2 2024 - Nov, 14 2024
            </span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="border mt-4  p-4 bg-secondary text-primary rounded-4xl">
              View Location
            </button>
          </div>
        </div>
        <div className="mx-auto my-4 w-100 border shadow-2xl rounded-3xl">
          <div>
            <img src={img6} alt="img-sample" className="w-full" height={100} />
            <h1 className="my-4 text-lg font-medium">
              Sample Cricket Image - New
            </h1>
            <p className="text-base text-slate-700 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quis provident omnis cumque ea.
            </p>
            <hr className="my-4" />
            <p className="font-medium text-lg">Time</p>
            <span className="my-4 inline-block">
              Now, 2 2024 - Nov, 14 2024
            </span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="border mt-4  p-4 bg-secondary text-primary rounded-4xl">
              View Location
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
