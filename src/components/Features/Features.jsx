import React from 'react';
import { FaTruck, FaTags, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const featureData = [
    {
      id: 1,
      icon: <FaTruck />,
      title: "Fast Delivery",
      subtitle: "On Time Delivery",
      iconColor: "#28a745" // Green
    },
    {
      id: 2,
      icon: <FaTags />,
      title: "Best Prices",
      subtitle: "Unbeatable Prices",
      iconColor: "#ffc107" // Yellow/Gold
    },
    {
      id: 3,
      icon: <FaShieldAlt />,
      title: "Secure Payment",
      subtitle: "100% Secure",
      iconColor: "#007bff" // Blue
    },
    {
      id: 4,
      icon: <FaHeadset />,
      title: "24/7 Support",
      subtitle: "Always Here For You",
      iconColor: "#20c997" // Teal/Green
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        {featureData.map((feature) => (
          <div className="feature-item" key={feature.id}>
            <div className="feature-icon" style={{ color: feature.iconColor }}>
              {feature.icon}
            </div>
            <div className="feature-text">
              <h4>{feature.title}</h4>
              <p>{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;