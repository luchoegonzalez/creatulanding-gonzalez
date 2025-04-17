import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { createBuyOrder } from "../firebase/db";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from "react-router";

export default function CheckoutForm() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form[0].value;
    const email = form[1].value;
    const phone = form[2].value;
    const address = form[3].value;

    const order = {
      items: cart,
      user: {name, email, phone, address},
      date: serverTimestamp()
    }

    const id = await createBuyOrder(order);

    if (id) {
      withReactContent(Swal).fire({
        title: `¡Muchas gracias por tu compra!`,
        text: `El ID de tu orden es: ${id}`,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        background: '#fce7f3',
        color: '#831843',
        iconColor: '#ec4899',
        confirmButtonColor: '#ec4899',
      });
    
      clearCart();
      navigate("/");
    } else {
      withReactContent(Swal).fire({
        title: "Ha habido un error en tu compra",
        text: "Por favor, intentá nuevamente más tarde.",
        icon: 'error',
        confirmButtonText: 'Ok',
        background: '#ffe4e6',
        color: '#881337',
        iconColor: '#f43f5e',
        confirmButtonColor: '#f43f5e',
      });
    }
    
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
