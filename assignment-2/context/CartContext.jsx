"use client";
import { createContext, useState } from "react";

// Created a new context
export const CartContext = createContext();

// Created products
const products = [
  {id: 1, name: "Shoes", price: 1000},
  {id: 2, name: "Shirt", price: 500},
  {id: 3, name: "Cap", price: 200}
];

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
    <CartContext.Provider value={{ cart, addToCart, removeToCart, products }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
