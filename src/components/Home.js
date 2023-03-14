import { useState, useEffect } from "react";
import "./Home.scss";
import VideoHighlights from "../components/VideoHighlights/VideoHighlights";
import VideoViews from "../components/VideoViews/VideoViews";
import VideoDescription from "../components/VideoDescription/VideoDescription";
import CommentsForm from "../components/CommentsForm/CommentsForm";
import CommentDisplay from "../components/CommentDisplay/CommentDisplay";
import VideoList from "../components/VideoList/VideoList";
import axios from "axios";
import { useParams } from "react-router-dom";

function Home() {
  const [featuredVideo, setFeaturedVideo] = useState({ comments: [] });
  const [videoList, setVideoList] = useState([]);

  const { videoId } = useParams();

  console.log(videoId);

  useEffect(() => {
    axios
      .get("http://localhost:8080/videos")
      .then((response) => {
        console.log(response.data);
        setVideoList(response.data);
        axios
          .get(
            `http://localhost:8080/videos/${
              videoId || response.data[0].id
            }?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4`
          )
          .then((response) => {
            setFeaturedVideo(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [videoId]);

  return (
    <div className="Home">
      <VideoHighlights featuredVideo={featuredVideo} />
      <div className="home__wrapper">
        <div className="home__left-wrapper">
          <VideoViews
            title={featuredVideo.title}
            author={featuredVideo.channel}
            views={featuredVideo.views}
            date={featuredVideo.timestamp}
            likes={featuredVideo.likes}
          />
          <VideoDescription mainVideoDescription={featuredVideo.description} />

          <CommentsForm />
          <CommentDisplay featuredVideoComments={featuredVideo.comments} />
        </div>
        <VideoList videoList={videoList} featuredVideoid={featuredVideo.id} />
      </div>
    </div>
  );
}

export default Home;
