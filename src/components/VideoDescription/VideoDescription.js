import "./VideoDescription.scss";

function VideoDescription({ mainVideoDescription }) {
  return (
    <section className="description-container">
      <p className="description-container__text">By {mainVideoDescription}</p>
      <p className="description-container__comment">3 Comments</p>
    </section>
  );
}

export default VideoDescription;
