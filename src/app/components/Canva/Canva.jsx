import { useEffect, useRef, useState } from "react";
import ColorBar from "../ColorBar/ColorBar";
import HudInfo from "../HudInfos/HudInfos";

const Canva = ({ currentColor, setCurrentColor }) => {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const gameRef = useRef(null);
  const cursorRef = useRef(null);
  //   "#FFEBEE",
  //   "#FCE4EC",
  //   "#F3E5F5",
  //   "#B39DDB",
  //   "#9FA8DA",
  //   "#90CAF9",
  //   "#81D4FA",
  //   "#80DEEA",
  //   "#4DB6AC",
  //   "#66BB6A",
  //   "#9CCC65",
  //   "#CDDC39",
  //   "#FFEB3B",
  //   "#FFC107",
  //   "#FF9800",
  //   "#FF5722",
  //   "#A1887F",
  //   "#E0E0E0",
  //   "#90A4AE",
  //   "#000",
  // ];

  let currentColorChoice = currentColor;
  const gridCellSize = 10;

  const handleAddPixel = () => {
    addPixelIntoGame();
  };

  const handleFollowMouse = (event) => {
    const game = gameRef.current;
    const cursorLeft = event.clientX - cursorRef.current.offsetWidth / 2;
    const cursorTop = event.clientY - cursorRef.current.offsetHeight / 2;
    const x = cursorRef.current.offsetLeft;
    const y = cursorRef.current.offsetTop - game.offsetTop;
    setXPosition(x / 10);
    setYPosition(y / 10);
    cursorRef.current.style.left =
      Math.floor(cursorLeft / gridCellSize) * gridCellSize + "px";
    cursorRef.current.style.top =
      Math.floor(cursorTop / gridCellSize) * gridCellSize + "px";
  };

  function createPixel(ctx, x, y, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, gridCellSize, gridCellSize);
  }

  function addPixelIntoGame() {
    const game = gameRef.current;
    const ctx = game.getContext("2d");
    const x = cursorRef.current.offsetLeft;
    const y = cursorRef.current.offsetTop - game.offsetTop;
    const payload = {
      x: x,
      y: y,
      color: currentColor,
    };
    // socket emit payload as "pixel"
    createPixel(ctx, x, y, currentColorChoice);
  }

  function drawGrids(ctx, width, height, cellWidth, cellHeight) {
    ctx.beginPath();
    ctx.strokeStyle = "#ccc";

    for (let i = 0; i < width; i++) {
      ctx.moveTo(i * cellWidth, 0);
      ctx.lineTo(i * cellWidth, height);
    }

    for (let i = 0; i < height; i++) {
      ctx.moveTo(0, i * cellHeight);
      ctx.lineTo(width, i * cellHeight);
    }
    ctx.stroke();
  }

  useEffect(() => {
    const game = gameRef.current;
    game.width = document.body.clientWidth;
    game.height = document.body.clientHeight;
    const gridCtx = game.getContext("2d");
    drawGrids(gridCtx, game.width, game.height, gridCellSize, gridCellSize);
  }, []);
  return (
    <div className="c-canvas">
      <div
        id="cursor"
        className="c-canvas__cursor"
        ref={cursorRef}
        onClick={handleAddPixel}
      ></div>
      <canvas
        id="game"
        ref={gameRef}
        onClick={() => handleAddPixel()}
        onMouseMove={(e) => handleFollowMouse(e)}
        className="c-canvas__game"
      ></canvas>
      <HudInfo totalTimeInSec={10800} x={xPosition} y={yPosition} />
      <ColorBar currentColor={currentColor} setCurrentColor={setCurrentColor} />
    </div>
  );
};

export default Canva;
