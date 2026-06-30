import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-container fade-in-up">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Our team is always here to help.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info-panel">
          <h2>Contact Information</h2>
          <div className="info-item">
            <strong>📍 Address:</strong>
            <p>123, TVR Supermart, Avinashi Road, Coimbatore - 641018</p>
          </div>
          <div className="info-item">
            <strong>📞 Phone:</strong>
            <p>+91 98765 43210</p>
          </div>
          <div className="info-item">
            <strong>✉️ Email:</strong>
            <p>support@tvrsupermart.com</p>
          </div>
        </div>

        <div className="contact-form-panel">
          <h2>Send us a Message</h2>
          <form className="animate-form">
            <div className="input-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="input-group">
              <textarea rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;