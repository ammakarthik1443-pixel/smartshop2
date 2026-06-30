import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        TVR <span>SUPERMART</span>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
        />
        <button>🔍</button>
      </div>

      <div className="header-icons">
        <span>❤️ Wishlist</span>
        <span>🛒 Cart</span>
        <span>👤 Login</span>
      </div>
    </header>
  );
}

export default Header;