import { Link, useLocation } from "react-router";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function CategoryList({ categories, toggleMenu }) {
  const location = useLocation();
  
  return (
    <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-1">
      {categories.map((category) => {
        const isActive = location.pathname.includes(`/category/${encodeURIComponent(category)}`);

        return (
          <li key={category}>
            <Link
              onClick={toggleMenu}
              to={`/category/${category}`}
              className={`block px-4 py-2 rounded-md transition-colors duration-200 
                ${isActive ? "bg-pink-500 text-white" : "hover:bg-pink-300"}`}
            >
              {capitalizeFirstLetter(category)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}