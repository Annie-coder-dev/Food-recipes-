import { Search } from "lucide-react";
import React from "react";

export default function SearchBar() {
  return (
    <div className="py-6 px-6 w-full flex justify-center">
      <div className="border border-zinc-400 flex rounded overflow-hidden w-full max-w-125">
        <input
          type="text"
          placeholder="Search here..."
          className=" w-full h-9 px-4 outline-none "
        />
        <button className="px-4 bg-red-500 text-white">
          <Search />
        </button>
      </div>
    </div>
  );
}
