import { useEffect, useRef } from "react";
import { useBackglassGame } from "./hooks/useBackglassGame";

import IntroScreen from "./pages/IntroScreen";
import VideoScreen from "./pages/RunNGun";
import DuelDiceKing from "./pages/DuelDiceKing";
import Result from "./pages/Result";

import "./style/IntroScreen.css";
import "./style/RunNGun.css";
import "./App.css";
import "./style/DuelDiceKing.css";

const MUSIC = {
  intro: "/sounds/leaderboard.mp3",
  duel: "/sounds/duel.mp3",
  video: "/sounds/video.mp3",
  result : '/sounds/result.mp3'
};

function App() {
  const { screen, setScreen, gameState, startGame } = useBackglassGame();
  const audioRef = useRef(null);
  const unlockedRef = useRef(false);

  const playMusic = (screenName) => {
    const src = MUSIC[screenName];
    if (!src) return;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.6;
    audioRef.current = audio;

    if (unlockedRef.current) {
      audio.play().catch((err) => console.warn("❌ Audio bloqué :", err));
    }
  };

  useEffect(() => {
    const unlock = () => {
      if (unlockedRef.current) return;
      unlockedRef.current = true;

      if (audioRef.current) {
        audioRef.current
          .play()
          .catch((err) => console.warn("❌ Audio bloqué :", err));
      }

      window.removeEventListener("click", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
    };

    window.addEventListener("click", unlock);
    window.addEventListener("keydown", unlock);
    window.addEventListener("touchstart", unlock);

    playMusic("intro");

    return () => {
      window.removeEventListener("click", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
    };
  }, []);

  useEffect(() => {
    playMusic(screen);
  }, [screen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space")
        setScreen((prev) => (prev === "intro" ? "video" : prev));
      if (e.code === "KeyK") setScreen("duel");
      if (e.code === "KeyX") setScreen("video");
      if (e.code === "KeyR") setScreen("result");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setScreen]);

  return (
    <>
      {screen === "intro" && <IntroScreen onStart={startGame} />}
      {screen === "video" && <VideoScreen gameState={gameState} />}
      {screen === "duel" && <DuelDiceKing gameState={gameState} />}
      {screen === "result" && <Result gameState={gameState} />}
    </>
  );
}

export default App;