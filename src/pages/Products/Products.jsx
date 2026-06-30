import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Products.css';

const Products = () => {
  const { addToCart, decreaseQuantity, getQuantity } = useCart();
  const navigate = useNavigate();

  // Full product list in category order
  const productsList = [
    // Dairy
    { id: 1, name: 'Aavin Fresh Milk 1L', category: 'Dairy', price: 55, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Amul Paneer 200g', category: 'Dairy', price: 115, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Britannia Cheese Slices', category: 'Dairy', price: 95, image: 'https://www.bbassets.com/media/uploads/p/l/104956_18-britannia-cheese-slice.jpg' },
    { id: 4, name: 'Mother Dairy Butter 100g', category: 'Dairy', price: 70, image: 'https://www.bbassets.com/media/uploads/p/l/30007663_4-mother-dairy-butter.jpg' },
    // Snacks
    { id: 5, name: 'Lay’s Classic Potato Chips', category: 'Snacks', price: 45, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBOz3lmV8u0zk791smUTFP1LVSbVFz2gNTjJNMs4ONQ&s' },
    { id: 6, name: 'Haldiram’s Aloo Bhujia', category: 'Snacks', price: 80, image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=400&q=80' },
    { id: 7, name: 'Britannia NutriChoice Biscuits', category: 'Snacks', price: 65, image: 'https://www.bbassets.com/media/uploads/p/xl/40086304_15-britannia-nutrichoice-digestive-zero-high-fibre-biscuits.jpg' },
    { id: 8, name: 'Quaker Oats Bars', category: 'Snacks', price: 120, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0L2PC8wLFm9msGJbnZHxdlZjcAWNxMu2yJPCmWfuZThMWUBimlMCxgUk0&s=10' },
    // Beverages
    { id: 9, name: 'Coca-Cola Can 330ml', category: 'Beverages', price: 50, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80' },
    { id: 10, name: 'Tropicana Orange Juice', category: 'Beverages', price: 89, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=400&q=80' },
    { id: 11, name: 'Bisleri Mineral Water 1L', category: 'Beverages', price: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQK1EhYjK9ENCvc8V3km7MTAL08f7WJxZ07Zz8iRgCg&s=10' },
    // Rice & Grains
    { id: 13, name: 'Daawat Basmati Rice 5kg', category: 'Rice & Grains', price: 345, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80' },
    { id: 14, name: 'Aashirvaad Whole Wheat Atta 5kg', category: 'Rice & Grains', price: 260, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80' }
  ];

  return (
    <div className="products-header-section">
  <h1 className="products-title">TVR Supermart Products</h1>
      <div className="animated-product-grid">
        {productsList.map(product => (
          <div className="premium-card" key={product.id}>
            <div className="card-image-box">
              <img src={product.image} alt={product.name} />
              <button className="quick-cart-btn" onClick={() => {addToCart(product); navigate('/cart');}}>
                <FaShoppingCart />
              </button>
            </div>
            <div className="card-info">
              <h3>{product.name}</h3>
              <p style={{ fontSize: '0.8rem', color: '#666' }}>{product.category}</p>
              
<div className="card-footer">
  <span>₹{product.price}</span>
  
  {getQuantity(product.id) > 0 ? (
     <div className="quantity-controls">
       <button onClick={() => decreaseQuantity(product.id)}>-</button>
       <span>{getQuantity(product.id)}</span>
       <button onClick={() => addToCart(product)}>+</button>
     </div>
  ) : (
    
    <button className="add-btn" onClick={() => addToCart(product)}>Add</button>
  )}
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;