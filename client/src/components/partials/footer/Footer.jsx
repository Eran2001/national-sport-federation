import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-white py-8">
    <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Sports Federation</h3>
        <p className="text-muted">Promoting excellence in sports since 1980.</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul>
          <li>
            <Link to="/about" className="hover:text-secondary">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-secondary">
              Events
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-secondary">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-secondary">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-secondary">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
