import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function SiteNavigation() {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/" className="site-logo">
          MyBrand
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Our Story</Link>
          </li>
          <li>
            <Link to="/contact">Get in Touch</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
