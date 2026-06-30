import React, { useState, useEffect } from 'react';
import './DealOfDay.css';

const TodayDeals = () => {
  // Timer Logic
  const [timeLeft, setTimeLeft] = useState({
    hours: 3, minutes: 15, seconds: 25, milliseconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 24; } // Reset roughly for demo
        return { hours, minutes, seconds, milliseconds: Math.floor(Math.random() * 99) };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="deals-section">
      <div className="deals-banner">
        
        {/* Left Content */}
        <div className="deals-content">
          <h2>Today's Super Deals</h2>
          <p>Grab the best offers before time runs out!</p>
          
          <div className="timer-container">
            <div className="timer-box">
              <span className="time-value">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="time-label">Hours</span>
            </div>
            <div className="timer-box">
              <span className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="time-label">Minutes</span>
            </div>
            <div className="timer-box">
              <span className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="time-label">Seconds</span>
            </div>
          </div>

          <button className="shop-now-blue-btn">Shop Now</button>
        </div>

        {/* Right Image Content */}
        <div className="deals-image-container">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80" 
            alt="Grocery Basket" 
            className="basket-img"
          />
          <div className="discount-circle">
            <span>UP TO</span>
            <strong>60%</strong>
            <span>OFF</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TodayDeals;