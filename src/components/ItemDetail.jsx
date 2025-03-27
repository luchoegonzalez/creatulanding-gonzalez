export default function ItemDetail({item}) {
  return (
    <div className="max-w-3xl mx-auto p-6 rounded-2xl flex flex-col md:flex-row items-center md:items-start md:gap-4">
      <img
        src={item.image}
        alt={item.title}
        className="w-96 object-cover rounded-lg m-auto"
      />
      <div className="mt-6 md:mt-0 md:ml-6 w-full md:w-1/2">
        <h1 className="text-2xl font-bold text-gray-800">{item.title}</h1>
        <p className="text-gray-500 mt-2 uppercase">{item.category}</p>
        <p className="text-gray-600 mt-2">{item.description}</p>
        <p className="text-gray-900 text-xl font-semibold mt-4">${item.price.toFixed(2)}</p>
        <div className="flex items-center mt-3">
          <span className="text-yellow-500 text-lg">★ {item.rating.rate}</span>
          <span className="text-gray-500 text-sm ml-2">({item.rating.count} reviews)</span>
        </div>
        <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Comprar
        </button>
      </div>
    </div>
  )
}