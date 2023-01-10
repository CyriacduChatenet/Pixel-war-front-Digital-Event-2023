import { useState } from "react";
import { SliderPicker } from "react-color";

const ColorBar = () => {
  const [currentColor, setCurrentColor] = useState("#fff");

  const handleChangeComplete = (color) => {
    setCurrentColor(color);
  };
  return (
    <SliderPicker
      color={currentColor}
      onChangeComplete={handleChangeComplete}
      className="colorBar"
    />
  );
};

export default ColorBar;
