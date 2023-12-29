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
  {
    hex: "#B8860B",
    description: "DarkGoldenRod",
  },
  {
    hex: "#9932CC",
    description: "DarkOrchid",
  },
  {
    hex: "#8FBC8F",
    description: "DarkSeaGreen",
  },
  {
    hex: "#FF1493",
    description: "DeepPink",
  },
  {
    hex: "	#00BFFF",
    description: "DeepSkyBlue",
  },
  {
    hex: "#7CFC00",
    description: "LawnGreen",
  },
  {
    hex: "#FF00FF",
    description: "Magenta",
  },
  {
    hex: "#FFA500",
    description: "Orange",
  },
  {
    hex: "#6A5ACD",
    description: "StateBlue",
  },
  {
    hex: "#EE82EE",
    description: "Violet",
  },
  {
    hex: "#FFFF00",
    description: "Yellow",
  },
  {
    hex: "#D2B48C",
    description: "Tan",
  },
];

export default function ColorRenderer() {
  return (
    <div className="color-block">
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
