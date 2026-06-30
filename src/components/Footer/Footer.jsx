import React from 'react';
import { 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, 
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube,
  FaCcVisa, FaCcMastercard, FaCcPaypal
} from 'react-icons/fa';
import { SiPaytm, SiGooglepay } from 'react-icons/si'; // Optional: if you have react-icons/si
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-top-grid">
        
        {/* Column 1: Newsletter & Branding */}
        <div className="footer-col brand-col">
          <h4 className="footer-heading">Subscribe to our Newsletter</h4>
          <p className="footer-subtext">Get the latest updates on offers and new products</p>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          
          <div className="footer-logo">
            <span className="logo-tvr">TVR</span> 
            <span className="logo-supermart">SUPERMART</span>
          </div>
          <p className="footer-subtext">Your one-stop destination for all your daily needs.</p>
          
          <div className="social-icons">
            <a href="#" className="social-icon fb"><FaFacebookF /></a>
            <a href="#" className="social-icon insta"><FaInstagram /></a>
            <a href="#" className="social-icon twitter"><FaTwitter /></a>
            <a href="#" className="social-icon yt"><FaYoutube /></a>
          </div>
        </div>

        {/* Column 2: Categories */}
        <div className="footer-col">
          <h4 className="footer-heading">Categories</h4>
          <ul className="footer-links">
            <li><a href="#">Vegetables</a></li>
            <li><a href="#">Fruits</a></li>
            <li><a href="#">Dairy Products</a></li>
            <li><a href="#">Snacks</a></li>
            <li><a href="#">Beverages</a></li>
            <li><a href="#">View All</a></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Column 4: Customer Service */}
        <div className="footer-col">
          <h4 className="footer-heading">Customer Service</h4>
          <ul className="footer-links">
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Shipping Policy</a></li>
          </ul>
        </div>

        {/* Column 5: Contact Us */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt className="c-icon"/>
              <span>123, TVR Supermart,<br/>Avinashi Road, Coimbatore - 641018</span>
            </li>
            <li>
              <FaPhoneAlt className="c-icon"/>
              <span>+91 98765 43210</span>
            </li>
            <li>
              <FaEnvelope className="c-icon"/>
              <span>support@tvrsupermart.com</span>
            </li>
            <li>
              <FaGlobe className="c-icon"/>
              <span>www.tvrsupermart.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom Line */}
      <div className="footer-bottom">
        <div className="copyright">
          © 2024 TVR Supermart. All Rights Reserved.
        </div>
        <div className="payment-icons">
           <FaCcVisa className="pay-icon" />
           <FaCcMastercard className="pay-icon" />
           <SiPaytm className="pay-icon" />
           <FaCcPaypal className="pay-icon" />
           <SiGooglepay className="pay-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;