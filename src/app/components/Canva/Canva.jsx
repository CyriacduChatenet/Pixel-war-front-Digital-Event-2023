import { useEffect, useRef, useState } from "react";
import ColorBar from "../ColorBar/ColorBar";

const Canva = ({ currentColor, setCurrentColor }) => {
  const gameRef = useRef(null);
  const cursorRef = useRef(null);

  const [scale, setScale] = useState(1);

  const zoomBy = 0.1;

  let currentColorChoice = currentColor;
  const gridCellSize = 10;

  const handleAddPixel = () => {
    addPixelIntoGame();
  };

  const handleFollowMouse = (event) => {
    const transformedCursorPosition = getTransformedPoint(
      event.offsetX,
      event.offsetY
    );
    console.log(transformedCursorPosition);

    const cursorLeft = event.clientX - cursorRef.current.offsetWidth / 2;
    const cursorTop = event.clientY - cursorRef.current.offsetHeight / 2;
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
    console.log("change color");

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

  // const handleZoom = (e) => {
  //   if (e.deltaY > 0) {
  //     if (scale > 1) {
  //       setScale(scale - zoomBy);
  //     }
  //   } else {
  //     setScale(scale + zoomBy);
  //   }
  // };
  function getTransformedPoint(x, y) {
    const context = gameRef.current.getContext("2d");
    const originalPoint = new DOMPoint(x, y);
    return context.getTransform().invertSelf().transformPoint(originalPoint);
  }

  const handleZoom = (event) => {
    const context = gameRef.current.getContext("2d")
    const currentTransformedCursor = getTransformedPoint(event.offsetX, event.offsetY);

    const zoom = event.deltaY < 0 ? 1.1 : 0.9;
  
    context.translate(currentTransformedCursor.x, currentTransformedCursor.y);
    context.scale(zoom, zoom);
    context.translate(-currentTransformedCursor.x, -currentTransformedCursor.y);
  
    context.clearRect(0, 0, gameRef.current.width, gameRef.current.height);
    // Redraws the image after the scaling
    drawGrids(context, gameRef.current.width, gameRef.current.height, gridCellSize, gridCellSize)
  
    // Stops the whole page from scrolling
    event.preventDefault();
  };

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
        onWheel={(e) => handleZoom(e)}
        style={{ transform: `scale(${scale})` }}
        className="c-canvas__game"
      ></canvas>
      <ColorBar currentColor={currentColor} setCurrentColor={setCurrentColor} />
    </div>
  );
};

export default Canva;
