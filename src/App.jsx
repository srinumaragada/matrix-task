
import React, { useState } from "react";

function App() {
  const [clickOrder, setClickOrder] = useState([]);
  const [colors, setColors] = useState(Array(9).fill("white"));
  const [isCompleted, setIsCompleted] = useState(false);

  
  const colorClassMap = {
    white: "bg-white",
    green: "bg-green-500",
    orange: "bg-orange-500",
  };

  const handleClick = (index) => {
    if (clickOrder.includes(index) || isCompleted) return;

    const newClickOrder = [...clickOrder, index];
    const newColors = [...colors];
    newColors[index] = "green";

    setClickOrder(newClickOrder);
    setColors(newColors);

    if (newClickOrder.length === 9) {
      setIsCompleted(true);
      
      newClickOrder.forEach((idx, i) => {
        console.log("Animating box index:", idx, "at delay step:", i);
        setTimeout(() => {
          setColors((prev) => {
            const updated = [...prev];
            updated[idx] = "orange";
            return updated;
          });
        }, i * 500);
      });
    }
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen bg-gray-100">
      <div className="grid grid-cols-3 gap-4">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`w-24 h-24 border rounded-2xl cursor-pointer transition-colors ${colorClassMap[color]}`}
          />
        ))}
      </div>
      <button
  className="p-4 bg-black w-24 rounded-2xl text-white font-bold hover:scale-110 transform transition-all"
  onClick={() => window.location.reload()}
>
  Reload
</button>
 </div>
  );
}

export default App;
