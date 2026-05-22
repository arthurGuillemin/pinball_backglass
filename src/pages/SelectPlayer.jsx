import { useEffect, useState } from "react";
import LetterColumn from "../components/LetterColumn";
import "../style/SelectPlayer.css";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function SelectPlayer() {
  const [letters, setLetters] = useState([0, 0, 0]);
  const [selectedColumn, setSelectedColumn] = useState(0);

  const changeLetter = (index, dir) => {
    setLetters((prev) => {
      const copy = [...prev];

      copy[index] =
        (copy[index] + dir + alphabet.length) %
        alphabet.length;

      return copy;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "ArrowLeft") {
        setSelectedColumn((p) => (p === 0 ? 2 : p - 1));
      }

      if (e.code === "ArrowRight") {
        setSelectedColumn((p) => (p === 2 ? 0 : p + 1));
      }

      if (e.code === "ArrowUp") {
        changeLetter(selectedColumn, -1);
      }

      if (e.code === "ArrowDown") {
        changeLetter(selectedColumn, 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [selectedColumn]);

  const playerName = letters
    .map((i) => alphabet[i])
    .join("");

  return (
    <div className="select-player-screen">
      <h1 className="title">CHOOSE YOUR NAME</h1>

      <div className="letters-container">
        {letters.map((val, index) => (
          <LetterColumn
            key={index}
            value={val}
            isActive={selectedColumn === index}
            onUp={() => changeLetter(index, -1)}
            onDown={() => changeLetter(index, 1)}
          />
        ))}
      </div>

      <div className="player-name">
        PLAYER : {playerName}
      </div>
    </div>
  );
}