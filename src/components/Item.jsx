import { Link } from "react-router"

export default function Item({item}) {
  return (
    <Link to={`/products/${item.id}`} className="w-full sm:w-80">
      <div className="bg-gray-100 p-4 rounded-lg flex flex-col gap-1 hover:shadow-md transition duration-200">
        <img className="h-64 object-cover rounded-md" src={item.image} alt={item.title} />
        <p className="truncate font-semibold text-gray-800">{item.title}</p>
        <div className="flex items-center">
          <span className="text-yellow-500 text-md">★ {item.rating.rate}</span>
          <span className="text-gray-500 text-sm ml-2">({item.rating.count} reviews)</span>
        </div>
        <p className="text-gray-900 font-bold text-xl">${item.price.toFixed(2)}</p>
      </div>
    </Link>
  )
}