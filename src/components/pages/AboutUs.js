import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="content-container">
        <p style={{ marginBottom: "20px" }}>
          Welcome to <span style={{ color: "blue" }}>SRI MARUTI PACKAGING</span>, where we are committed to delivering
          exceptional products and services.
        </p>
        <p style={{ marginBottom: "20px" }}>
          We are glad to introduce ourself, a corrugated boxes manufacturing
          firm since 1997. The products of our company enjoy excellent
          reputation for its quality and we are reputed for our services and
          timely deliveries. Our main objective is to maintain the customer
          expectations and to make sure that the customer is happy by suggesting
          them with the product according to their needs. And we are a member of
          the corrugation association, who helps us with the knowledge of
          various new innovations and product standards in the industry. For the
          past 25 years we have worked hard to achieve the position that we are
          at now, and we have won the confidence of our clients from various
          organizations.
        </p>
        <p style={{ marginBottom: "20px" }}>We have setup corrugation units in the area far from pollution and in a quiet environment. Every unit is set according to the needs and Pros of the corrugation products. We have the factories with sophisticated machinery to manufacture corrugated products with skilled personnel to process the product as per the specifications of the customers.</p>
        <h2>Our Mission</h2>
        <p style={{ marginBottom: "20px" }}>
          [Your Company Name] is on a mission to [briefly describe your
          mission]. We strive to [goals and objectives].
        </p>
        <h2>Why Choose Us?</h2>
        <ul style={{ marginBottom: "20px" }}>
          <li>Quality Products</li>
          <li>Exceptional Service</li>
          <li>Innovation</li>
          {/* Add more reasons */}
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
