import React from "react";

export default function FoodCard() {
  return (
    <div>
      {/* Food image container */}
      <div>
        <img src="/jollofRice.png" alt="" />
      </div>
      {/* food description */}
      <div>
        <h3 className="text-2xl font-semibold">Lunch</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dolorum temporibus{" "}
        </p>
      </div>
      <button>View</button>
    </div>
  );
}
