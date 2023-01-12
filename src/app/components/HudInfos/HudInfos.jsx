import { useMemo } from "react";
import { useEffect, useState } from "react";

const HudInfo = ({ x, y, hide }) => {
  const [time, setTime] = useState(108000000);

  const startDateEvent = new Date('2023-01-13T13:00:00');
  const endDateEvent = new Date('2023-01-13T16:00:00');
  const dateNow = new Date()

  const handleDefineTimer = () => {
    const difference = endDateEvent.getTime() - startDateEvent.getTime();
    setTime(difference);
  };

  const hours = Math.floor(time/ 1000 / 3600);
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
    if(dateNow >= startDateEvent && dateNow <= endDateEvent) {
      handleDefineTimer();
    } else {
      return setTime(10800000);
    }
}, [])

  useEffect(() => {
    setTimeout(() => {
      if(dateNow >= startDateEvent && dateNow <= endDateEvent) {
        return setTime(time - 1);
      } else {
        return setTime(10800000);
      }
    }, 1000);
  }, [time]);

  return (
    <div className={!hide ? "c-hud-info" : "hide"}> 
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
