import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Reviews.css';

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Ravi Kumar",
      location: "Coimbatore",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
      text: "Great products and super fast delivery! TVR Supermart is now my go-to store.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Coimbatore",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      text: "Best quality products at the best prices. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Karthik R.",
      location: "Coimbatore",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80",
      text: "The delivery is always on time and the support team is excellent.",
      rating: 5
    }
  ];

  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h3>What Our Customers Say</h3>
        <button className="view-all-btn-outline">View All</button>
      </div>

      <div className="reviews-grid">
        {reviewsData.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="stars">
              {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
            </div>
            <p className="review-text">"{review.text}"</p>
            <div className="customer-info">
              <img src={review.image} alt={review.name} className="customer-img" />
              <div className="customer-details">
                <h5 className="customer-name">{review.name}</h5>
                <span className="customer-location">{review.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default Reviews;