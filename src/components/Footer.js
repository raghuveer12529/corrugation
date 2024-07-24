import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import smp from "../smp.png";

function Footer() {

  const handleButtonClick = () => {
    const recipient = process.env.REACT_APP_EMAIL; // Change this to the recipient's email address
    const subject = 'Enquiry '; // Change this to the email subject
    const body = 'Please type in a message for us. :)'; // Change this to the email body

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading"></p>
        <p className="footer-subscription-text"></p>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>UNIT 1</h2>
            <p style={{ color: "white", fontSize: "20px" }}>
              SRI MARUTI PACKAGINGS
            </p>
            <p style={{ color: "white" }}>Tech Mahindra Road,</p>
            <p style={{ color: "white" }}>Bahadurpally,</p>
            <p style={{ color: "white" }}>Hyderabad - 500 055,</p>
            <p style={{ color: "white" }}>INDIA.</p>
          </div>
          <div className="footer-link-items">
            <h2>UNIT 2</h2>
            <p style={{ color: "white", fontSize: "20px" }}>
              SRI MARUTI CORRUGATORS
            </p>
            <p style={{ color: "white" }}>Suraram Village,</p>
            <p style={{ color: "white" }}>Quthbulapur Mandal,</p>
            <p style={{ color: "white" }}>Hyderabad - 500 055,</p>
            <p style={{ color: "white" }}>INDIA.</p>
          </div>
          <div className="footer-link-items">
            <h2>UNIT 3</h2>
            <p style={{ color: "white", fontSize: "20px" }}>
              SRI I S PACKAGING INDUSTRIES
            </p>
            <p style={{ color: "white" }}>
              Sy. No: 618 & 619, Kalavacharlla Road,
            </p>
            <p style={{ color: "white" }}>Rajanagaram, Rajahmundry,</p>
            <p style={{ color: "white" }}>AP - 533 297,</p>
            <p style={{ color: "white" }}>INDIA.</p>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          {/* <div className="footer-logo">
            <Link to="/" className="social-logo">
              <div>
                <img src={smp} alt="Description of the image" />
              </div>
            </Link>
          </div> */}
          {/* <small className="website-rights">SMP © 2024</small> */}
          <div className="social-icons">
            <a
              className="social-icon-link whatsapp"
              href="https://wa.me/9177776232"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp" />
            </a>

            <a
              className="social-icon-link gmail"
              href="https://www.instagram.com/maruti.packagings_"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleButtonClick}
            >
              <i className="fa fa-envelope" />
            </a>

            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/maruti.packagings_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </section>

      <div className="footer-footer">
        <h5>Developed by Raghuveer (+91 9299659344 )</h5>
      </div>
      
    </div>
  );
}

export default Footer;
