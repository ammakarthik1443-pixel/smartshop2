import React, { useState } from 'react';
// AiFillHeart pudhusa add pannirukken wishlist fill aagura design-kaga
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'; 
import { useCart } from '../../context/CartContext'; // Cart Context Import
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  // Cart functions
  const { addToCart, getQuantity, decreaseQuantity } = useCart();
  
  // Wishlist state (entha product id-lam wishlist-la irukku nu track panna)
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(itemId => itemId !== id)); // Remove from wishlist
    } else {
      setWishlist([...wishlist, id]); // Add to wishlist
    }
  };

  const products = [
    { id: 1, name: "Premium Basmati Rice 5kg", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80", mrp: 299, price: 199, discount: "33% OFF", rating: 4.5, reviews: 328 },
    { id: 2, name: "Fresh Toned Milk 1L", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80", mrp: 65, price: 55, discount: "15% OFF", rating: 4.8, reviews: 124 },
    { id: 3, name: "Pure Sunflower Oil 1L", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80", mrp: 165, price: 125, discount: "24% OFF", rating: 4.6, reviews: 412 },
    { id: 4, name: "Crispy Biscuits 400g", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=300&q=80", mrp: 80, price: 60, discount: "25% OFF", rating: 4.2, reviews: 89 },
    { id: 5, name: "Washing Detergent 2kg", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=300&q=80", mrp: 240, price: 182, discount: "24% OFF", rating: 4.7, reviews: 256 },
    { id: 6, name: "Mint Toothpaste 200g", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=300&q=80", mrp: 95, price: 72, discount: "24% OFF", rating: 4.4, reviews: 178 }
  ];

  return (
    <section className="featured-section">
      <div className="section-header">
        <h3>Featured Products</h3>
        <button className="view-all-outline">View All Products</button>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="discount-badge">{product.discount}</div>
            
            <div className="product-img-box">
              <img src={product.image} alt={product.name} />
            </div>
            
            <div className="product-details">
              <h4 className="product-name">{product.name}</h4>
              
              <div className="price-row">
                <span className="mrp">₹{product.mrp}</span>
                <span className="selling-price">₹{product.price}</span>
              </div>
              
              <div className="rating-row">
                <div className="stars">
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon half" />
                </div>
                <span className="review-count">({product.reviews})</span>
              </div>
              
              <div className="action-row">
                {/* Cart Logic Added */}
                {getQuantity(product.id) > 0 ? (
                  <div className="quantity-controls" style={{ flex: 1, justifyContent: 'center' }}>
                    <button onClick={() => decreaseQuantity(product.id)}>-</button>
                    <span>{getQuantity(product.id)}</span>
                    <button onClick={() => addToCart(product)}>+</button>
                  </div>
                ) : (
                  <button className="add-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                )}

                {/* Wishlist Logic Added */}
                <button 
                  className="wishlist-btn" 
                  onClick={() => toggleWishlist(product.id)}
                >
                  {wishlist.includes(product.id) ? (
                    <AiFillHeart color="#ff4d4d" size={20} />
                  ) : (
                    <AiOutlineHeart size={20} />
                  )}
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;