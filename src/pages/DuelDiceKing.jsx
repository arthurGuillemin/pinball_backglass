import { useEffect, useState } from "react";
import CupheadRun from "../components/CupheadRun";
import DiceKingIntro from "../components/DiceKingIntro";
import DiceKingIdle from "../components/DiceKingIdle";
import DiceKingDefeat from "../components/DiceKingDefeat";
import DiceKingChomp from "../components/DiceKingVictory";

const enGardeFrames = Array.from(
  { length: 9 },
  (_, i) =>
    `/assets/DiceKing/EnGarde/FightText_EnGarde_${String(i + 22).padStart(4, "0")}.png`,
);

export default function DuelDiceKing() {
  const [phase, setPhase] = useState("intro");
  const [fadeIn, setFadeIn] = useState(false);

  const [showFightText, setShowFightText] = useState(false);
  const [fightFrame, setFightFrame] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFightText(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showFightText) return;

    const interval = setInterval(() => {
      setFightFrame((prev) => {
        if (prev >= enGardeFrames.length - 1) {
          clearInterval(interval);

          setTimeout(() => {
            setShowFightText(false);
          }, 200);

          return prev;
        }

        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [showFightText]);

  return (
    <div className={`duel-dice-king ${fadeIn ? "active" : ""}`}>
      <img className="bg" src="/assets/Bg/DiceKing/kd_bg_painting.png" alt="" />

      <img className="table" src="/assets/Bg/DiceKing/kd_bg_table.png" alt="" />

      {phase === "intro" && <DiceKingIntro onFinish={() => setPhase("idle")} />}

      {phase === "idle" && (
        <DiceKingIdle
          onVictory={() => setPhase("victory")}
          onDefeat={() => setPhase("defeat")}
        />
      )}

      {phase === "victory" && <DiceKingChomp onEnd={() => setPhase("idle")} />}

      {phase === "defeat" && <DiceKingDefeat onEnd={() => setPhase("idle")} />}

      {showFightText && (
        <img
          src={enGardeFrames[fightFrame]}
          alt="Fight"
          className="fight-text"
        />
      )}

      <CupheadRun phase={phase} />
    </div>
  );
}
