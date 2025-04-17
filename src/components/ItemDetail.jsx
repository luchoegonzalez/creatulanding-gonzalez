/* eslint-disable react/prop-types */
import ItemCount from "./ItemCount";
import ItemGallery from "./ItemGallery";

export default function ItemDetail({ item }) {
  return (
    <div className="max-w-5xl mx-auto p-6 rounded-3xl bg-pink-50 shadow-md flex flex-col md:flex-row items-center md:items-start gap-10 mt-8">
      <div className="w-full md:w-1/2 flex justify-center">
        <ItemGallery images={item.images} />
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-pink-800">{item.title}</h1>
        <p className="text-pink-500 mt-1 uppercase tracking-wide text-sm">{item.category}</p>
        <p className="text-pink-700 mt-4 leading-relaxed">{item.description}</p>
        <p className="text-pink-600 text-3xl font-bold mt-6">${item.price.toFixed(2)}</p>

        <div className="mt-5">
          <ItemCount item={item} />
        </div>
      </div>
    </div>
  );
}