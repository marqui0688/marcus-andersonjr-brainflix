import mohanAvatar from "../../assets/Images/Mohan-muruge.jpg";
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
      <section className="comment-display__container">
        <div className="comment-display__block">
          <div className="comment-display__heading">
            <img className="comment-display__avatar"></img>
            <p className="comment-display__name">{comment.name}</p>
            <p className="comment-dispaly__date">
              {formatDate(comment.timestamp)}
            </p>
            <p>{comment.comment}</p>
          </div>
        </div>
      </section>
    );
  });
}

export default CommentDisplay;
