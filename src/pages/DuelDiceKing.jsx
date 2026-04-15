
import CupheadRun from "../components/CupheadRun";
import DiceKingIntro from "../components/DiceKing";


export default function Backglass() {

  return (
    <div className="backglass">

      <img className="bg" src="/assets/Bg/DiceKing/kd_bg_painting.png" />

      <img className="table" src="/assets/Bg/DiceKing/kd_bg_table.png" />

      <DiceKingIntro />
      <CupheadRun />

    </div>
  );
}