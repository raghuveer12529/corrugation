import React, { useState } from "react";
import "./ContactUs.css";
import { Button } from "./Button";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-us">
      <div className="form-container">
        <h1>DETAILS</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="name">Company Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Phone:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Description of Box:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <label htmlFor="specifications">Specifications (GMS/BF/BS):</label>
          <input
            type="text"
            id="specifications"
            name="specifications"
            value={formData.specifications}
            onChange={handleChange}
            required
          />
          <label htmlFor="quantity">
            Quantity: (MOQ is 500no's for 5PLY and 1000no's for 3PLY){" "}
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
          <label htmlFor="measurement">Measurement in mm:</label>
          <input
            type="text"
            id="measurement"
            name="measurement"
            value={formData.measurement}
            onChange={handleChange}
            required
          />

          <div className="form-row">
            <div className="form-group"></div>
            <div className="form-group"></div>
          </div>
          <div className="form-row">
            <div className="form-group"></div>
            <div className="form-group"></div>
          </div>
          <div className="button">
            <button className="btns">GET A QUOTE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
