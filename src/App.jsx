import { useState } from "react";
import Canva from "./app/components/Canva/Canva";
import ProgressBar from "./app/components/ProgressBar/ProgressBar";

function App() {
  const [currentColor, setCurrentColor] = useState("#4287f5");
  return (
    <div className="App">
      <Canva currentColor={currentColor} setCurrentColor={setCurrentColor} />
      <ProgressBar />
    </div>
  );
}

export default App;
