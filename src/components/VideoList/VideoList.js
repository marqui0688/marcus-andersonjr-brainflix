import "./VideoList.scss";

function VideoList({ videoFiles }) {
  return (
    <>
      <p className="video-list__subheader">NEXT VIDEOS</p>
      {videoFiles.map((video) => {
        return (
          <section key={video.id} className="video-list__container">
            <img src={video.image} className="video-list__image" />
            <div class="author-container">
              <p className="video-list__title"> {video.title} </p>

              <p className="video-list__author"> {video.channel} </p>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default VideoList;
