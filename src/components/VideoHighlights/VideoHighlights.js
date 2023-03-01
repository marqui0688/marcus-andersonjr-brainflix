import "./VideoHighlights.scss";

function VideoHighlights(props) {
  return (
    <section>
      <video
        className="video-container"
        controls
        poster={props.videoHighlighted.image}
        src={props.videoHighlighted.video}
      ></video>
      <h1 className="highlights-title">BMX Rampage: 2021 Highlights</h1>
    </section>
  );
}

export default VideoHighlights;
