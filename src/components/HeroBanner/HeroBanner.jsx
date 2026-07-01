import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // 1. useNavigate Import
import "./HeroBanner.css";

function HeroBanner() {
  const navigate = useNavigate(); // 2. navigate initialize
  
  const images = [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=800&q=80"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero">
      <div className="hero-content">
        <h4>Fresh & Healthy</h4>

        <h1>
          Best Quality Groceries
          <br />
          Delivered To Your Home
        </h1>

        <p>
          Get fresh vegetables, fruits, groceries and household products at the best price.
        </p>

        {/* 3. Button Click Logic Added */}
        <button 
          className="shop-btn" 
          onClick={() => navigate('/products')}
        >
          Shop Now
        </button>
      </div>

      <div className="hero-image">
        <img
          key={currentIndex} 
          src={images[currentIndex]}
          alt="Fresh Groceries"
          className="animated-hero-img"
        />
      </div>
    </section>
  );
}

export default HeroBanner;