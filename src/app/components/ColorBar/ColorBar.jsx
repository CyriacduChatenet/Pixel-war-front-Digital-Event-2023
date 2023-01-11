import { SliderPicker } from "react-color";

const ColorBar = ({ currentColor, setCurrentColor }) => {
  const colorList = [
    "#FFEBEE",
    "#FCE4EC",
    "#F3E5F5",
    "#B39DDB",
    "#9FA8DA",
    "#90CAF9",
    "#81D4FA",
    "#80DEEA",
    "#4DB6AC",
    "#66BB6A",
    "#9CCC65",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#A1887F",
    "#E0E0E0",
    "#90A4AE",
    "#000",
  ]
 const handleChangeComplete = (color) => {
    setCurrentColor(color);
  };
  return (
    <div className="colorBar">
    {colorList.map((color, index) => (
      <div
        key={index}
        onClick={() => handleChangeComplete(color)}
        style={{ backgroundColor: color }}
        className="colorBtn"
      ></div>
    ))}
  </div>
  );
};

export default ColorBar;
