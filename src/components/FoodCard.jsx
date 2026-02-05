import React from "react";
import { Link } from "react-router";

export default function FoodCard({ recipe }) {
  return (
    <div className="shadow-md rounded-xl overflow-hidden p-4">
      {/* Food image container */}
      <div className="h-60 w-full rounded-xl overflow-hidden">
        <img
          src={recipe.image}
          alt=""
          className="object-center h-full w-full object-cover"
        />
      </div>
      {/* food description */}
      <div className=" py-4 px-3">
        <h3 className="text-xl font-bold mb-2"> {recipe.name}</h3>
        <p className="mb-3 leading-relaxed">{recipe.instructions[1]}..</p>
        <div className="flex justify-between items-center">
          <p className="block w-fit">
            <span className=" bg-red-300 px-1.5">{recipe.rating}</span>⭐
          </p>
          <p className="flex gap-1.5">
            <span className="bg-red-50 px-3 rounded text-[13px] text-red-600">{recipe.tags[0]}</span>{" "}
            <span className="bg-red-50 px-3 rounded text-[13px] text-red-600">{recipe.tags[1]}</span>
          </p>
        </div>
        <Link to={`/${recipe.id}`} className="my-4 px-5 rounded bg-red-400 text-white py-1 hover:bg-red-500 hover:scale-110">
          View
        </Link>
      </div>
    </div>
  );
}
