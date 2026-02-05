import React from "react";

export default function Footer() {
  return (
    <footer className="bg-red-500 px-7 py-5 mt-5 md:px-20">
      <div className="flex justify-between mb-2.5">
        <div>
        <h2 className="text-white font-semibold text-[22px] mb-1.5">Quick Links</h2>
        <ul>
          <li className="text-white">Home</li>
          <li className="text-white">Recipes</li>
          <li className="text-white">Category</li>
          <li className="text-white">Support</li>
        </ul>
      </div>
      <div>
        <h2 className="text-white font-semibold text-[22px] mb-1.5">Popular Categories</h2>
        <ul>
          <li className="text-white">Breakfast</li>
          <li className="text-white">Lunch</li>
          <li className="text-white">Dinner</li>
          <li className="text-white">Desserts</li>
        </ul>
      </div>
      </div>
      <p className="text-white text-center py-4">
        © 2026 My Food Recipes. All rights reserved.
      </p>
    </footer>
  );
}
