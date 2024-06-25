import { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ value = 0, onComplete }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
    if (value >= 100) {
      onComplete();
    }
  }, [value]);
  return (
    <div className="progress">
      <span style={{ color: percent > 50 ? "white" : "black" }}>
        {percent} %
      </span>
      <div
        style={{ width: `${percent}%` }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent.toFixed()}
      />
    </div>
  );
};

export default ProgressBar;
