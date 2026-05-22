import { useEffect, useState } from "react";

import IntroScreen from "./pages/IntroScreen";
import SelectPlayer from "./pages/SelectPlayer";
import VideoScreen from "./pages/RunNGun";
import DuelDiceKing from "./pages/DuelDiceKing";
import Result from "./pages/Result";

import "./style/IntroScreen.css";
import "./style/RunNGun.css";
import "./App.css";
import "./style/DuelDiceKing.css";

function App() {
  const [screen, setScreen] = useState("intro");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        setScreen((prev) => {
          if (prev === "intro") return "select";
          if (prev === "select") return "video";

          return prev;
        });
      }
      if (e.code === "KeyK") {
        setScreen("duel");
      }
      if (e.code === "KeyX") {
        setScreen("video");
      }
      if (e.code === "KeyR") {
        setScreen("result");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {screen === "intro" && <IntroScreen />}
      {screen === "select" && <SelectPlayer />}
      {screen === "video" && <VideoScreen />}
      {screen === "duel" && <DuelDiceKing />}      
      {screen === "result" && <Result />}
    </>
  );
}

export default App;