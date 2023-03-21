import videoUploadPreview from "../../assets/Images/Upload-video-preview.jpg";

import "./VideoUpload.scss";

function VideoUpload() {
  const onClickVideoUploadHandler = () => {
    alert("upload successful");
  };
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
        <form method="SUBMIT" action="#" id="id" className="form-container">
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

        <button onClick={onClickVideoUploadHandler} className="publish-button">
          PUBLISH
        </button>
        <button className="cancel-button">CANCEL</button>
      </section>
    </>
  );
}

export default VideoUpload;
