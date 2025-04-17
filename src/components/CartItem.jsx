/* eslint-disable react/prop-types */
import { CloseIcon } from "./Icons";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="relative flex items-center justify-between bg-pink-100 p-4 rounded-xl shadow-sm mb-3">
      <button
        onClick={() => removeItem(item.id)}
        className="absolute left-2 text-pink-500 hover:text-pink-700 transition hover:cursor-pointer"
        title="Eliminar del carrito"
      >
        <CloseIcon />
      </button>

      <div className="flex items-center gap-4 ml-8"> {/* Dejamos espacio a la izquierda para el botón */}
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-16 h-16 object-cover rounded-lg border border-pink-300"
        />
        <div>
          <h3 className="text-lg font-semibold text-pink-700">{item.title}</h3>
          <p className="text-sm text-pink-600">Cantidad: {item.quantity}</p>
        </div>
      </div>

      <div className="text-pink-800 font-bold">
        ${item.price * item.quantity}
      </div>
    </div>
  );
};

export default CartItem;