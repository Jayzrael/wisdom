// VideoDisplay.js
import React from "react";

const VideoDisplay = ({ activeSection }) => {
  // Define video URLs for each section
  const videos = {
    section1: "/videos/video1.mp4",
    section2: "https://www.w3schools.com/html/movie.mp4",
    section3: "/videos/video1.mp4",
    section4: "https://www.w3schools.com/html/movie.mp4",
  };

  // Get the video URL based on activeSection, fallback to a default video if no section is active
  const videoUrl = videos[activeSection] || videos.section1;

  return (
    <div className=" relative z-10 w-full h-full flex items-center justify-center ">
      <video
        src={videoUrl}
        controls
        autoPlay
        loop
        muted
        width={1000}
        className="max-w-full max-h-full object-cover rounded-md"
      />
    </div>
  );
};

export default VideoDisplay;
