import { useRef } from "react";
import { useSpriteLoop } from "../hooks/useSpriteLoop";

// const diceIntroFrames = Array.from({ length: 20 }, (_, i) =>
//   `/assets/DiceKing/introHands/boss-battle-kingdice-intro_${String(i + 1).padStart(4, "0")}.png`
// );

const diceFrames = Array.from({ length: 48 }, (_, i) =>
  `/assets/DiceKing/intro/boss-battle-kingdice-intro_${String(i + 1).padStart(4, "0")}.png`
);
const cupheadFrames = [
  "/assets/Cuphead/Run/cuphead_run_0001.png",
  "/assets/Cuphead/Run/cuphead_run_0002.png",
  "/assets/Cuphead/Run/cuphead_run_0003.png",
  "/assets/Cuphead/Run/cuphead_run_0004.png",
];

export default function Backglass() {
  const diceRef = useRef(null);
  const cupheadRef = useRef(null);

  useSpriteLoop(diceFrames, 25, diceRef);
  useSpriteLoop(cupheadFrames, 10, cupheadRef);

  return (
    <div className="backglass">

      <img className="bg" src="/assets/Bg/DiceKing/kd_bg_painting.png" />

      <img className="table" src="/assets/Bg/DiceKing/kd_bg_table.png" />

      <img ref={diceRef} className="dice" src={diceFrames[0]} />

      <img ref={cupheadRef} className="cuphead" src={cupheadFrames[0]} />

    </div>
  );
}