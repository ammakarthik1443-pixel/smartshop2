import React from 'react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext'; // Context import
import { AiFillHeart } from 'react-icons/ai';
import './Wishlist.css';

const Wishlist = () => {
  const { addToCart, getQuantity, decreaseQuantity } = useCart();
  const { wishlist, toggleWishlist } = useWishlist(); // Context-la irunthu data vangrom

  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <h1>Your Wishlist</h1>
        <p>Tap any product to add it directly to your cart.</p>
      </div>

      <div className="wishlist-grid">
        {/* Namma context-la irukkara 'wishlist' array-a map pandrom */}
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <div className="wishlist-card" key={product.id}>
              {/* Remove button */}
              <button 
                className="remove-btn" 
                onClick={() => toggleWishlist(product)}
              >
                <AiFillHeart color="#ff4d4d" size={24} />
              </button>

              <div className="wishlist-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="wishlist-content">
                <h3>{product.name}</h3>
                <p className="wishlist-price">₹{product.price}</p>
                
                {/* Add to Cart Logic */}
                {getQuantity(product.id) > 0 ? (
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(product.id)}>-</button>
                    <span>{getQuantity(product.id)}</span>
                    <button onClick={() => addToCart(product)}>+</button>
                  </div>
                ) : (
                  <button className="add-btn" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1/-1', textAlign: 'center', marginTop: '20px' }}>
            Your wishlist is empty!
          </p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;