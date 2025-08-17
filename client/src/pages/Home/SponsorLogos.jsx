import React from "react";

const logos = [
  { label: "Logo1" },
  { label: "Logo2" },
  { label: "Logo3" },
  { label: "Logo4" },
  { label: "Logo5" },
  { label: "Logo6" },
  { label: "Logo7" },
  { label: "Logo8" },
];

const SponsorLogos = () => {
  return (
    <section className="flex flex-col items-center bg-gray-500">
      <h1 className="text-2xl font-medium text-center">Sponsor Logos</h1>
      <div className="flex justify-around items-center gap-4 w-full ">
        {logos.map((value, index) => {
          return (
            <div key={index} className="p-6 rounded-md cursor-pointe border">
              <h1 className="font-semibold">{value.label}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SponsorLogos;
