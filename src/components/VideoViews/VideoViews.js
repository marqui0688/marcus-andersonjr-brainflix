import viewsIcon from "../../assets/Images/Icons/views.svg";
import viewsLikes from "../../assets/Images/Icons/likes.svg";

import "./VideoViews.scss";

const formatDate = (timestamp) => {
  let formattedDate;
  const d = new Date(timestamp);
  const month = d.getMonth() <= 8 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  const day = d.getDate() <= 9 ? `0${d.getDate()}` : d.getDate();
  const year = d.getFullYear();
  formattedDate = `${month}/${day}/${year}`;
  return formattedDate;
};

function VideoViews({ author, views, date, likes }) {
  return (
    <div className="views-container">
      <div className="video-views">
        <p className="video-views__author">By {author}</p>
        <img className="video-views__icon" src={viewsIcon} alt="views icon" />
        <p className="video-views__counter">{views}</p>
      </div>

      <div className="video-likes">
        <p className="video-likes__date">{formatDate(views.timestamp)}</p>
        <img className="video-likes__icon" src={viewsLikes} alt="views like" />
        <p className="video-views__counter">{likes}</p>
      </div>
    </div>
  );
}

export default VideoViews;
