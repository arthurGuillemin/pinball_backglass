import { useRef } from "react";
import { useSpriteLoop } from "../hooks/useSpriteLoop";

const cupheadFrames = Array.from({ length: 16 }, (_, i) =>
  `/assets/Cuphead/Run/cuphead_run_${String(i + 1).padStart(4, "0")}.png`
);

export default function CupheadRun() {
  const cupheadRef = useRef(null);

  useSpriteLoop(cupheadFrames, 10, cupheadRef);

  return (
    <img
      ref={cupheadRef}
      className="cuphead"
      src={cupheadFrames[0]}
    />
  );
}