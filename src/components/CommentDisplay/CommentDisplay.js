import mohanAvatar from "../../../src/assets/Images/Mohan-muruge.jpg";
import "./CommentDisplay.scss";

const formatDate = (timestamp) => {
  let formattedDate;
  const d = new Date(timestamp);
  const month = d.getMonth() <= 8 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  const day = d.getDate() <= 9 ? `0${d.getDate()}` : d.getDate();
  const year = d.getFullYear();
  formattedDate = `${month}/${day}/${year}`;
  return formattedDate;
};

function CommentDisplay({ featuredVideoComments }) {
  return featuredVideoComments.map((comment) => {
    return (
      <section key={comment.id} className="comment-display__container">
        <div className="comment-display__heading">
          <div className="comment-display__avatar"></div>
          <p className="comment-display__name">{comment.name}</p>
          <p className="comment-display__date">
            {formatDate(comment.timestamp)}
          </p>
          <p className="comment-display__comment">{comment.comment}</p>
        </div>
      </section>
    );
  });
}

export default CommentDisplay;
