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

  return <div>Food{path.id}</div>;
}
