import React from 'react';
import { Link } from 'react-router-dom';
import './PopularCategories.css';

const PopularCategories = () => {
  const popularCats = [
    { id: 1, name: "Vegetables", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=150&q=80" },
    { id: 2, name: "Fruits", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=150&q=80" },
    { id: 3, name: "Dairy", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=150&q=80" },
    { id: 4, name: "Snacks", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=150&q=80" },
    { id: 5, name: "Beverages", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=150&q=80" }
  ];

  return (
    <div className="popular-categories-section">
      <h3 className="section-title">Popular Categories</h3>
      <div className="popular-pill-container">
        {popularCats.map((cat) => {
          const routeName = cat.name.toLowerCase().replace(/\s+/g, '-');
          return (
            <Link to={`/category/${routeName}`} key={cat.id} className="popular-pill">
              <div className="pill-img-box"><img src={cat.image} alt={cat.name} /></div>
              <span className="pill-text">{cat.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategories;