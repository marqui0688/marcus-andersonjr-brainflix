import brainflixLogo from "../../assets/Images/Logo/BrainFlix-logo.svg";
import mohanAvatar from "../../assets/Images/Mohan-muruge.jpg";
import { useNavigate } from "react-router-dom";

import "./Header.scss";

function Header() {
  const navigate = useNavigate();

  const onClickUploadHandler = () => {
    navigate("/upload");
  };

  const onClickHomeHandler = () => {
    navigate("/");
  };
  return (
    <header className="header">
      <img
        onClick={onClickHomeHandler}
        className="header__logo"
        src={brainflixLogo}
        alt="Brainflix-logo"
      />

      <div className="search-wrapper">
        <input
          className="search-wrapper__bar"
          type="text"
          name="searchbar"
          placeholder="Search"
        />
        <img
          src={mohanAvatar}
          alt="avatar"
          className="search-wrapper__avatar"
        />
      </div>
      <div className="video-list__container">
        <button onClick={onClickUploadHandler} className="upload-button">
          UPLOAD
        </button>
      </div>
    </header>
  );
}

export default Header;
