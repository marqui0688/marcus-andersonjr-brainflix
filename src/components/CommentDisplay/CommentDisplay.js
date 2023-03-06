import mohanAvatar from "../../assets/Images/Mohan-muruge.jpg";

import "./CommentDisplay.scss";

function CommentsDisplay() {
  return (
    <>
      <section className="comment-display__container">
        <div className="comment-display__block">
          <div className="comment-display__heading">
            <img className="comment-display__avatar" src={mohanAvatar}></img>
            <p className="comment-display__name">Michael Lyons</p>
            <p className="comment-dispaly__date">Date</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CommentsDisplay;
