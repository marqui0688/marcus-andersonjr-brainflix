import { useState } from "react";
import "./App.css";
import Header from "../src/components/Header/Header";
import "./assets/styles/partials/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import VideoUpload from "../src/components/VideoUpload/VideoUpload";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<VideoUpload />} />
          <Route path="/videos/:videoId" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
