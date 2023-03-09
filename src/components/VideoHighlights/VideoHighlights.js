import "./VideoHighlights.scss";

function VideoHighlights({ featuredVideo }) {
  const { image, video, title } = featuredVideo;

  return (
    <section>
      <video
        className="video-container"
        controls
        poster={image}
        src={video}
      ></video>
      <h1 className="highlights-title">{title}</h1>
    </section>
  );
}

export default VideoHighlights;
