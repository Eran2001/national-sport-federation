import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";

const mainNavLinks = [
  [
    { label: "About Us", path: "/about" },
    { label: "Vision & Mission", path: "/about/vision-mission" },
    { label: "History", path: "/about/history" },
    { label: "Office Bearers", path: "/about/office-bearers" },
    { label: "Executive Committee", path: "/about/executive-committee" },
    { label: "Constitution", path: "/about/constitution" },
  ],
  [
    { label: "News & Media", path: "/news-media" },
    { label: "Latest News", path: "/news-media/latest-news" },
    { label: "Press Releases", path: "/news-media/press-releases" },
    { label: "Announcements", path: "/news-media/announcements" },
    { label: "Media Coverage", path: "/news-media/media-coverage" },
    { label: "Newsletter Archive", path: "/news-media/newsletter-archive" },
  ],
  [
    { label: "Teams", path: "/teams" },
    { label: "National Teams", path: "/teams/national-teams" },
    { label: "Player Profiles", path: "/teams/player-profiles/:id" },
    {
      label: "Coach & Staff Profiles",
      path: "/teams/coach-staff-profiles/:id",
    },
    { label: "Selection Criteria", path: "/teams/selection-criteria" },
  ],
  [
    { label: "Events & Competitions", path: "/events" },
    { label: "Event Calendar", path: "/events/calendar" },
    { label: "Upcoming Events", path: "/events/results" },
    { label: "Results & Rankings", path: "/events/results-rankings" },
    { label: "Fixtures", path: "/events/fixtures" },
    { label: "Past Tournaments", path: "/events/past-tournaments" },
  ],
  [
    { label: "Development", path: "/development" },
    { label: "Coaching Programs", path: "/development/coaching-programs" },
    { label: "Refereeing Programs", path: "/development/refereeing-programs" },
    {
      label: "Coaching Certification",
      path: "/development/coaching-certification",
    },
    {
      label: "Referee Certification",
      path: "/development/referee-certification",
    },
    {
      label: "Grassroots Development",
      path: "/development/grassroots-development",
    },
    {
      label: "Talent Identification",
      path: "/development/talent-identification",
    },
  ],
  [
    { label: "Resources", path: "/resources" },
    { label: "Forms & Applications", path: "/resources/forms-applications" },
    { label: "Policies & Guidelines", path: "/resources/policies-guidelines" },
    { label: "RuleBooks", path: "/resources/rule-books" },
    { label: "Downloads", path: "/resources/downloads" },
  ],
  [
    { label: "Gallery", path: "/gallery" },
    { label: "Photos", path: "/gallery/photos" },
    { label: "Videos", path: "/gallery/videos" },
    { label: "Event Highlights", path: "/gallery/event-highlights" },
  ],
  [
    { label: "Get Involved", path: "/get-involved" },
    { label: "Volunteer", path: "/get-involved/volunteer" },
    { label: "Membership", path: "/get-involved/membership" },
    { label: "Sponsorship Opportunities", path: "/get-involved/sponsorship" },
    { label: "Donations", path: "/get-involved/donations" },
  ],
  [
    { label: "Contact Us", path: "/contact" },
    { label: "Contact Form", path: "/contact/contact-form" },
    { label: "Office Details & Map", path: "/contact/office-details-map" },
    { label: "Social Media Links", path: "/contact/social-media-links" },
  ],
];

const subNavLinks = [
  { label: "Home", path: "/" },
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
                <NavLink to="/" onClick={() => setIsOpen(false)}>
                  SPORTS
                </NavLink>
              </h1>
            </div>
            <ul
              className={`flex justify-around items-center gap-8 ${
                isScroll && !isOpen
                  ? "text-primary  text-shadow-lg"
                  : "text-light"
              } cursor-pointer`}
            >
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-primary transition-all"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-primary transition-all"
              >
                About Us
              </Link>
              <Link
                to="/gallery"
                onClick={() => setIsOpen(false)}
                className="hover:text-primary transition-all"
              >
                Gallery
              </Link>
              <Link
                to="/get-involved"
                onClick={() => setIsOpen(false)}
                className="hover:text-primary transition-all"
              >
                Join Us
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-primary transition-all"
              >
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
                {subNavLinks.map(({ label, path }, idx) => (
                  <li
                    key={idx}
                    className="text-light font-semibold cursor-pointer"
                  >
                    <NavLink to={path} onClick={() => setIsOpen(false)}>
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-8 max-md:col-span-7 grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 gap-2 max-lg:gap-4 w-full h-full p-6">
              {mainNavLinks.map((group, idx) => (
                <ul key={idx} className="space-y-1">
                  {group.map(({ label, path }, linkIdx) => (
                    <li
                      key={linkIdx}
                      className={
                        linkIdx === 0
                          ? "text-light font-semibold mb-2"
                          : "text-muted text-xs font-normal"
                      }
                    >
                      <NavLink to={path} onClick={() => setIsOpen(false)}>
                        {label}
                      </NavLink>
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
