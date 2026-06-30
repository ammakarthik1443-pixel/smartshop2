import React from 'react';
import { FaStore, FaShoppingCart, FaCreditCard, FaTruck, FaChevronRight } from 'react-icons/fa';
import './OrderProcess.css';

const OrderProcess = () => {
  const steps = [
    { id: 1, icon: <FaStore />, title: "Choose Products", desc: "Select your favorite products" },
    { id: 2, icon: <FaShoppingCart />, title: "Add to Cart", desc: "Add to cart and place order" },
    { id: 3, icon: <FaCreditCard />, title: "Secure Payment", desc: "Make secure payment" },
    { id: 4, icon: <FaTruck />, title: "Fast Delivery", desc: "Get your order delivered" }
  ];

  return (
    <section className="order-process-section">
      <h3 className="section-title">How It Works?</h3>
      <div className="process-container">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="process-step">
              <div className="step-icon-wrapper">
                {step.icon}
              </div>
              <div className="step-text">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
            {/* Show arrow after each step except the last one */}
            {index !== steps.length - 1 && (
              <div className="step-arrow">
                <FaChevronRight />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default OrderProcess; 