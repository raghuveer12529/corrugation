import React from "react";
import "./AboutUs.css";
import Footer from "../Footer";
// import profilePic from '../../../public/images/profilePic.webp'

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="content-container">
        <p style={{ marginBottom: "20px" }}>
          Welcome to{" "}
          <span style={{ color: "blue" }}>SRI MARUTI PACKAGINGS</span>, where we
          are committed to delivering exceptional products and services.
        </p>
        <p style={{ marginBottom: "20px" }}>
          We are glad to introduce ourself, which is a corrugated boxes
          manufacturing firm since 1997. The products of our company enjoy
          excellent reputation for its quality and we are reputed for our
          services and timely deliveries. Our main objective is to maintain the
          customer expectations and to make sure that the customer is happy by
          suggesting them with the product according to their needs. And we are
          a member of the corrugation association, who helps us with the
          knowledge of various new innovations and product standards in the
          industry. For the past 25 years we have worked hard to achieve the
          position that we are at now, and we have won the confidence of our
          clients from various organizations. We have setup corrugation units in
          the area far from pollution and in a quiet environment. Each unit is
          set according to the needs and Pros of the corrugation products. We
          have the factories with sophisticated machineries to manufacture
          corrugated products with skilled personnel to process the product as
          per the specifications of the customers, at
          <br />
          <br /> 🏭 Unit-1, Sri Maruti Packagings - Hyderabad - Est. 1997 (1200
          Tons per month)
          <br /> 🏭 Unit-2, Sri Maruti Corrugators - Hyderabad - Est. 2015 (500
          Tons per month)
          <br /> 🏭 Unit-3, Sri I S Packaging Industries - Rajahmundry - Est.
          2023 (2000 Tons per month)
        </p>
        {/* <br />
        <br />
        <br />
        <br />
        <br /> */}
        {/* <p style={{ marginBottom: "20px" }}><br/>We have setup corrugation units in the area far from pollution and in a quiet environment. Every unit is set according to the needs and Pros of the corrugation products. We have the factories with sophisticated machinery to manufacture corrugated products with skilled personnel to process the product as per the specifications of the customers.</p> */}
        <h2 className="mission-heading">OUR MISSION</h2>
        <br />
        <p style={{ marginBottom: "20px" }}>
          <span style={{ color: "blue" }}>SRI MARUTI PACKAGINGS</span> is on a
          mission to expand gradually and automate the entire production
          workflow to provide our customers with top-of-the-line and
          fault-ressistant products.
        </p>
        {/* <br />
        <br />
        <br />
        <br />
        <br /> */}
        <h2 className="mission-heading" style={{ marginBottom: 20 }}>
          {" "}
          WHY CHOOSE US?
        </h2>
        <br />
        <div className="choose-us">
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "20px",
            }}
          >
            <li> ✅ &nbsp; Quality Products</li>
            <li> ✅ &nbsp;Timely Deliveries</li>
            <li> ✅ &nbsp;Competitve Rates</li>
            {/* Add more reasons */}
          </ul>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "20px",
            }}
          >
            <li> ✅ &nbsp;Reliability</li>
            <li> ✅ &nbsp;Professinalism</li>
            {/* Add more reasons */}
          </ul>
        </div>
        {/* <br />
        <br />
        <br />
        <br /> */}
        <h2 className="mission-heading">OUR TEAM</h2>
        <br />
        <br />
        <div className="our-team">
          <div className="member-profile">
            <div className="member-image">
              <img src="images/profilePic.webp" alt=""/>
            </div>
            <p>I SRINIVAS RAO</p>
            <p> -MD</p>
          </div>
          <div className="member-profile">
          <div className="member-image">
              <img src="images/profilePic.webp" alt="" />
            </div>
            <p>I SAI TEJA</p>
            <p> -MD</p>
          </div>
          <div className="member-profile">
          <div className="member-image">
              <img src="images/profilePic.webp" alt=""/>
            </div>
            <p>I SIVA TEJA </p>
            <p> -MR</p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default AboutUs;
