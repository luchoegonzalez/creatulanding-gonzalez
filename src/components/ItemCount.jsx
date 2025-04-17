/* eslint-disable react/prop-types */
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';

const ItemCount = ({ item }) => {
  const [count, setCount] = useState(1);
  const { addItem } = useContext(CartContext);

  const increase = () => {
    if (count < item.stock) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddItem = () => {
    addItem(item, count);
    setCount(1);
    toast.info(`Agregaste ${count} ${item.title} al carrito`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  }

  return (
      <div className="flex items-center space-x-2">
        <button
          onClick={decrease}
          className="px-3 py-1 bg-gray-300 rounded-md disabled:opacity-50 hover:cursor-pointer hover:bg-gray-400 transition duration-200"
          disabled={count === 1}
        >
          -
        </button>
        <span className="w-12 h-8 flex items-center justify-center text-lg font-semibold bg-gray-100 rounded-md">{count}</span>
        <button
          onClick={increase}
          className="px-3 py-1 bg-pink-500 text-white rounded-md disabled:opacity-50 hover:cursor-pointer hover:bg-pink-600 transition duration-200"
          disabled={count === item.stock}
        >
          +
        </button>

        <button onClick={handleAddItem} className=" bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 hover:cursor-pointer transition duration-200">
          Agregar al carrito
        </button>

        <ToastContainer />
      </div>
  );
};

export default ItemCount;
