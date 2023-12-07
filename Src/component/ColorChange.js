import React, { useState } from 'react';


const ColorChange=()=> {
  const [boxColor, setBoxColor] = useState('#3498db');

  const getRandomColor = () => {
    const colors = ['#3498db', '#e74c3c', '#27ae60', '#f1c40f', '#9b59b6', '#e67e22'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    
    return colors[randomIndex];
  };

  const changeColor = () => {
    const randomColor = getRandomColor();
    setBoxColor(randomColor);
  };

  return (
    <div className="flex justify-items-center">
      <div
        className="box h-20 w-16 bg-pink-200 border-double border-2 border-black p-3 m-5"
        style={{ backgroundColor: boxColor }}
        onClick={changeColor}
      ></div>
    </div>
  );
}

export default ColorChange;
