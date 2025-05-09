import { Link, useLocation } from "react-router";

export default function CategoryList({ categories, toggleMenu }) {
  const location = useLocation();
  
  return (
    <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-1">
      {categories.map((category) => {
        const isActive = location.pathname.includes(`/category/${encodeURIComponent(category.id)}`);

        return (
          <li key={category.id}>
            <Link
              onClick={toggleMenu}
              to={`/category/${category.id}`}
              className={`block px-4 py-2 rounded-md transition-colors duration-200 
                ${isActive ? "bg-pink-500 text-white" : "hover:bg-pink-300"}`}
            >
              {category.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}