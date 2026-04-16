export default function VideoScreen() {
  return (
    <div className="video-container">
      <video autoPlay muted loop playsInline className="video-bg">
        <source
          src="/assets/IntroScreen/cuphead_forest_follies.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}