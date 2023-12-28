import Color from "./Color";

const colors = [
  {
    hex: "#8A2BE2",
    description: "BlueViolet",
  },
  {
    hex: "#FF7F50",
    description: "Coral",
  },
  {
    hex: "#00CED1",
    description: "DarkTurquoise",
  },
  {
    hex: "#FFD700",
    description: "Gold",
  },
  {
    hex: "#008000",
    description: "Green",
  },
  {
    hex: "#800000",
    description: "Maroon",
  },
];

export default function ColorRenderer() {
  const changeColor1 = () => {
    document.querySelector(".color-block").style.color = "#000";
  };

  const changeColor2 = () => {
    document.querySelector(".color-block").style.color = "#FFF";
  };

  return (
    <div
      className="color-block"
      onMouseEnter={changeColor1}
      onMouseLeave={changeColor2}
    >
      {colors.map((color) => (
        <Color
          key={color.hex}
          hex={color.hex}
          description={color.description}
        />
      ))}
    </div>
  );
}
