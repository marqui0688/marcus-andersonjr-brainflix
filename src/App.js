import { useState } from "react";
import "./App.css";
import Header from "../src/components/Header/Header";
import videoDetails from "../src/data/video-details.json";
import videoFiles from "../src/data/videos.json";
import VideoHighlights from "../src/components/VideoHighlights/VideoHighlights";
import VideoViews from "../src/components/VideoViews/VideoViews";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import CommentDisplay from "./components/CommentDisplay/CommentDisplay";
import VideoList from "./components/VideoList/VideoList";
import "./assets/styles/partials/global.scss";

function App() {
  const [featuredVideo, setFeaturedVideo] = useState(videoDetails[0]);
  const [videoList, setVideoList] = useState(videoFiles.slice(1));
  const handleOnClick = (e, id) => {
    e.preventDefault();
    const newVideoList = videoFiles.filter((video) => video.id !== id);
    const newFeaturedVideo = videoDetails.find((video) => video.id === id);
    setFeaturedVideo(newFeaturedVideo);
    setVideoList(newVideoList);
  };

  return (
    <div className="App">
      <Header />
      <VideoHighlights videoHighlighted={featuredVideo} />
      <VideoViews
        author={featuredVideo.channel}
        views={featuredVideo.views}
        date={featuredVideo.timestamp}
        likes={featuredVideo.likes}
      />
      <VideoDescription mainVideoDescription={featuredVideo.description} />
      <CommentsForm />
      <CommentDisplay featuredVideoComments={featuredVideo.comments} />
      <VideoList handleOnClick={handleOnClick} videoList={videoList} />
    </div>
  );
}

export default App;
