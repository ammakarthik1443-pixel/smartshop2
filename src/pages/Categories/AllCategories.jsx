import React from 'react';
import { Link } from 'react-router-dom';
import './AllCategories.css';

const AllCategories = () => {
  const categoryData = [
    { id: 1, name: "Vegetables", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=300&q=80" },
    { id: 2, name: "Fruits", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=300&q=80" },
    { id: 3, name: "Dairy", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=300&q=80" },
    { id: 4, name: "Snacks", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=300&q=80" },
    { id: 5, name: "Beverages", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80" },
    { id: 6, name: "Rice & Grains", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80" },
    { id: 7, name: "Personal Care", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=300&q=80" },
    { id: 8, name: "Household", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrqxe5OFyAkEbbN0lOTkO_v1FLhoZXU8rGuQKfVxPJg&s=10" },
    { id: 9, name: "Pet Food", image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=300&q=80" }
  ];

  return (
    <div className="page-container">
      <div className="page-header"><h1>All Categories</h1></div>
      <div className="all-categories-grid">
        {categoryData.map((cat) => (
          <Link to={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} className="cat-grid-card" key={cat.id}>
            <div className="cat-grid-image"><img src={cat.image} alt={cat.name} /></div>
            <h3>{cat.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default AllCategories;