import { useEffect, useMemo, useRef, useState } from "react";
import { SliderPicker } from "react-color";
import useTimer from "../../../setup/context/timerContext";
import arrowIcon from "../../assets/images/arrow.png";

const ColorBar = ({ currentColor, setCurrentColor }) => {
  const [time, setTime] = useState(10);
  const { newPixelIsCreated, setNewPixelIsCreated } = useTimer();

  const colorList = [
    "#FFEBEE",
    "#FCE4EC",
    "#F3E5F5",
    "#B39DDB",
    "#9FA8DA",
    "#90CAF9",
    "#81D4FA",
    "#80DEEA",
    "#4DB6AC",
    "#66BB6A",
    "#9CCC65",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#A1887F",
    "#E0E0E0",
    "#90A4AE",
    "#000",
    "#FFEBEE",
    "#FCE4EC",
    "#F3E5F5",
    "#B39DDB",
    "#9FA8DA",
    "#90CAF9",
    "#81D4FA",
    "#80DEEA",
    "#4DB6AC",
    "#66BB6A",
    "#9CCC65",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#A1887F",
    "#E0E0E0",
    "#90A4AE",
    "#000",
  ];

  const colorListRef = useRef(null);
  const arrowRef = useRef(null);
  let isRotate = false;

  const handleColorListNavigation = () => {
    if (isRotate == false) {
      colorListRef.current.scrollLeft += colorListRef.current.offsetWidth / 10;
      if (
        colorListRef.current.scrollLeft >
        colorListRef.current.offsetWidth * 0.9
      ) {
        arrowRef.current.classList.add("rotate");
        isRotate = true;
      }
      return;
    }
    if (isRotate == true) {
      colorListRef.current.scrollLeft -= colorListRef.current.offsetWidth / 10;
      if (
        colorListRef.current.scrollLeft <
        colorListRef.current.offsetWidth * 0.1
      ) {
        arrowRef.current.classList.remove("rotate");
        isRotate = false;
      }
      return;
    }
  };

  const handleChangeComplete = (event) => {
    for (let i = 1; i < colorListRef.current.childElementCount; i++) {
      colorListRef.current.children[i].innerHTML = ``;
    }
    event.target.innerHTML = `<i class="fa-solid fa-check"></i>`;
    setCurrentColor(event.target.style.backgroundColor);
  };

  let minutes = Math.floor((time % 3600) / 60);
  let seconds = Math.floor(time % 60);

  const renderTime = () => {
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return `${minutes} : ${seconds}`;
  };

  useMemo(() => {
    setTimeout(() => {
      setTime(time - 1);
      if(time === 0) {
        setNewPixelIsCreated(false);
      }
    }, 1000);
  }, [newPixelIsCreated, time, setNewPixelIsCreated])

  return (
    <div
      className={"colorBar"}
      style={newPixelIsCreated ? { width: "16rem", height: "4rem" } : null}
    >
      <div className="color-list" ref={colorListRef}>
        {newPixelIsCreated === false ? (
          <>
            {colorList.map((color, index) => (
              <div
                key={index}
                onClick={(event) => handleChangeComplete(event)}
                style={{ backgroundColor: color }}
                className="color-item"
              ></div>
            ))}
            <img
              ref={arrowRef}
              src={arrowIcon}
              className="arrow-icon"
              onClick={handleColorListNavigation}
            />
          </>
        ) : <p>{renderTime()}</p>}
      </div>
    </div>
  );
};

export default ColorBar;
