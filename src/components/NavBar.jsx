import { useState } from 'react'; 
import { Link } from 'react-router';
import magdaLogo from '../assets/logo.jpg';
import CartWidget from './CartWidget';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-[Nunito] text-lg text-black bg-pink-200 fixed w-full top-0 shadow-md">
      <div className="flex justify-between items-center w-11/12 mx-auto py-3">
        {/* Logo */}
        <Link to='/'>
          <img src={magdaLogo} alt="logo magda3d" className='w-20 rounded-full'/>
        </Link>

        {/* Contenedor del menú en escritorio (alineado a la derecha) */}
        <div className="md:flex md:items-center md:gap-6 md:ml-auto hidden">
          <ul className="flex gap-6">
            <li><a className='p-3 hover:bg-pink-600 hover:text-white duration-150 rounded-xl' href="#">Figuras</a></li>
            <li><a className='p-3 hover:bg-pink-600 hover:text-white duration-150 rounded-xl' href="#">Llaveros</a></li>
            <li><a className='p-3 hover:bg-pink-600 hover:text-white duration-150 rounded-xl' href="#">Mates</a></li>
            <li><a className='p-3 hover:bg-pink-600 hover:text-white duration-150 rounded-xl' href="#">Macetas</a></li>
          </ul>
          <CartWidget />
        </div>

        {/* Contenedor del menú y carrito en móvil */}
        <div className="flex items-center gap-4 md:hidden">
          <CartWidget />
          <button 
            className="p-2 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="text-2xl">✖</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Menú desplegable en móviles */}
        <div className={`absolute top-16 left-0 w-full bg-pink-200 md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col items-center gap-4 py-4">
            <li><a className='p-3 hover:bg-pink-600 hover:text-white duration-150 rounded-xl' href="#">Figuras</a></li>
            <li><a className='p-3 hover:bg-pink-600 hover:text-white duration-150 rounded-xl' href="#">Llaveros</a></li>
            <li><a className='p-3 hover:bg-pink-600 hover:text-white duration-150 rounded-xl' href="#">Mates</a></li>
            <li><a className='p-3 hover:bg-pink-600 hover:text-white duration-150 rounded-xl' href="#">Macetas</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
