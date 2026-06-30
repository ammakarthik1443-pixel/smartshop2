import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="page-container fade-in-up">
      <div className="about-wrapper">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80" alt="Supermarket" />
        </div>
        <div className="about-content">
          <h1>About TVR Supermart</h1>
          <p className="subtitle">Your Trusted Neighborhood Grocery Store</p>
          <div className="text-blocks">
            <p>Founded with a mission to bring fresh, high-quality groceries directly to your doorstep, TVR Supermart has grown to become the most trusted name in the community.</p>
            <p>We source our vegetables directly from local farmers and ensure that every product on our shelves meets the highest quality standards. Experience seamless shopping, best prices, and secure deliveries with us.</p>
          </div>
          <div className="stats-row">
            <div className="stat-box"><h2>10k+</h2><span>Happy Customers</span></div>
            <div className="stat-box"><h2>500+</h2><span>Daily Orders</span></div>
            <div className="stat-box"><h2>100%</h2><span>Fresh Assured</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;