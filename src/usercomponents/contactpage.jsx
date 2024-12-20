import React, { useState } from "react";
import "./contactpage.css"; // Import the CSS file

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="contact-us-container">
      <img
        className="contact-image"
        src="https://t4.ftcdn.net/jpg/06/58/66/65/360_F_658666532_NceFfPMA5i4DPsQeNAYhFRth1sEDYj3N.jpg"
        alt="Crackers"
      />
      <div className="contact-form-container">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        <div className="contact-info">
          <h3>Location</h3>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Crackers St, Crunchville, CA</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
