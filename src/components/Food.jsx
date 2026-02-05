import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Food() {
  const [recipe, setRecipe] = useState({});
  const path = useParams();

  useEffect(() => {
    async function getSingleRecipe() {
      try {
        const res = await fetch(`https://dummyjson.com/recipes/${path.id}`);
        const data = await res.json();
        setRecipe(data);
      } catch {
        console.log("error");
      }
    }
    getSingleRecipe();
  }, []);

  return (
    <div>
      {/* Image */}
      <div className="m-4 rounded-2xl overflow-hidden object-fill">
        <img src={recipe.image} alt=""  />
      </div>

      {/* Descriptions */}
      <div>
        {/* Name */}
      <h2 className="text-2xl font-bold mb-2 px-5 ">{recipe.name}</h2>

      {/* Information */}
      <div className="px-6">

      {/*  Ingredients */}
        <h2 className="mt-4  text-2xl font-semibold">Ingredients:</h2>
        <ul className="list-decimal px-2">
        {recipe.ingredients && recipe.ingredients.map((x) => <li className="text-lg">{x}</li>)}
      </ul>

      {/* Instructions */}
      <h3 className="mt-5 text-2xl font-semibold">Instructions:</h3>
      <ul className="list-decimal px-2 mb-5">
        {recipe.instructions && recipe.instructions.map((x) => <li className="text-lg">{x}</li>)}
      </ul>
      <div className="flex justify-between">
        {/* PrepTime */}
      <span>Prep time {recipe.prepTimeMinutes}mins</span>
      {/* CookTimeMinutes */}
      <span> Cook time {recipe.cookTimeMinutes}mins</span>
      </div>
      {/* Difficulty*/}
      <div className="flex gap-4">
        <h5>Difficulty</h5>-
        <span className="">{recipe.difficulty}</span>
      </div>
      {/* Cuisine */}
      <span className="">{recipe.cuisine}</span>
      {/* Calories Per Serving */}
      <span className="block">{recipe.caloriesPerServing}</span>
      {/* Meal type */}
      <ul className="">
        <p className="text-lg">Meal Type</p>
        {recipe.mealType && recipe.mealType.map((x)=> <li>{x}</li>) }
      </ul>
      </div>
      </div>
    </div>
  );
}
