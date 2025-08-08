import React from "react";

const Tooltip = ({ text, position = "top", children }) => {
  const tooltipPositionClasses = {
    top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
    bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
    left: "right-full top-1/2 mr-2 -translate-y-1/2",
    right: "left-full top-1/2 ml-2 -translate-y-1/2",
  };

  const arrowPositionClasses = {
    top: "bottom-[-3px] left-1/2 -translate-x-1/2",
    bottom: "top-[-3px] left-1/2 -translate-x-1/2",
    left: "right-[-3px] top-1/2 -translate-y-1/2",
    right: "left-[-3px] top-1/2 -translate-y-1/2",
  };

  return (
    <div className="relative group inline-block cursor-pointer">
      {children}
      <div
        className={`absolute z-20 whitespace-nowrap rounded bg-black px-3 py-1 text-sm text-white opacity-0 group-hover:opacity-100 transition duration-200 ${tooltipPositionClasses[position]}`}
      >
        <span
          className={`absolute z-[-1] h-2 w-2 rotate-45 rounded-sm bg-black ${arrowPositionClasses[position]}`}
        ></span>
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
