import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

export default function Recipe() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function fetchRecipes() {
      try {
        const recipe = await fetch("https://dummyjson.com/recipe");
        const result = await recipe.json();
        console.log(result);
        setRecipes(result.recipes);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchRecipes();
  }, []);

  return (
    <main className="p-4">
      <p className="font-semibold text-[20px] mb-3">Our recipes</p>
      <div>
        {recipes.map((r, i) => (
          <FoodCard recipe={r} key={i} />
        ))}
      </div>
    </main>
  );
}
