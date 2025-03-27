import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4 mt-4">
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
        disabled={count === stock}
      >
        +
      </button>
    </div>
  );
};

export default ItemCount;
