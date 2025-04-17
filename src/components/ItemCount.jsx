/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";

const ItemCount = ({ item }) => {
  const { addItem, getItemQuantity } = useContext(CartContext);
  const quantityInCart = getItemQuantity(item.id);
  const availableStock = item.stock - quantityInCart;

  const [count, setCount] = useState(1);

  useEffect(() => {
    if (availableStock <= 0) {
      setCount(0);
    } else if (count === 0) {
      setCount(1);
    }
  }, [count, availableStock]);

  const increase = () => {
    if (count < availableStock) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddItem = () => {
    if (availableStock <= 0 || count <= 0) {
      toast.error(`No hay más stock disponible de ${item.title}`, {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    }

    addItem(item, count);

    toast.info(`Agregaste ${count} ${item.title} al carrito`, {
      position: "bottom-right",
      autoClose: 2000,
      theme: "colored",
    });

    setCount(availableStock - count > 0 ? 1 : 0);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={decrease}
        className="px-3 py-1 bg-gray-300 rounded-md disabled:opacity-50 hover:cursor-pointer hover:bg-gray-400 transition duration-200"
        disabled={count <= 1}
      >
        -
      </button>

      <span className="w-12 h-8 flex items-center justify-center text-lg font-semibold bg-gray-100 rounded-md">
        {count}
      </span>

      <button
        onClick={increase}
        className="px-3 py-1 bg-pink-500 text-white rounded-md disabled:opacity-50 hover:cursor-pointer hover:bg-pink-600 transition duration-200"
        disabled={count >= availableStock}
      >
        +
      </button>

      <button
        onClick={handleAddItem}
        className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 hover:cursor-pointer transition duration-200"
      >
        Agregar al carrito
      </button>

      <ToastContainer />
    </div>
  );
};

export default ItemCount;