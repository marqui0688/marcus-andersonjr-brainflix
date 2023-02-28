import logo from "./logo.svg";
import "./App.css";
import Header from "../src/components/Header/Header";
import videoDetails from "../src/data/video-details.json";
console.log(videoDetails);
function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
