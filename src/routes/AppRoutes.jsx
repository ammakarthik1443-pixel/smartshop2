import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import AllCategories from "../pages/Categories/AllCategories.jsx";
import Offers from '../pages/Offers/Offers';
import CategoryProducts from '../pages/CategoryProducts/CategoryProducts';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/category/:categoryName" element={<CategoryProducts />} />
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/categories" element={<AllCategories />} />
      <Route path="/offers" element={<Offers />} />
    </Routes>
  );
}

export default AppRoutes;