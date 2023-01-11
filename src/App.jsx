import { useState } from "react";
import Canva from "./app/components/Canva/Canva";

function App() {
  const [currentColor, setCurrentColor] = useState("#4287f5");
  const [pixelColor, setPixelColor] = useState([]);
  return (
    <div className="App">
      <Canva currentColor={currentColor} setCurrentColor={setCurrentColor} pixelColor={pixelColor} setPixelColor={setPixelColor} />
    </div>
  );
}

export default App;
