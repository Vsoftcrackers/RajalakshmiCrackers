import React, { useState } from "react";
import "./contactpage.css"; // Assuming you have your CSS styles
import 'font-awesome/css/font-awesome.min.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to server or display a message)
    console.log(formData);
  };

  return (
    
    <section id="contact">
       <h1 className="section-header">Contact</h1>

      <img
        src="https://as2.ftcdn.net/v2/jpg/04/66/41/93/1000_F_466419334_Yd6X3CsVC6cEzLaln9Aulrgpw28md7OE.jpg"
        alt="RajaLakshmi Crackers - contactpage Banner"
        className="image-style"
      />
      

      <div className="contact-wrapper">
        {/* Left Contact Page */}
        <form
          id="contact-form"
          className="form-horizontal"
          role="form"
          onSubmit={handleSubmit}
        >
          <div className="form-group half-width">
            <div className="col-sm-6">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-sm-6">
            <label>Email</label>
            
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group half-width">
            <div className="col-sm-6">
            <label>Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="PHONE NUMBER"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-sm-6">
            <label>Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="SUBJECT"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
            <label>Message</label>
              <textarea
                className="form-control"
                rows="10"
                placeholder="MESSAGE"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
            <div className="alt-send-button">
              <i className="fa fa-paper-plane"></i>
              <span className="send-text">SEND</span>
            </div>
          </button>
        </form>
        {/* Left Contact Page */}

        {/* Right Contact Information */}
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">City, State</span>
              </i>
            </li>
            <li className="list-item">
              <i className="fa fa-phone fa-2x">
                <span className="contact-text phone">
                  <a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a>
                </span>
              </i>
            </li>
            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a href="mailto:hitmeup@gmail.com" title="Send me an email">hitmeup@gmail.com</a>
                </span>
              </i>
            </li>
          </ul>

          <hr />
          <ul className="social-media-list">
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <i className="fa fa-codepen" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="contact-icon">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <hr />

          <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
