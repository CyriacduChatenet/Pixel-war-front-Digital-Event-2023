import { useEffect, useState } from "react";

const HudInfo = ({ totalTimeInSec, x, y }) => {
  const [time, setTime] = useState(totalTimeInSec);

  const hours = Math.floor(time / 3600);
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
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  }, [time]);

  return (
    <div className="c-hud-info">
      <div className="c-hud-info__container">
        <div className="c-hud-info__left"></div>
        <p>
          Coordonées : {x}, {y}
        </p>
        <div className="c-hud-info__right"></div>
      </div>
      <div className="c-hud-info__container">
        <div className="c-hud-info__left"></div>
        <p>Temps: {renderTime()}</p>
        <div className="c-hud-info__right"></div>
      </div>
    </div>
  );
};

export default HudInfo;
