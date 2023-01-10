import { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [coins, setCoins] = useState(0);

  const handleProgress = (e) => {
    setProgress(progress + 1);
    if (progress >= 20) {
      setProgress(0);
      setCoins(coins + 1);
    }
  };

  return (
    <div className="c-progressbar">
      <span>{coins}</span>
      <progress value={progress} max={20} />
      <button onClick={handleProgress}>Augmenter</button>
    </div>
  );
};

export default ProgressBar;
