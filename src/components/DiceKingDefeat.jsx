import { useRef } from "react";
import { useSpriteLoop } from "../hooks/useSpriteLoop";

const defeatFrames = Array.from({ length: 15 }, (_, i) =>
  `/assets/DiceKing/defeat/boss-battle-kingdice-defeat_${String(i + 1).padStart(4, "0")}.png`
);

export default function DiceKingDefeat({ onEnd }) {
  const ref = useRef(null);

  useSpriteLoop(defeatFrames, 20, ref, false, onEnd);

  return (
    <div className="dice-wrapper defeat">
      <img ref={ref} className="dice-result" src={defeatFrames[0]} />
    </div>
  );
}