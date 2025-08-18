import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "@/components/ui/Button";

const mainNavLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "News", path: "/news-media" },
  { label: "Teams", path: "/teams" },
  { label: "Events", path: "/events" },
  { label: "Development", path: "/development" },
  { label: "Resources", path: "/resources" },
  { label: "Gallery", path: "/gallery" },
];

const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`w-full flex justify-between items-center bg-success h-20 px-4 transition-all duration-500 ${
          isScroll ? "bg-secondary/10 backdrop-blur-3xl" : ""
        } z-200`}
      >
        <div className="flex gap-1 border-2 border-light hover:border-primary transition-colors duration-500 rounded-md cursor-pointer">
          <span className="text-4xl px-2 text-light hover:text-primary transition-colors duration-500">
            SPORTS
          </span>
        </div>
        <ul className="ml-30 flex justify-between items-center border-none rounded-md gap-6 text-secondary text-lg">
          {mainNavLinks.map(({ label, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `
            relative text-light hover:text-primary transition-colors duration-500
            after:content-[''] after:block after:h-[2px] after:bg-primary after:transition-all after:duration-500 after:mt-1
            ${
              isActive
                ? "after:w-full text-primary"
                : "after:w-0 hover:after:w-full"
            }
          `
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 ">
          <Button text="Contact Us" />
          <Button text="Get Involved" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
