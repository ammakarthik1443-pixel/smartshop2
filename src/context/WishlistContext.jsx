import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // Step 1: Initial load appo LocalStorage-la data irukka nu check pandrom
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('tvr_wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Step 2: Wishlist-la entha change nadanthalum (add/remove), atha udane LocalStorage-la save pandrom
  useEffect(() => {
    localStorage.setItem('tvr_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Product-a wishlist-la add panna allathu remove panna
  const toggleWishlist = (product) => {
    if (wishlist.find(item => item.id === product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id)); // Remove
    } else {
      setWishlist([...wishlist, product]); // Add
    }
  };

  // Product wishlist-la irukka nu check panna
  const isInWishlist = (id) => {
    return wishlist.some(item => item.id === id);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);