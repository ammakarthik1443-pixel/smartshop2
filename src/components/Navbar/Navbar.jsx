import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaTruck, 
  FaSearch, 
  FaRegHeart, 
  FaShoppingCart, 
  FaRegUser, 
  FaChevronDown 
} from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import './Navbar.css';

function Navbar() {
  return (
    <header className="new-header-container">
      
      {/* Top Green Strip */}
      <div className="top-green-bar">
        <div className="top-bar-left"></div>
        <div className="top-bar-center">
          <FaTruck className="truck-icon" />
          <span>Free Delivery on orders above ₹499</span>
        </div>
        <div className="top-bar-right">
          <Link to="/track-order">Track Order</Link>
          <span className="separator">|</span>
          <Link to="/help-center">Help Center</Link>
        </div>
      </div>

      {/* Main Floating Pill Navbar */}
      <div className="navbar-wrapper">
        <nav className="floating-pill-nav">
          
          {/* Logo Section */}
          <div className="nav-logo-section">
            <div className="logo-icon-wrapper">
              <FiShoppingCart className="logo-cart-icon" />
              <span className="logo-leaf">🌱</span>
            </div>
            <Link to="/" className="brand-text-group">
              <div className="brand-title">
                <span className="tvr">TVR</span> <span className="supermart">SUPERMART</span>
              </div>
              <span className="brand-subtitle">FAST & FRESH / GROCERY</span>
            </Link>
          </div>

          <div className="nav-vertical-divider"></div>

          {/* Navigation Links */}
          <ul className="nav-menu-links">
            <li><Link to="/" className="nav-link active">Home</Link></li>
            <li>
              <Link to="/products" className="nav-link">
                Products <FaChevronDown className="dropdown-icon" />
              </Link>
            </li>
            <li>
              <Link to="/categories" className="nav-link">
                Categories <FaChevronDown className="dropdown-icon" />
              </Link>
            </li>
            <li className="relative-link">
              <Link to="/offers" className="nav-link">Offers</Link>
              <span className="hot-badge">HOT</span>
            </li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>

          {/* Right Side Actions */}
          <div className="nav-actions-group">
            
            <div className="pill-search-box">
              <FaSearch className="search-glass-icon" />
              <input type="text" placeholder="Search products..." />
            </div>

            <Link to="/wishlist" className="icon-btn">
              <FaRegHeart />
              <span className="badge-count">0</span>
            </Link>
            
            <Link to="/cart" className="icon-btn">
              <FaShoppingCart />
              <span className="badge-count">0</span>
            </Link>

            

          </div>
        </nav>
      </div>

    </header>
  );
}

export default Navbar;