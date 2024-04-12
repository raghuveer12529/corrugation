import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import smp from '../smp.jpeg'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>

            <img src={smp} alt="Description of the image" className="logo" style={{
              marginTop: '-5px',
              width: '50px', // Example width
              height: 'auto', // Maintains aspect ratio
              borderRadius: '10px', // Example border radius
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Example box shadow
            }} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className={click ? "nav-links-mobile" : "nav-links"} onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>


            <li className="nav-item">
              <Link
                to="/customers"
                className={click ? "nav-links-mobile" : "nav-links"}
                onClick={closeMobileMenu}
              >
                MACHINERY
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className={click ? "nav-links-mobile" : "nav-links"} onClick={closeMobileMenu}>
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={click ? "nav-links-mobile" : "nav-links"}
                onClick={closeMobileMenu}
              >
                GET A QUOTE
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
