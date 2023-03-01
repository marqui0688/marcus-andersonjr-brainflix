import logo from "./logo.svg";
import "./App.css";
import Header from "../src/components/Header/Header";
import videoDetails from "../src/data/video-details.json";
import VideoHighlights from "../src/components/VideoHighlights/VideoHighlights";
import "./assets/styles/partials/global.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <VideoHighlights videoHighlighted={videoDetails[0]} />
    </div>
  );
}

export default App;
