import { Link } from "react-router";

export default function CategoryList({ categories, toggleMenu }) {
  return (
    <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-1">
      {categories.map(category => (
        <li key={category.id}>
          <Link onClick={toggleMenu} className='p-3 hover:bg-pink-600 hover:text-white duration-150 rounded-xl' to={`/category/${category.id}`}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}