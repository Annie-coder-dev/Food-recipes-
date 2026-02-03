import { TextAlignEnd } from "lucide-react";
import React, { useState } from "react";
import SideBar from "./SideBar";
import { Link } from "react-router";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className=" px-5 text-center py-4  shadow-md flex items-center justify-between sticky top-0 bg-white">
      <h1 className="heading text-3xl font-bold text-red-600">
        My Food Recipes
      </h1>
      <TextAlignEnd
        onClick={() => setOpenNav(!openNav)}
        className="md:hidden"
      />
      <SideBar isNavOpen={openNav} />
      {/* Desktop nav */}
      <nav className="hidden md:block">
        <ul className="gap-5 flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Recipes</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
