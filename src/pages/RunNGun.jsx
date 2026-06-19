import { useEffect, useState } from "react";
import CupheadRun from "../components/CupheadRun";

const levelFrames = Array.from(
  { length: 11 },
  (_, i) =>
    `/assets/RunNGun/Run _n_Gun/level_text_rungun_${String(i).padStart(4, "0")}.png`,
);

export default function VideoScreen() {
  const [active, setActive] = useState(false);
  const [showLevelText, setShowLevelText] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setActive(true);
    }, 100);

    return () => clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    const levelTimer = setTimeout(() => {
      setShowLevelText(true);
    }, 50);

    return () => clearTimeout(levelTimer);
  }, []);

  useEffect(() => {
    if (!showLevelText) return;

    const interval = setInterval(() => {
      setFrameIndex((prev) => {
        if (prev >= levelFrames.length) {
          clearInterval(interval);

          setTimeout(() => {
            setShowLevelText(false);
          }, 1000);

          return prev;
        }

        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [showLevelText]);

  return (
    <div className={`scene ${active ? "active" : ""}`}>
      <div className="sky" />
      <div className="vista" />
      <div className="mid" />

      {showLevelText && (
        <img
          src={levelFrames[frameIndex]}
          alt="Level Start"
          className="level-text"
        />
      )}

      <CupheadRun phase="idle" />
    </div>
  );
}
