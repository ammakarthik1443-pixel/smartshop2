import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Cart from '../pages/Cart/Cart';
import Wishlist from '../pages/Wishlist/Wishlist';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Offers from '../pages/Offers/Offers';
import CategoryProducts from '../pages/CategoryProducts/CategoryProducts.jsx';

// Indha 2 pudhu imports kandipa irukkanum
import Products from '../pages/Products/Products.jsx';
import AllCategories from '../pages/Categories/AllCategories.jsx';
import OfferProducts from "../pages/OfferProducts/OfferProducts.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* Pudhusa add panna Routes */}
      <Route path="/products" element={<Products />} />
      <Route path="/categories" element={<AllCategories />} />
      <Route path="/offer-products" element={<OfferProducts />} />
      
      <Route path="/category/:categoryName" element={<CategoryProducts />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;