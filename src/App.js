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
  const [videoList, setVideoList] = useState(videoFiles);

  console.log(videoDetails);
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
      <VideoList videoFiles={videoFiles} />
    </div>
  );
}

export default App;
