import "../style/VistaLoop.css";

const images = [
    "/assets/RunNGun/lv1-1_bgfar_far-forest-start.png",
    "/assets/RunNGun/lv1-1_bgfar_far-forest-loop.png",
    "/assets/RunNGun/lv1-1_bgfar_far-forest-loop.png",
    "/assets/RunNGun/lv1-1_bgfar_meadow_forest_loop.png",
    "/assets/RunNGun/lv1-1_bg_vista-landscape.png",
    "/assets/RunNGun/lv1-1_bgdark_evergreen-transition.png",
    "/assets/RunNGun/lv1-1_bgdark_background-forest_0003.png",
];

export default function VistaLoop() {
  return (
    <div className="vista-wrapper">
      <div className="vista-track">
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="vista-slide"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
    </div>
  );
}