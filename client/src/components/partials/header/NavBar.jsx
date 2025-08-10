import React, { useState, useEffect } from "react";
import Icon from "../../ui/Icon";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);
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
        className={`fixed flex justify-around items-center w-full h-16 transition-colors duration-300 ${
          isScroll ? "backdrop-blur-lg" : "bg-transparent"
        } z-50`}
      >
        <div className="cursor-pointer">
          <h1
            className={`${isScroll ? "text-primary" : "text-light"} text-2xl`}
          >
            SPORTS
          </h1>
        </div>
        <ul
          className={`flex justify-around items-center gap-8 ${
            isScroll ? "text-primary text-shadow-lg" : "text-light"
          } cursor-pointer`}
        >
          <li className="hover:text-primary transition-all">Home</li>
          <li className="hover:text-primary transition-all">About Us</li>
          <li className="hover:text-primary transition-all">Gallery</li>
          <li className="hover:text-primary transition-all">Join Us</li>
          <li className="hover:text-primary transition-all">Contact Us</li>
        </ul>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary cursor-pointer"
        >
          <Icon
            icon={`${isOpen ? "heroicons:bars-3" : "heroicons:x-mark"}`}
            size={24}
          />
        </div>
      </nav>

      {/* Mega menu panel, conditionally rendered */}
      {!isOpen && (
        <div className="fixed top-16 left-0 w-full bg-transparent text-light z-40 p-6 shadow-lg">
          {/* You can customize mega menu content here */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-2">Section 1</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-primary">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Link 3
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Section 2</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-primary">
                    Link 4
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Link 5
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Link 6
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Section 3</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-primary">
                    Link 7
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Link 8
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Link 9
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
