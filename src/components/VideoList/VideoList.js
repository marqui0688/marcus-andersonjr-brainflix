import "./VideoList.scss";

function VideoList({ videoList, handleOnClick }) {
  console.log(videoList);
  return (
    <>
      <p className="video-list__subheader">NEXT VIDEOS</p>
      {videoList.map((video) => {
        return (
          <div
            onClick={(e) => handleOnClick(e, video.id)}
            key={video.id}
            className="video-list__container"
          >
            <img src={video.image} className="video-list__image" />
            <div class="author-container">
              <p className="video-list__title"> {video.title} </p>
              <p className="video-list__author"> {video.channel} </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default VideoList;
