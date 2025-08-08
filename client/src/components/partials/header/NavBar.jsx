import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="bg-primary text-white shadow-md">
    <div className="container flex items-center justify-between py-4">
      <Link to="/" className="text-2xl font-bold">
        Sports Federation
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-secondary">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-secondary">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/news" className="hover:text-secondary">
            News & Media
          </Link>
        </li>
        <li>
          <Link to="/teams" className="hover:text-secondary">
            Teams
          </Link>
        </li>
        <li>
          <Link to="/events" className="hover:text-secondary">
            Events
          </Link>
        </li>
        <li>
          <Link to="/development" className="hover:text-secondary">
            Development
          </Link>
        </li>
        <li>
          <Link to="/resources" className="hover:text-secondary">
            Resources
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="hover:text-secondary">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/get-involved" className="hover:text-secondary">
            Get Involved
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-secondary">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
