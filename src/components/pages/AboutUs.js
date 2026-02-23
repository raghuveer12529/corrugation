import React from "react";
import "./AboutUs.css";
import Certifications from "../Certifications";

const AboutUs = () => {
  return (
    <article className="about-us">
      <div className="content-container">
        <header className="about-header">
          <h1 className="about-title">About Us</h1>
        </header>

        <section className="about-intro">
          <p>
            Welcome to <span className="brand-highlight">SRI MARUTI PACKAGINGS</span>, where we
            are committed to delivering exceptional products and services.
          </p>
          <p>
            We are glad to introduce ourself, which is a corrugated boxes
            manufacturing firm since 1997. The products of our company enjoy
            excellent reputation for its quality and we are reputed for our
            services and timely deliveries. Our main objective is to maintain the
            customer expectations and to make sure that the customer is happy by
            suggesting them with the product according to their needs. And we are
            a member of the corrugation association, who helps us with the
            knowledge of various new innovations and product standards in the
            industry.
          </p>
        </section>

        <section className="about-units">
          <h2>Our Units</h2>
          <div className="unit-list">
            <div className="unit-item">
              <h3>Unit-1</h3>
              <p>Sri Maruti Packagings - Hyderabad - Est. 1997 (1200 Tons/month)</p>
            </div>
            <div className="unit-item">
              <h3>Unit-2</h3>
              <p>Sri Maruti Corrugators - Hyderabad - Est. 2015 (500 Tons/month)</p>
            </div>
            <div className="unit-item">
              <h3>Unit-3</h3>
              <p>Sri I S Packaging Industries - Rajahmundry - Est. 2023 (2000 Tons/month)</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="mission-heading" className="about-mission">
          <h2 id="mission-heading">OUR MISSION</h2>
          <p>
            <span className="brand-highlight">SRI MARUTI PACKAGINGS</span> is on a
            mission to expand gradually and automate the entire production
            workflow to provide our customers with top-of-the-line and
            fault-resistant products.
          </p>
        </section>

        <section aria-labelledby="why-choose-us-heading" className="about-choose">
          <h2 id="why-choose-us-heading">WHY CHOOSE US?</h2>
          <div className="choose-grid">
            <div className="choose-item">✅ &nbsp; Quality Products</div>
            <div className="choose-item">✅ &nbsp; Timely Deliveries</div>
            <div className="choose-item">✅ &nbsp; Competitive Rates</div>
            <div className="choose-item">✅ &nbsp; Reliability</div>
            <div className="choose-item">✅ &nbsp; Professionalism</div>
          </div>
        </section>

        <section aria-label="Certifications" className="about-certifications">
          <Certifications />
        </section>

        <section aria-labelledby="team-heading" className="about-team">
          <h2 id="team-heading">OUR TEAM</h2>
          <div className="team-grid">
            <div className="member-profile">
              <div className="member-image">
                <img src="images/profilePic.webp" alt="I Srinivas Rao, Managing Director" onError={(e) => { e.target.style.display = 'none' }} />
                {/* Fallback or placeholder handling could be better but sticking to image presence check */}
              </div>
              <h3>I SRINIVAS RAO</h3>
              <p>Managing Director</p>
            </div>
            <div className="member-profile">
              <div className="member-image">
                <img src="images/profilePic.webp" alt="I Sai Teja, Managing Director" onError={(e) => { e.target.style.display = 'none' }} />
              </div>
              <h3>I SAI TEJA</h3>
              <p>Managing Director</p>
            </div>
            <div className="member-profile">
              <div className="member-image">
                <img src="images/profilePic.webp" alt="I Siva Teja, Marketing Representative" onError={(e) => { e.target.style.display = 'none' }} />
              </div>
              <h3>I SIVA TEJA</h3>
              <p>Marketing Representative</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default AboutUs;
