import React from "react";
import Header from "./Components/Header";
import Advert from "./Components/Advert";
import Contents from "./Components/Contents";
import News from "./Components/News";
import Footer from "./Components/Footer";
import MusicContent from "./Components/MusicContent";
import Video from "./Components/Video";
import Img from "./Components/MicQueen3.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <Advert />
      {Contents.map(ContentsItem =>(
        <News
        key = {ContentsItem.key}
        title = {ContentsItem.title}
        img = {ContentsItem.img1}
        // vid = {ContentsItem.vid}
        // img2 = {ContentsItem.img2}
        content = {ContentsItem.content}
        />
      ))}
      <img className = "lastAd" src = {Img} alt = "last ad" />
      {Video.map(VideoItem => (
       <MusicContent
       key = {VideoItem.key}
       title ={VideoItem.title}
       Video = {VideoItem.video} 
       />
      ))}
      


      <Footer />
    </div>
  );
}

export default App;
