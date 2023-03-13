import mohanAvatar from "../../assets/Images/Mohan-muruge.jpg";

import "./CommentsForm.scss";

function CommentsForm() {
  return (
    <>
      <p className="form-header">JOIN THE CONVERSATION</p>
      <form className="form-container">
        <div className="form-wrapper">
          <img
            src={mohanAvatar}
            alt="avatar"
            className="form-container__avatar"
          />
          <input
            className="form-container__input"
            placeholder="Add a new comment"
          ></input>
        </div>
        <button className="form-container__btn">COMMENT</button>
      </form>
    </>
  );
}

export default CommentsForm;
