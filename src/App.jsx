import { useState } from "react";
import RoseAnimation from "./RoseAnimation";
import PhotoGallery from "./PhotoGallery";
import LoveQuiz from "./LoveQuiz";
import Countdown from "./Countdown";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <RoseAnimation />
        <PhotoGallery />
        <LoveQuiz />
        <Countdown />
      </div>
    </>
  );
}

export default App;