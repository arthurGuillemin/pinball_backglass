import { useEffect, useState } from "react";
import CupheadRun from "../components/CupheadRun";
import DiceKingIntro from "../components/DiceKingIntro";
import DiceKingIdle from "../components/DiceKingIdle";
import DiceKingDefeat from "../components/DiceKingDefeat";
import DiceKingChomp from "../components/DiceKingVictory";

export default function DuelDiceKing() {
  const [phase, setPhase] = useState("intro"); 
  // intro | idle | victory | defeat

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="duel-dice-king">
      <div className={`fade-overlay ${fadeIn ? "active" : ""}`} />

      <img className="bg" src="/assets/Bg/DiceKing/kd_bg_painting.png" />
      <img className="table" src="/assets/Bg/DiceKing/kd_bg_table.png" />

      {phase === "intro" && (
        <DiceKingIntro onFinish={() => setPhase("idle")} />
      )}

      {phase === "idle" && (
        <DiceKingIdle
          onVictory={() => setPhase("victory")}
          onDefeat={() => setPhase("defeat")}
        />
      )}

      {phase === "victory" && (
        <DiceKingChomp onEnd={() => setPhase("idle")} />
      )}

      {phase === "defeat" && (
        <DiceKingDefeat onEnd={() => setPhase("idle")} />
      )}

      <CupheadRun />
    </div>
  );
}