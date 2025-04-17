/* eslint-disable react/prop-types */
import CartItem from "./CartItem";
import { Link } from "react-router";

const Cart = ({ items }) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-pink-200">
      <h2 className="text-2xl font-bold text-pink-700 mb-4">Mi Carrito</h2>
      {items.length === 0 ? (
        <p className="text-pink-600">Tu carrito está vacío 🛒</p>
      ) : (
        <>
          <div>
            {items.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>
          <div className="border-t border-pink-300 pt-4 mt-4 flex justify-between items-center">
            <span className="text-pink-700 font-semibold">Total:</span>
            <span className="text-pink-800 text-xl font-bold">
              ${total.toFixed(2)}
            </span>
          </div>

          {/* 🚀 Botón al checkout */}
          <div className="mt-6">
            <Link
              to="/checkout"
              className="block w-full bg-pink-500 text-white text-center py-3 rounded-xl font-semibold hover:bg-pink-600 transition"
            >
              Ir al checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;