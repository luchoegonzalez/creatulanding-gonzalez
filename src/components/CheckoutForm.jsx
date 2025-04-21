/* eslint-disable react/prop-types */
export default function CheckoutForm({ cart, totalPrice, handleSubmit, navigate }) {
  if (cart.length === 0) {
    return (
      <div className="max-w-xl mx-auto p-6 bg-pink-50 rounded-2xl shadow-md text-center">
        <h2 className="text-2xl font-bold text-pink-700 mb-2">Ups 😅</h2>
        <p className="text-pink-600">Tu carrito está vacío, no podés finalizar la compra.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-pink-500 text-white font-semibold py-2 px-4 rounded-xl hover:bg-pink-600 transition hover:cursor-pointer"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* 🛒 Resumen del carrito */}
      <div className="bg-pink-50 p-5 rounded-2xl shadow-md mb-6">
        <h2 className="text-xl font-bold text-pink-700 mb-4">
          Resumen del carrito
        </h2>
        <ul className="flex flex-col gap-3">
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b border-pink-200 pb-2"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded-lg border border-pink-300"
                />
                <div>
                  <p className="text-pink-800 font-semibold">{item.title}</p>
                  <p className="text-sm text-pink-600">
                    Cant: {item.quantity}
                  </p>
                </div>
              </div>
              <p className="text-pink-700 font-medium">
                ${item.price * item.quantity}
              </p>
            </li>
          ))}
        </ul>
        <div className="text-right mt-4 font-bold text-pink-800 text-lg">
          Total: ${totalPrice.toFixed(2)}
        </div>
      </div>

      {/* 📋 Formulario de datos */}
      <form
        onSubmit={handleSubmit}
        className="bg-pink-50 p-6 rounded-2xl shadow-md flex flex-col gap-5"
      >
        <h2 className="text-2xl font-bold text-pink-700">Datos de la compra</h2>

        <div className="flex flex-col">
          <label className="text-pink-600 mb-1 font-medium">Nombre completo</label>
          <input
            type="text"
            name="name"
            required
            className="p-3 rounded-lg border border-pink-300 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Tu nombre"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-pink-600 mb-1 font-medium">Correo electrónico</label>
          <input
            type="email"
            name="email"
            required
            className="p-3 rounded-lg border border-pink-300 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="tucorreo@ejemplo.com"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-pink-600 mb-1 font-medium">Teléfono</label>
          <input
            type="tel"
            name="phone"
            required
            className="p-3 rounded-lg border border-pink-300 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="011 1234 5678"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-pink-600 mb-1 font-medium">Dirección</label>
          <input
            type="text"
            name="address"
            required
            className="p-3 rounded-lg border border-pink-300 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Calle Falsa 123"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-pink-500 text-white font-semibold py-3 rounded-xl hover:bg-pink-600 transition hover:cursor-pointer"
        >
          Confirmar compra
        </button>
      </form>
    </div>
  );
}