import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "@/assets/android-chrome-192x192.png";

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
          isScroll ? "bg-black/30 backdrop-blur-3xl" : ""
        } z-200`}
      >
        <div className="flex gap-1 border-2 border-secondary rounded-md cursor-pointer">
          <img
            src={logo}
            width={40}
            alt={logo}
            className="inline-block rounded-tr-none rounded-br-none bg-secondary"
          />
          <span className="text-4xl pt-[2px] pr-2">SPORTS</span>
        </div>
        <ul className="ml-30 flex justify-between items-center border-none rounded-md gap-6 text-secondary  text-lg">
          {mainNavLinks.map(({ label, path }, index) => (
            <li className="hover:text-primary" key={index}>
              <NavLink
                to={path}
                // className={({ isActive }) => (isActive ? "underline" : "")}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 ">
          <Button text="Contact Us" className="!text-secondary" />
          <Button text="Get Involved" className="!text-secondary" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
