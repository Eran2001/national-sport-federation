import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Icon from "../../ui/Icon";

const mainNavLinks = [
  [
    "About Us",
    "Vision & Mission",
    "History",
    "Office Bearers",
    "Executive Committee",
    "Constitution",
  ],
  [
    "News & Media",
    "Latest News",
    "Press Releases",
    "Announcements",
    "Media Coverage",
    "Newsletter Archive",
  ],
  [
    "Teams",
    "National Teams",
    "Player Profiles",
    "Coach & Staff Profiles",
    "Selection Criteria",
  ],
  [
    "Events & Competitions",
    "Event Calendar",
    "Upcoming Events",
    "Results & Rankings",
    "Fixtures",
    "Past Tournaments",
  ],
  [
    "Development",
    "Coaching Programs",
    "Refereeing Programs",
    "Coaching Certification",
    "Referee Certification",
    "Grassroots Development",
    "Talent Identification",
  ],
  [
    "Resources",
    "Forms & Applications",
    "Policies & Guidelines",
    "RuleBooks",
    "Downloads",
  ],
  ["Gallery", "Photos", "Videos", "Event Highlights"],
  [
    "Get Involved",
    "Volunteer",
    "Membership",
    "Sponsorship Opportunities",
    "Donations",
  ],
  ["Contact Us", "Contact Form", "Office Details & Map", "Social Media Links"],
];

const subNavLinks = [
  "Home",
  "About Us",
  "News & Media",
  "Teams",
  "Events & Competitions",
  "Development",
  "Resources",
  "Gallery",
  "Get Involved",
  "Contact Us",
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        className={`fixed flex justify-between items-center w-full px-8 h-16 transition-colors duration-300 z-50 ${
          isScroll || isOpen ? "bg-black/60 backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="cursor-pointer">
          <h1
            className={`${isScroll ? "text-primary" : "text-light"} text-2xl`}
          >
            <NavLink to="/">SPORTS</NavLink>
          </h1>
        </div>
        <ul
          className={`flex justify-around items-center gap-8 ${
            isScroll ? "text-primary text-shadow-lg" : "text-light"
          } cursor-pointer`}
        >
          <NavLink to="/" className="hover:text-primary transition-all">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-primary transition-all">
            About Us
          </NavLink>
          <NavLink to="/gallery" className="hover:text-primary transition-all">
            Gallery
          </NavLink>
          <NavLink
            to="/get-involved"
            className="hover:text-primary transition-all"
          >
            Join Us
          </NavLink>
          <NavLink to="/contact" className="hover:text-primary transition-all">
            Contact Us
          </NavLink>
        </ul>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary cursor-pointer"
        >
          <Icon
            icon={`${isOpen ? "heroicons:x-mark" : "heroicons:bars-3"}`}
            size={24}
          />
        </div>
      </nav>

      {/* Mega menu panel, conditionally rendered */}
      {isOpen && (
        <div
          className={`fixed top-0 left-0 w-full bg-black/60 backdrop-blur-lg text-light z-50 px-6 pb-6 shadow-lg`}
        >
          <nav
            className={`flex justify-between items-center w-full px-2 h-16 transition-colors duration-300 z-50`}
          >
            <div className="cursor-pointer">
              <h1
                className={`${
                  isScroll && !isOpen ? "text-primary" : "text-light"
                } text-2xl`}
              >
                SPORTS
              </h1>
            </div>
            <ul
              className={`flex justify-around items-center gap-8 ${
                isScroll && !isOpen
                  ? "text-primary  text-shadow-lg"
                  : "text-light"
              } cursor-pointer`}
            >
              <Link to="/" className="hover:text-primary transition-all">
                Home
              </Link>
              <Link to="/about" className="hover:text-primary transition-all">
                About Us
              </Link>
              <Link to="/gallery" className="hover:text-primary transition-all">
                Gallery
              </Link>
              <Link
                to="/get-involved"
                className="hover:text-primary transition-all"
              >
                Join Us
              </Link>
              <Link to="/contact" className="hover:text-primary transition-all">
                Contact Us
              </Link>
            </ul>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-light text-black cursor-pointer"
            >
              <Icon
                icon={`${isOpen ? "heroicons:x-mark" : "heroicons:bars-3"}`}
                size={24}
              />
            </div>
          </nav>
          {/* You can customize mega menu content here */}
          <div className="grid grid-cols-10 border-b-1 border-t-1">
            <div className="col-span-2 max-md:col-span-3 w-full h-full border-r border-muted">
              <ul className="pl-2 py-4 space-y-2">
                {subNavLinks.map((link, idx) => (
                  <li
                    key={idx}
                    className="text-light font-semibold cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-8 max-md:col-span-7 grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 gap-2 max-lg:gap-4 w-full h-full p-6">
              {mainNavLinks.map((group, idx) => (
                <ul key={idx} className="space-y-1">
                  {group.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className={
                        linkIdx === 0
                          ? "text-light font-semibold mb-2"
                          : "text-muted text-xs font-normal"
                      }
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
