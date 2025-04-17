import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";

function CartContainer() {
  const {cart} = useContext(CartContext);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <Cart items={cart} />
    </div>
  );
}

export default CartContainer;