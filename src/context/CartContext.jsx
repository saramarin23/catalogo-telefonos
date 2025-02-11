/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, selectedColor, selectedStorage) => {
    setCartItems((prev) => [
      ...prev,
      {
        uniqueKey: `${product.id}-${selectedStorage.capacity}-${selectedColor.hexCode}`,
        name: product.name,
        id: product.id,
        storage: selectedStorage,
        color: selectedColor,
      },
    ]);
  };

  const removeFromCart = (product) => {
    setCartItems((prev) => {
      const updatedCart = [...prev];
      const index = updatedCart.findIndex(
        (item) => item.uniqueKey === product.uniqueKey,
      );

      if (index !== -1) {
        updatedCart.splice(index, 1);
      }

      return updatedCart;
    });
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
