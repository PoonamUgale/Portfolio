import React from "react";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page) => {
    onNavClick(page);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      {/* <div className="logo">My Portfolio</div> */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        {["About", "Education", "Work", "Skills", "Contact"].map((page) => (
          <li key={page} onClick={() => handleNavClick(page)}>
            {page}
          </li>
        ))}
      </ul>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <RxCross2 /> : <GiHamburgerMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
