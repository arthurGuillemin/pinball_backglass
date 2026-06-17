import "../style/SelectPlayer.css";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function LetterColumn({
  value,
  isActive,
  onUp,
  onDown,
}) {
  return (
    <div className="letter-column">
      <button className="arrow-btn up" onClick={onUp}>
        ▲
      </button>

      <div className={`letter-box ${isActive ? "active" : ""}`}>
        {alphabet[value]}
      </div>

      <button className="arrow-btn down" onClick={onDown}>
        ▼
      </button>
    </div>
  );
}