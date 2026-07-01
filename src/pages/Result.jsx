import { useRef } from "react";
import { useSpriteLoop } from "../hooks/useSpriteLoop";
import "../style/Results.css";

import WinscreenBoard from "../components/WinscreenBoard";

const forward = Array.from(
  { length: 7 },
  (_, i) =>
    `/assets/Results/Cuphead/winscreen_ch_${String(i + 1).padStart(4, "0")}.png`,
);

const backward = [...forward].slice(1, -1).reverse();

const animationFrames = [...forward, ...backward];

const titleFrames = Array.from(
  { length: 3 },
  (_, i) =>
    `/assets/Results/French/winscreen_results_title_${String(i + 1).padStart(4, "0")}.png`,
);

export default function ResultsScreen({ name, score }) {
  const animRef = useRef(null);
  const titleRef = useRef(null);

  useSpriteLoop(animationFrames, 20, animRef, true);

  useSpriteLoop(titleFrames, 8, titleRef, true);

  return (
    <div className="results-container">
      <img
        src="/assets/Results/winscreen_bg.png"
        alt="background"
        className="results-bg"
      />

      <img
        ref={titleRef}
        src={titleFrames[0]}
        alt="title animation"
        className="results-title"
      />

      <img
        ref={animRef}
        src={animationFrames[0]}
        alt="cuphead animation"
        className="results-animation"
      />
      <WinscreenBoard name={name} score={score} />
    </div>
  );
}
