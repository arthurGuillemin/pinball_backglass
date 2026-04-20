import { useRef } from "react";
import { useSpriteLoop } from "../hooks/useSpriteLoop";

const chompFrames = Array.from({ length: 25 }, (_, i) =>
  `/assets/DiceKing/chomp/boss-battle-kingdice-chomp_${String(i + 1).padStart(4, "0")}.png`
);

export default function DiceKingChomp({ onEnd }) {
  const ref = useRef(null);

  useSpriteLoop(chompFrames, 20, ref, false, onEnd);

  return (
    <div className="dice-wrapper chomp">
      <img ref={ref} className="dice-result" src={chompFrames[0]} />
    </div>
  );
}