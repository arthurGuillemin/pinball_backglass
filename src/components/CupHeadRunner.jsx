
import { useSpriteLoop } from "../hooks/useSpriteLoop";

const runFrames = [
  "/assets/Cuphead/Run/cuphead_run_0001.png",
  "/assets/Cuphead/Run/cuphead_run_0002.png",
  "/assets/Cuphead/Run/cuphead_run_0003.png",
  "/assets/Cuphead/Run/cuphead_run_0004.png",
  "/assets/Cuphead/Run/cuphead_run_0005.png",
  "/assets/Cuphead/Run/cuphead_run_0006.png",
  "/assets/Cuphead/Run/cuphead_run_0007.png",
  "/assets/Cuphead/Run/cuphead_run_0008.png",
  "/assets/Cuphead/Run/cuphead_run_0009.png",
  "/assets/Cuphead/Run/cuphead_run_0010.png",
  "/assets/Cuphead/Run/cuphead_run_0011.png",
  "/assets/Cuphead/Run/cuphead_run_0012.png",
  "/assets/Cuphead/Run/cuphead_run_0013.png",
  "/assets/Cuphead/Run/cuphead_run_0014.png",
  "/assets/Cuphead/Run/cuphead_run_0015.png",
  "/assets/Cuphead/Run/cuphead_run_0016.png"
  


];

export default function CupheadRunner() {
  const frame = useSpriteLoop(runFrames, 10);

  return (
    <div className="backglass">
      <img className="bg" src="/assets/Bg/kd_bg_painting.png" />

      <img className="table" src="/assets/Bg/kd_bg_table.png" />

      <img ref={diceRef} className="dice" />

      <img ref={cupheadRef} className="cuphead" />
    </div>
  );
}