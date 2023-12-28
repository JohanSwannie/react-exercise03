import React from "react";

const Color = ({ hex, description }) => {
  return (
    <div className="color-line" style={{ backgroundColor: hex }}>
      <h2>{description}</h2>
    </div>
  );
};

export default Color;
