import { Link } from "react-router"

export default function Item({item}) {
  return (
    <Link to={`/products/${item.id}`} className="w-full sm:w-80">
      <div className="bg-gray-200 p-4 rounded-lg flex flex-col gap-2">
        <img className="h-64 object-cover rounded-md" src={item.images[0]} alt={item.title} />
        <p className="truncate font-semibold text-gray-800">{item.title}</p>
        <p className="text-gray-900 font-bold">${item.price.toFixed(2)}</p>
      </div>
    </Link>
  )
}