import { SliderPicker } from "react-color";

const ColorBar = ({ currentColor, setCurrentColor }) => {
 const handleChangeComplete = (color) => {
    setCurrentColor(color.hex);
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
