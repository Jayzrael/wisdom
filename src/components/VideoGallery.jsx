import React from "react";

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",  // Example video URLs
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
];

const VideoGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {videos.map((videoUrl, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 hover:w-[300px] hover:h-[180px] w-[180px] h-[300px]"
        >
          <video
            src={videoUrl}
            className="w-full h-full object-cover"
            controls={false}
            muted
            loop
            autoPlay
            playsInline
          />
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
