"use client";
import { createContext, useState } from "react";

// Created a new context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Remove from cart
  const removeToCart = (productID) => {
    setCart((prev) => prev.filter((item) => item.id !== productID));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
