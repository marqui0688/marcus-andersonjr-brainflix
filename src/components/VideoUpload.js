import brainflixLogo from "../assets/Images/Logo/BrainFlix-logo.svg";
import mohanAvatar from "../assets/Images/Mohan-muruge.jpg";

import "./VideoUpload.scss";

function VideoUpload() {
  return (
    <>
      <header className="header">
        <img
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

        <button className="upload-button">UPLOAD</button>
      </header>

      <div>
        <h1 class="video-upload__header">Upload Video</h1>

        <p>VIDEO THUMBNAIL</p>
      </div>
    </>
  );
}

export default VideoUpload;
