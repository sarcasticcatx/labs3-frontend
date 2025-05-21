import React from "react";
import "./Navbar.css";

const pages = [
  { name: "Home", path: "/" },
  // { name: "Accommodation", path: "Accommodation" },
];

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {pages.map((page, index) => (
          <li key={index} className="nav-item">
            <a href={page.path} className="nav-link">
              {page.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
