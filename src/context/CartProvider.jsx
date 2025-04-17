/* eslint-disable react/prop-types */
import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    // Cargar desde localStorage al iniciar
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Guardar en localStorage cada vez que cambia el carrito
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

  const getQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ addItem, getQuantity, cart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;