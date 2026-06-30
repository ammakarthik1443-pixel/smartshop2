import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from './context/WishlistContext';

import "./styles/global.css";
import "./styles/responsive.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>
    <CartProvider>
    <WishlistProvider>
       <App />  {/* Unga app code */}
    </WishlistProvider>
  </CartProvider>
  </BrowserRouter>
);