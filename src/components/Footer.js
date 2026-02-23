import React, { memo } from "react";
import "./Footer.css";

const Footer = memo(function Footer() {

  const handleButtonClick = () => {
    const recipient = process.env.REACT_APP_EMAIL || 'info@srimarutipackagings.com';
    const subject = 'Enquiry from Website';
    const body = 'Hi, I would like to know more about...';

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>UNIT 1</h3>
            <p className="unit-name">SRI MARUTI PACKAGINGS</p>
            <address>
              Tech Mahindra Road,<br />
              Bahadurpally,<br />
              Hyderabad - 500 055,<br />
              INDIA.
            </address>
          </div>

          <div className="footer-column">
            <h3>UNIT 2</h3>
            <p className="unit-name">SRI MARUTI CORRUGATORS</p>
            <address>
              Suraram Village,<br />
              Quthbulapur Mandal,<br />
              Hyderabad - 500 055,<br />
              INDIA.
            </address>
          </div>

          <div className="footer-column">
            <h3>UNIT 3</h3>
            <p className="unit-name">SRI I S PACKAGING INDUSTRIES</p>
            <address>
              Sy. No: 618 & 619, Kalavacharlla Road,<br />
              Rajanagaram, Rajahmundry,<br />
              AP - 533 297,<br />
              INDIA.
            </address>
          </div>
        </div>

        <section className="social-media">
          <div className="social-media-wrap">
            <div className="social-icons">
              <a
                className="social-icon-link whatsapp"
                href="https://wa.me/9177776232"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp" />
              </a>

              <a
                className="social-icon-link email"
                href="#"
                onClick={(e) => { e.preventDefault(); handleButtonClick(); }}
                aria-label="Email"
              >
                <i className="fa fa-envelope" />
              </a>

              <a
                className="social-icon-link instagram"
                href="https://www.instagram.com/maruti.packagings_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        <p>Developed by Raghuveer (+91 9299659344)</p>
      </div>
    </div>
  );
});

export default Footer;
