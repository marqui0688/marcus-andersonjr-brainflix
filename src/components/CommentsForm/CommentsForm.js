import mohanAvatar from "../../assets/Images/Mohan-muruge.jpg";

import "./CommentsForm.scss";

function CommentsForm() {
  return (
    <>
      <p className="form-header">JOIN THE CONVERSATION</p>
      <form className="form-container">
        <img
          src={mohanAvatar}
          alt="avatar"
          className="form-container__avatar"
        />
        <input
          className="form-container__input"
          placeholder="Add a new comment"
        ></input>
      </form>
      <button className="form-container__btn">COMMENT</button>
    </>
  );
}

export default CommentsForm;
