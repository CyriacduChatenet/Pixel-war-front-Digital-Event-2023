import { useEffect, useState } from "react";
import Canva from "./app/components/Canva/Canva";
import EndGameScreen from "./app/components/EndGameScreen/EndGameScreen";

function App() {
  const [currentColor, setCurrentColor] = useState("#4287f5");
  const [pixelColor, setPixelColor] = useState([]);
  const [time, setTime] = useState(0);

  const startDateEvent = new Date("2023-01-13T13:00:00");
  const dateNow = new Date();

  const handleDefineTimer = () => {
    const difference = startDateEvent.getTime() - dateNow.getTime();
    setTime(difference);
  };

  const hours = Math.floor(time / 1000 / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = Math.floor(time % 60);

  const renderTime = () => {
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return hours + ":" + minutes + ":" + seconds;
  };

  useEffect(() => {
    handleDefineTimer();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      return setTime(time - 1);
    }, 1000);
  }, [time]);
  return (
    <div className="App">
      <EndGameScreen time={renderTime()} dateNow={dateNow.getTime()} startedAt={startDateEvent.getTime()} style={time < 0 ? {display: 'block'} : {display: 'none'}} />
      <Canva
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
        pixelColor={pixelColor}
        setPixelColor={setPixelColor}
      />
    </div>
  );
}

export default App;
