/* eslint-disable react/prop-types */
import { CartContext } from "./CartContext";

function CartProvider ({children}){
  return (
    <CartContext.Provider value={0}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;