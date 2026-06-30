import React from 'react';
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useCart } from '../../context/CartContext'; 
import { useWishlist } from '../../context/WishlistContext'; // Pudhusa import pandrom

function ProductCard({ product }) {
  const { addToCart, getQuantity, decreaseQuantity } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist(); // Context functions

  return (
    <div className="product-card">
      {product.discount && <div className="discount-badge">{product.discount}</div>}
      
      <div className="product-img-box">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="product-details">
        <h4 className="product-name">{product.name}</h4>
        
        <div className="price-row">
          {product.mrp && <span className="mrp">₹{product.mrp}</span>}
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
          <span className="review-count">({product.reviews || 0})</span>
        </div>
        
        <div className="action-row">
          {getQuantity(product.id) > 0 ? (
            <div className="quantity-controls" style={{ flex: 1, justifyContent: 'center' }}>
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <span>{getQuantity(product.id)}</span>
              <button onClick={() => addToCart(product)}>+</button>
            </div>
          ) : (
            <button className="add-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          )}

          {/* Dynamic Wishlist Button */}
          <button 
            className="wishlist-btn" 
            onClick={() => toggleWishlist(product)} // Full product pass pandrom
          >
            {isInWishlist(product.id) ? (
              <AiFillHeart color="#ff4d4d" size={20} />
            ) : (
              <AiOutlineHeart size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;