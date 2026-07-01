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
import logoVideo from '../../assets/logo-icon.mp4';
import { useCart } from '../../context/CartContext';

function Navbar() {
  const { cart } = useCart();

const cartCount = cart.reduce(
  (total, item) => total + item.quantity,
  0
);
  return (
    <header className="new-header-container">
      
      

      {/* Main Floating Pill Navbar */}
      <div className="navbar-wrapper">
        <nav className="floating-pill-nav">
          
          {/* Logo Section */}
          <div className="nav-logo-section">
            <div className="nav-logo-section">
             <div className="logo-icon-wrapper">
                 {/* Neenga create panna video icon */}
                 <video 
  src={logoVideo} 
  autoPlay 
  loop 
  muted 
  playsInline
  className="nav-video-logo"
/>
           </div>
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
              <li>
  <Link to="/products" className="nav-link"> {/* AppRoutes-la /products route irukkanum */}
    Products 
  </Link>
</li>
            </li>
            <li>
              <li>
  <Link to="/categories" className="nav-link"> {/* AppRoutes-la /categories route irukkanum */}
    Categories 
  </Link>
</li>
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
              
            
            
            <Link to="/cart" className="icon-btn">
  <FaShoppingCart />
  {cartCount > 0 && (
    <span className="badge-count">{cartCount}</span>
  )}
</Link>

            

          </div>
        </nav>
      </div>

    </header>
  );
}

export default Navbar;