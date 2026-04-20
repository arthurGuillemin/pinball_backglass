import {useEffect, useState} from "react";
import CupheadRun from "../components/CupheadRun";
import DiceKingIntro from "../components/DiceKing";
import DiceKingDefeat from "../components/DiceKingDefeat";
import DiceKingChomp from "../components/DiceKingVictory";

export default function DuelDiceKing() {
  const [action, setAction] = useState(null);
  const [ fadeIn, setFadeIn ] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="duel-dice-king">
      <div className={`fade-overlay ${fadeIn ? "active" : ""}`} />
      <img className="bg" src="/assets/Bg/DiceKing/kd_bg_painting.png" />
      <img className="table" src="/assets/Bg/DiceKing/kd_bg_table.png" />

      <DiceKingIntro onAction={setAction} />
      {action === "defeat" && (
        <DiceKingDefeat onEnd={() => setAction(null)} />
      )}
      {action === "chomp" && (
        <DiceKingChomp onEnd={() => setAction(null)} />
        )}
      <CupheadRun />

    </div>
  );
}