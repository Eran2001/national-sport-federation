import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const mainNavLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "News", path: "/news-media" },
  { label: "Teams", path: "/teams" },
  { label: "Events", path: "/events" },
  { label: "Development", path: "/development" },
  { label: "Resources", path: "/resources" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact Us", path: "/contact" },
];

const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full bg-success transition-all duration-500 ${
          isScroll ? "bg-black backdrop-blur-3xl" : ""
        } z-50`}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-around max-xl:justify-between h-20 px-4 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-1 border-2 border-light hover:border-primary transition-colors duration-500 rounded-md cursor-pointer">
            <span
              onClick={() => navigate("/")}
              className="text-3xl md:text-4xl px-2 text-light hover:text-primary transition-colors duration-500"
            >
              SPORTS
            </span>
          </div>

          {/* Desktop Nav (xl and up) */}
          <ul className="hidden xl:flex items-center gap-6 text-lg text-secondary">
            {mainNavLinks.map(({ label, path }, index) => (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative text-light hover:text-primary transition-colors duration-500
                    after:content-[''] after:block after:h-[2px] after:bg-primary after:transition-all after:duration-500 after:mt-1
                    ${
                      isActive
                        ? "after:w-full text-primary"
                        : "after:w-0 hover:after:w-full"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger (md and below) */}
          <div className="md:flex xl:hidden max-xl:pr-6 max-lg:pr-0">
            <button
              className="relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`w-8 h-1 bg-light rounded-full transition-all duration-300 ease-in-out
                  ${
                    menuOpen
                      ? "rotate-45 translate-y-2.5 bg-primary"
                      : "group-hover:bg-primary"
                  }`}
              ></span>
              <span
                className={`w-8 h-1 bg-light rounded-full transition-all duration-300 ease-in-out
                  ${menuOpen ? "opacity-0" : "group-hover:bg-primary"}`}
              ></span>
              <span
                className={`w-8 h-1 bg-light rounded-full transition-all duration-300 ease-in-out
                  ${
                    menuOpen
                      ? "-rotate-45 -translate-y-2.5 bg-primary"
                      : "group-hover:bg-primary"
                  }`}
              ></span>
            </button>
          </div>

          {/* Buttons (lg and up) */}
          <div className="hidden lg:flex items-center">
            {/* <Button
              text="Contact Us"
              onClick={() => handleNavigate("/contact")}
            /> */}
            <Button
              text="Get Involved"
              onClick={() => handleNavigate("/get-involved")}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu (md and below) */}
      <div
        className={`fixed top-20 left-0 w-full bg-success/95 z-[51] bg-black xl:hidden transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 py-6 px-6 text-light text-lg">
          {mainNavLinks.map(({ label, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `block py-2 px-2 rounded transition-colors duration-300
                  ${
                    isActive
                      ? "bg-primary/20 text-primary"
                      : "hover:bg-primary/10"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className="flex flex-col gap-2 mt-4">
            <Button
              text="Contact Us"
              onClick={() => handleNavigate("/contact")}
            />
            <Button
              text="Get Involved"
              onClick={() => handleNavigate("/get-involved")}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
