import CupheadRun from "../components/CupheadRun";

export default function VideoScreen() {
  return (
    <div className="scene">
      <div className="sky">
        <img src="/assets/RunNGun/lv1-1_bg_sky.png" className="sky" alt="" />
      </div>
      <div className="vista-container">
        <img
          src="/assets/RunNGun/background_cuphead_1.png"
          className="vista"
          alt=""
        />
        <img
          src="/assets/RunNGun/background_cuphead_1.png"
          className="vista"
          alt=""
        />
      </div>
      <div className="mid">
        <img
          src="/assets/RunNGun/lv1-1_mg_meadow-loop.png"
          className="mid"
          alt=""
        />
      </div>
      <div className="vista" />
      <div className="mid" />

      <CupheadRun phase="idle" />
    </div>
  );
}
