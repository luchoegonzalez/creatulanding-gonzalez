/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ImageGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-full">
      {/* Miniaturas */}
      {images.length > 1 && (
        <div className="flex md:flex-col gap-3 md:mr-4">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-20 h-20 rounded-xl border-2 ${
                index === activeIndex
                  ? "border-pink-500"
                  : "border-pink-200"
              } overflow-hidden transition hover:scale-105`}
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

      {/* Imagen Principal */}
      <div className="w-80 h-[400px] border border-pink-200 rounded-2xl shadow-sm overflow-hidden">
        <img
          src={images[activeIndex]}
          alt={`Producto ${activeIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}