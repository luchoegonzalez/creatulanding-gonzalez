import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { createBuyOrder } from "../firebase/db";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from "react-router";
import CheckoutForm from "./CheckoutForm";

export default function CheckoutContainer() {
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
    <CheckoutForm
      cart={cart}
      totalPrice={totalPrice}
      handleSubmit={handleSubmit}
      navigate={navigate}
    />
  );

}
