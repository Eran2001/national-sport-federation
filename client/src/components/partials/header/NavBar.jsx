import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../../assets/android-chrome-192x192.png";

import Button from "@/components/ui/Button";

const mainNavLinks = [
  { label: "About Us", path: "/about" },
  { label: "News & Media", path: "/news-media" },
  { label: "Teams", path: "/teams" },
  { label: "Events & Competitions", path: "/events" },
  { label: "Development", path: "/development" },
  { label: "Resources", path: "/resources" },
  { label: "Gallery", path: "/gallery" },
  { label: "Get Involved", path: "/get-involved" },
  { label: "Contact Us", path: "/contact" },
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
      <nav className="fixed w-full flex justify-between items-center h-20 px-4">
        <div className="flex gap-1 border-2 border-secondary rounded-md">
          <img
            src={logo}
            width={40}
            alt={logo}
            className="inline-block rounded-tr-none rounded-br-none bg-secondary"
          />
          <span className="text-4xl pt-[2px] pr-2">SPORTS</span>
        </div>
        <ul className="flex justify-between items-center">
          {mainNavLinks.map(({ label, path }, index) => (
            <li key={index}>
              <NavLink to={path}>{label}</NavLink>
            </li>
          ))}
        </ul>
        <div>
          <Button text="Contact Us" />
          <Button text="Get Involved" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
