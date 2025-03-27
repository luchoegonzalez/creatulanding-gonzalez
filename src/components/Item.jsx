import { Link } from "react-router"

export default function Item({item}) {
  return (
    <Link to={`/products/${item.id}`} className="w-full sm:w-80">
      <div className="bg-gray-200 p-4 rounded-lg flex flex-col gap-2">
        <img className="h-64 object-cover rounded-md" src={item.image} alt={item.title} />
        <p className="truncate font-semibold text-gray-800">{item.title}</p>
        <p className="text-gray-900 font-bold">${item.price.toFixed(2)}</p>
        <div className="flex items-center text-sm text-gray-600">
          <span className="text-yellow-500">★ {item.rating.rate}</span>
          <span className="ml-2">({item.rating.count} reviews)</span>
        </div>
      </div>
    </Link>
  )
}