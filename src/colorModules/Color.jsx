import React from "react";

const Color = ({ hex, description }) => {
  const changeColor1 = () => {
    document.getElementById(`${description}`).style.color = "black";
    document.getElementById(`${description}`).style.padding = ".75rem";
    document.getElementById(`${description}`).style.border = "2px solid white";
    document.body.style.backgroundColor = hex;
  };
  const changeColor2 = () => {
    document.getElementById(`${description}`).style.color = "white";
    document.getElementById(`${description}`).style.padding = "0";
    document.getElementById(`${description}`).style.border = "none";
    document.body.style.backgroundColor = "black";
  };
  return (
    <div
      style={{ backgroundColor: hex }}
      onMouseEnter={changeColor1}
      onMouseLeave={changeColor2}
    >
      <h2 id={description}>{description}</h2>
    </div>
  );
};

export default Color;
