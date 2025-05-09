/* eslint-disable react/prop-types */
import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, quantity) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const getQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getItemQuantity = (id) => {
    const item = cart.find(prod => prod.id === id);
    return item ? item.quantity : 0;
  };

  const clearCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ addItem, removeItem, getQuantity, getItemQuantity, clearCart, cart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;