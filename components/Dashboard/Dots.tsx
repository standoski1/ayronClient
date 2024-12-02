import React from "react";

const ScoreDots = ({ score }: { score: number }) => {
  // Calculate the number of blue bars based on the score
  const totalBars = 5; // Total number of bars
  const blueBars = Math.round((score / 100) * totalBars); // Calculate how many should be blue

  return (
    <div className="flex gap-1">
      {[...Array(totalBars)].map((_, index) => (
        <div
          key={index}
          className={`h-2 w-2 rounded-full mt-2 ${
            index < blueBars ? "bg-[#000]" : "bg-[#ccc]"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default ScoreDots;
