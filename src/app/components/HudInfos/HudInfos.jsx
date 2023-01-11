import { useEffect, useState } from "react";

const HudInfo = ({ totalTimeInSec, x, y }) => {
  const [time, setTime] = useState(totalTimeInSec);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

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
        <p>
          Temps: {hours} : {minutes} : {seconds}
        </p>
        <div className="c-hud-info__right"></div>
      </div>
    </div>
  );
};

export default HudInfo;
