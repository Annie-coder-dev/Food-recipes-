import { Link } from "react-router";

export default function SideBar({ isNavOpen }) {


  return (
    // Sidebar for mobile devices
    <aside
      className={`fixed bg-red-500 top-0 left-0 bottom-0 w-1/2 max-w-75 ${isNavOpen ? "translate-x-0" : "-translate-x-full"} duration-700 md:hidden`}
    >
      <ul>
        
        <li className="p-4 text-white text-2xl" onClick={isNavOpen ? "translate-x-0" : "-translate-x-full"}>
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 text-white text-2xl" onClick={isNavOpen ? "translate-x-0" : "-translate-x-full"}>
          <Link to="/product">Recipes</Link>
        </li>
        <li className="p-4 text-white text-2xl" onClick={isNavOpen ? "translate-x-0" : "-translate-x-full"}>
          <Link to="/category">Category</Link>
        </li>
        <li className="p-4 text-white text-2xl" onClick={isNavOpen ? "translate-x-0" : "-translate-x-full"}>
          <Link to="/support">Support</Link>
        </li>
      </ul>
    </aside>
  );
}
