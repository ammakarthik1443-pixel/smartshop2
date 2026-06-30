import React from 'react';
import { useCart } from '../../context/CartContext';
import './Wishlist.css';

const Wishlist = () => {
  const { addToCart } = useCart();

  const wishlistProducts = [
    {
      id: 101,
      name: 'Aavin Fresh Milk 1L',
      category: 'Dairy',
      price: 55,
      image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 102,
      name: 'Lay’s Classic Potato Chips',
      category: 'Snacks',
      price: 45,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 103,
      name: 'Tropicana Orange Juice',
      category: 'Beverages',
      price: 89,
      image: 'https://images.unsplash.com/photo-1510626176961-4b358e9df9a3?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 104,
      name: 'Aashirvaad Whole Wheat Atta 5kg',
      category: 'Rice & Grains',
      price: 260,
      image: 'https://images.unsplash.com/photo-1567598508487-e1f17d49c9e4?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 105,
      name: 'Colgate Toothpaste 100g',
      category: 'Personal Care',
      price: 85,
      image: 'https://images.unsplash.com/photo-1548946526-f69e2424cf45?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 106,
      name: 'Harpic Toilet Cleaner',
      category: 'Household',
      price: 95,
      image: 'https://images.unsplash.com/photo-1608902633507-3e7e67e37751?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 107,
      name: 'Pedigree Dog Food 1kg',
      category: 'Pet Food',
      price: 180,
      image: 'https://images.unsplash.com/photo-1593112144303-de54120f8ce5?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <div>
          <h1>Your Wishlist</h1>
          <p>Tap any product to add it directly to your cart.</p>
        </div>
      </div>

      <div className="wishlist-grid">
        {wishlistProducts.map((product) => (
          <div className="wishlist-card" key={product.id}>
            <div className="wishlist-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="wishlist-content">
              <span className="wishlist-category">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="wishlist-price">₹{product.price}</p>
              <button className="wishlist-add-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;