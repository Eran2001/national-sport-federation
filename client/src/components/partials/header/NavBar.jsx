import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-primary via-secondary to-third text-text fixed h-16 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-light text-2xl font-bold tracking-tight">
              LOGO
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-light hover:text-third text-sm font-medium transition-colors duration-300 ease-in-out"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#get-started"
              className="bg-third text-light px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-all duration-300 ease-in-out"
            >
              Get Started
            </a>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-light focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-6">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-light hover:text-third text-sm font-medium transition-colors duration-300 ease-in-out"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#get-started"
                className="bg-third text-light px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-80 transition-all duration-300 ease-in-out"
                onClick={toggleMenu}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
