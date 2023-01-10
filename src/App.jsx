import { useState } from "react";
import Canva from "./app/components/Canva/Canva";

function App() {
  const [currentColor, setCurrentColor] = useState("#4287f5");
  const [pixelCoor, setPixelCoor] = useState([]);
  return (
    <div className="App">
      <Canva currentColor={currentColor} setCurrentColor={setCurrentColor} pixelCoor={pixelCoor} setPixelCoor={setPixelCoor} />
    </div>
  );
}

export default App;
