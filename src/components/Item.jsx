import { Link } from "react-router";

export default function Item({ item }) {
  return (
    <Link
      to={`/products/${item.id}`}
      className="w-full sm:w-72"
    >
      <div className="bg-pink-50 p-4 rounded-2xl shadow-sm hover:shadow-md transition duration-200 border border-pink-100">
        <div className="relative w-full h-64 overflow-hidden rounded-xl mb-3">
          <img
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            src={item.images[0]}
            alt={item.title}
          />
        </div>
        <p className="truncate font-semibold text-pink-800 text-base">{item.title}</p>
        <p className="text-pink-600 font-bold text-lg mt-1">${item.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}