import { NavLink } from "react-router-dom";
import "./VideoList.scss";

function VideoList({ videoList }) {
  return (
    <>
      <p className="video-list__subheader">NEXT VIDEOS</p>
      {videoList.map((video) => {
        return (
          <NavLink
            to={`/videos/${video.id}`}
            key={video.id}
            className="video-list__container"
          >
            <img src={video.image} className="video-list__image" />
            <div class="author-container">
              <p className="video-list__title"> {video.title} </p>
              <p className="video-list__author"> {video.channel} </p>
            </div>
          </NavLink>
        );
      })}
    </>
  );
}

export default VideoList;
