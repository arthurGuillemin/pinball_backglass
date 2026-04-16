import { useEffect, useState } from "react";

import IntroScreen from "./pages/IntroScreen";
import VideoScreen from "./pages/RunNGun";
import DuelDiceKing from "./pages/DuelDiceKing";
import "./style/IntroScreen.css";
import "./style/RunNGun.css";
import "./App.css";
import "./style/DuelDiceKing.css";

function App() {
  const [screen, setScreen] = useState("intro");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        setScreen((prev) => (prev === "intro" ? "video" : prev));
      }
      if (e.code === "KeyK") {
        setScreen("duel");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {screen === "intro" && <IntroScreen />}
      {screen === "video" && <VideoScreen />}
      {screen === "duel" && <DuelDiceKing />}      
    </>
  );
}

export default App;