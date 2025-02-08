/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, selectedColor, selectedStorage) => {
    setCartItems((prev) => [
      ...prev,
      {
        name: product.name,
        id: product.id,
        storage: selectedStorage,
        color: selectedColor,
      },
    ]);
  };
  const removeFromCart = (product) => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
