import { NavLink } from "react-router-dom";
import videoUploadPreview from "../../assets/Images/Upload-video-preview.jpg";

import "./VideoUpload.scss";

function VideoUpload() {
  return (
    <>
      {/* /////////// UPLOAD VIDEO SECTION //////////// */}
      <section>
        <div>
          <h1 className="video-upload__header">Upload Video</h1>

          <p className="video-upload__subheader">VIDEO THUMBNAIL</p>
          <img
            src={videoUploadPreview}
            alt="bike handlebars"
            className="video-upload__img"
          />
        </div>
        {/* //////////// VIDEO FORM ///////////////// */}
        <form className="form-container">
          <p className="form-header">TITLE YOUR VIDEO</p>
          <input
            className="form-container__title"
            placeholder="Add a title to your video"
          ></input>
          <p className="form-header">ADD A VIDEO DESCRIPTION</p>
          <input
            className="form-container__video"
            placeholder="Add a description to your video"
          ></input>
        </form>
        <button className="form-container__btn">PUBLISH</button>
      </section>
    </>
  );
}

export default VideoUpload;
