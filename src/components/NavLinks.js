import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button className="dropdown-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <img className="close-menu" src="./images/close.svg" alt="Close" />
        ) : (
          <img className="open-menu" src="./images/open.svg" alt="Open" />
        )}
      </button>
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/standings" onClick={() => setIsMenuOpen(false)}>
          Standings
        </NavLink>
        <NavLink to="/mailing" onClick={() => setIsMenuOpen(false)}>
          Contact Us
        </NavLink>
        <NavLink to="/game" onClick={() => setIsMenuOpen(false)}>
          Play Now
        </NavLink>
      </nav>
    </>
  );
};

export default NavLinks;
