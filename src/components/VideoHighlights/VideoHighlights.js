import "./VideoHighlights.scss";

function VideoHighlights({ featuredVideo }) {
  const { image, video } = featuredVideo;

  return (
    <section>
      <div className="video-wrapper">
        <video
          className="video-container"
          controls
          poster={image}
          src={video}
        ></video>
      </div>
    </section>
  );
}

export default VideoHighlights;
