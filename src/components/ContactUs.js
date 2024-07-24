import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phone: "",
    description: "",
    specifications: "",
    quantity: "",
    measurement: "",
  });
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const Spinner = () => (
    <div className="loading-overlay">
      <div className="spinner"></div>
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const data = {
      to: process.env.REACT_APP_EMAIL,
      subject: `"Request for quotation from ${formData.companyName}"`,
      from: formData ? formData.email : "",
      text: `
      Name : ${formData ? formData.name : ""}
      Company Name : ${formData ? formData.companyName : ""}
      Email : ${formData ? formData.email : ""}
      Phone Number : ${formData ? formData.phone : ""}
      Description : ${formData ? formData.description : ""}
      Specifications : ${formData ? formData.specifications : ""}
      Quantity : ${formData ? formData.quantity : ""}
      Measurement : ${formData ? formData.measurement : ""}
      `,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Convert data to JSON string
        }
      );

      if (response.ok) {
        setLoading(false)
        alert("Email sent successfully");
        setFormData({
          name: "",
          email: "",
          companyName: "",
          phone: "",
          description: "",
          specifications: "",
          quantity: "",
          measurement: "",
        })
      } else {
        alert("Failed to send email");
        setLoading(false)
      }
      console.log(response);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="contact-us">
      <div className="form-container">
        <h1>PLEASE ENTER DETAILS</h1>
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

          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
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

          <label htmlFor="description">Description of Box:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
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

          <label htmlFor="quantity">Quantity: (MOQ is 1000 no's for 5PLY and 2500 no's for 3PLY)</label>
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

          <div className="button">
            <button className="btns" type="submit" disabled={loading}>
              {loading ? "Sending..." : "GET A QUOTE"}
            </button>
            {loading && <Spinner />} {/* Conditionally render the spinner */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
