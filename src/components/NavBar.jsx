import magdaLogo from '../assets/logo.jpg';
import CartWidget from './CartWidget';

function NavBar() {

  return (
      <nav className="font-[Nunito] text-lg text-black bg-pink-200 fixed w-full top-0">
        <div className="flex justify-between items-center w-9/10 m-auto pt-2 pb-2">
          <a href="#">
            <img src={magdaLogo} alt="logo magda3d" className='w-20 rounded-full'/>
          </a>
          <ul className='flex gap-1.5 items-center'>
            <li><a className='hover:bg-pink-600 hover:text-white duration-150 p-2 rounded-xl' href="#">Figuras</a></li>
            <li><a className='hover:bg-pink-600 hover:text-white duration-150 p-2 rounded-xl' href="#">Llaveros</a></li>
            <li><a className='hover:bg-pink-600 hover:text-white duration-150 p-2 rounded-xl' href="#">Mates</a></li>
            <li><a className='hover:bg-pink-600 hover:text-white duration-150 p-2 rounded-xl' href="#">Macetas</a></li>
            <li><CartWidget/></li>
          </ul>
        </div>
      </nav>
  )
}
  
export default NavBar