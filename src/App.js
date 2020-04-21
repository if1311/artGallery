import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import PlainText from "./Components/plain text";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <NavBar />
      <PlainText />
      <Carousel
        title="Irises"
        author="Vincent Willem van Gogh"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/1200px-Mona_Lisa.jpg"
      />
    </div>
  );
}

export default App;
