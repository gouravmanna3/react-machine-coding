import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

import "./ProgressBar.css";

const ProgressBarContainer = () => {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      setValue((prevValue) => prevValue + 1);
    }, 100);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="app">
      <span>Progress Bar</span>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      <span>{success ? "Completed" : "Loading..."}</span>
    </div>
  );
};

export default ProgressBarContainer;
