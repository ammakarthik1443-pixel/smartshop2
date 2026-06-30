import React from 'react';
import './Offers.css';

const Offers = () => {
  const offers = [
    { id: 1, title: "Super Saver Pack", desc: "Buy 2 Get 1 Free on all Biscuits", discount: "33% OFF", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400" },
    { id: 2, title: "Weekend Veggie Deal", desc: "Fresh vegetables combo pack", discount: "Flat ₹50 OFF", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400" },
    { id: 3, title: "Dairy Bonanza", desc: "Special discount on Cheese & Butter", discount: "20% OFF", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400" },
  ];

  return (
    <div className="page-container fade-in-up">
      <div className="offers-hero pulse-bg">
        <h1>🔥 Hot Deals of the Day</h1>
        <p>Grab them before they are gone!</p>
      </div>

      <div className="offers-grid">
        {offers.map((offer, index) => (
          <div className="offer-card" key={offer.id} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="offer-badge">{offer.discount}</div>
            <img src={offer.image} alt={offer.title} />
            <div className="offer-details">
              <h3>{offer.title}</h3>
              <p>{offer.desc}</p>
              <button className="claim-btn">Claim Offer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;