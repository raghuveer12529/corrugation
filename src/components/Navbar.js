import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Use NavLink for active styling
import './Navbar.css'
import smp from '../smp.jpeg'
import { useWindowSize } from '../hooks/useWindowSize';
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { width } = useWindowSize();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    setButton(width > 960);
  }, [width]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={smp} alt="SRI MARUTI PACKAGINGS Logo" className="logo-image" />
          </Link>
          <div
            className="menu-icon"
            onClick={handleClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleClick();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Toggle navigation menu"
            aria-expanded={click}
          >
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
                onClick={closeMobileMenu}
                end
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/aboutus"
                className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
                onClick={closeMobileMenu}
              >
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/customers"
                className={({ isActive }) => "nav-links" + (isActive ? " active" : "")}
                onClick={closeMobileMenu}
              >
                MACHINERY
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => "nav-links-mobile" + (isActive ? " active" : "")} // Keep as link for mobile, button for desktop
                onClick={closeMobileMenu}
              >
                GET A QUOTE
              </NavLink>
            </li>
          </ul>
          {/* Desktop CTA Button */}
          {button && <Button buttonStyle="btn--primary" linkTo="/contact">GET A QUOTE</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
