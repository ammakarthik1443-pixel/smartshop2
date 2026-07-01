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
    { id: 6, name: "Rice & Grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw8EemHa-SA6Ei6zhJuSuBWryVachX18nMxvDjemM0yg&s=10" },
    { id: 7, name: "Personal Care", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=300&q=80" },
    { id: 8, name: "Household", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrqxe5OFyAkEbbN0lOTkO_v1FLhoZXU8rGuQKfVxPJg&s=10" },
    { id: 9, name: "Pet Food", image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=300&q=80" },
    { id: 10, name: "Outdoors & Toys", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0ckAs0_MllRvZx2QURQQGWUiKMbFwh5vvRIrLPuTOYrcXUMRF0V4yAw&s=10" },
    { id: 11, name: "Baby Care", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6fqXyXn1NfjZOPsJuwEjD3IRWPwpqqIup8k6k3hIkQ&s=10" },
    { id: 12, name: "Plastic Goods", image: "https://img.magnific.com/premium-photo/bright-plastic-tableware-isolated-white-background_250132-7326.jpg?semt=ais_hybrid&w=740&q=80" },
    { id: 13, name: "Pulses & Cereals", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sc71JrxLaQaW9-OnNPDKxWOQh4rLS_llm_yeN6IVNdRNp3vN74HTrmY&s=10" },
    { id: 14, name: "Birthday Celebration Products", image: "https://static.vecteezy.com/system/resources/thumbnails/045/597/468/small/birthday-decoration-background-and-birthday-greetings-photo.jpg" }
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