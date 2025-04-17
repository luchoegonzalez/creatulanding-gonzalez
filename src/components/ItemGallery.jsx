/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ImageGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:justify-center gap-4 w-full">

      <div className="w-80 h-[400px] border border-pink-200 rounded-2xl shadow-sm overflow-hidden">
        <img
          src={images[activeIndex]}
          alt={`Producto ${activeIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {images.length > 1 && (
        <div className="flex flex-row md:flex-col gap-3 mt-4 md:mt-0">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-20 h-20 rounded-xl border-2 ${
                index === activeIndex
                  ? "border-pink-500"
                  : "border-pink-200"
              } overflow-hidden transition hover:scale-105 hover:cursor-pointer`}
            >
              <img
                src={img}
                alt={`Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}