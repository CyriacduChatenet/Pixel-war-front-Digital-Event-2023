import { useState } from "react";
import Canva from "./app/components/Canva/Canva";

function App() {
  const [currentColor, setCurrentColor] = useState("#4287f5");
  return (
    <div className="App">
      <Canva currentColor={currentColor} setCurrentColor={setCurrentColor} />
    </div>
  );
}

export default App;
