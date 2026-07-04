import { useEffect, useRef } from "react";
import { useBackglassGame } from "./hooks/useBackglassGame";
import { useMqttBackglass } from "./hooks/Usemqtt";

import IntroScreen from "./pages/IntroScreen";
import SelectPlayer from "./pages/SelectPlayer";
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
  result: "/sounds/result.mp3",
};

function App() {
  const { screen, setScreen, gameState, startGame } = useBackglassGame();
  const audioRef = useRef(null);
  const unlockedRef = useRef(false);
  const resultTimerRef = useRef(null);

  useMqttBackglass();

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
      audio.play().catch((err) => console.warn("❌ Audio bloqué :", err));
    }
  };

  useEffect(() => {
    const unlock = () => {
      if (unlockedRef.current) return;
      unlockedRef.current = true;
      audioRef.current
        ?.play()
        .catch((err) => console.warn("❌ Audio bloqué :", err));
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
    if (screen === "result") {
      clearTimeout(resultTimerRef.current);
      resultTimerRef.current = setTimeout(() => {
        setScreen("intro");
      }, 20000);
    } else {
      clearTimeout(resultTimerRef.current);
    }

    return () => clearTimeout(resultTimerRef.current);
  }, [screen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        setScreen((prev) => {
          if (prev === "intro") return "select";
          if (prev === "select") return "video";
          return prev;
        });
      }
      if (e.code === "KeyK") setScreen("duel");
      if (e.code === "KeyX") setScreen("video");
      if (e.code === "KeyR") setScreen("result");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setScreen]);

  const handleAnyButton = () => {
    if (screen === "intro") setScreen("select");
  };

  const handleStartGame = (playerName, avatar) => {
    startGame(playerName, avatar);
  };

  useEffect(() => {
    console.log("gameState:", gameState);
    console.log("currentPlayer:", gameState?.currentPlayer);
  }, [gameState]);

  useEffect(() => {
    console.log("gameState complet:", JSON.stringify(gameState, null, 2));
  }, [gameState]);

  return (
    <>
      {screen === "intro" && <IntroScreen onAnyButton={handleAnyButton} />}
      {screen === "select" && <SelectPlayer onStartGame={handleStartGame} />}
      {screen === "video" && <VideoScreen />}
      {screen === "duel" && <DuelDiceKing />}
      {screen === "result" && (
        <Result name={gameState?.currentPlayer} score={gameState?.score} />
      )}
    </>
  );
}

export default App;
