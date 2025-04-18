import { useState, useEffect } from 'react'; 
import { Link } from 'react-router';
import magdaLogo from '../assets/logo.jpg';
import CartWidget from './CartWidget';
import CategoryList from './CategoryList';
import { MenuIcon, CloseIcon } from './Icons';
import { getCategories } from '../firebase/db';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
    .then(data => setCategories(data))
  }, []);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="font-[Nunito] text-lg text-black bg-pink-200 fixed w-full top-0 shadow-md z-50">
      <div className="flex justify-between items-center w-11/12 mx-auto py-3">
        
        {/* Logo */}
        <Link to='/'>
          <img src={magdaLogo} alt="logo magda3d" className='w-20 rounded-full'/>
        </Link>

        {/* Menú en escritorio */}
        <div className="hidden md:flex md:items-center md:gap-6 md:ml-auto">
          <CategoryList toggleMenu={toggleMenu} categories={categories} />
          <CartWidget />

        </div>

        {/* Menú y carrito en móvil */}
        <div className="flex items-center gap-4 md:hidden">
          <CartWidget />
          <button 
            className="p-2 focus:outline-none" 
            onClick={toggleMenu}
          >
            <span className="text-4xl">{isOpen ? <CloseIcon /> : <MenuIcon/>}</span>
          </button>
        </div>

        {/* Menú desplegable en móviles */}
        <div className={`absolute top-26 pb-4 left-0 w-full bg-pink-200 md:hidden overflow-hidden transition-all duration-200 ease-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <CategoryList toggleMenu={toggleMenu} categories={categories} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
