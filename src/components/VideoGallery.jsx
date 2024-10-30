import React, { useState } from 'react';
import { FaRegPlayCircle } from 'react-icons/fa';
import { FaCirclePlay } from 'react-icons/fa6';

const images = [
  { id: 1, src: "/videos/video1.mp4", alt: "Hawai" },
  { id: 2, src: "/videos/video1.mp4", alt: "Bamboo Forest" },
  { id: 3, src: "/videos/video1.mp4", alt: "Cappadocia" },
  { id: 4, src: "/videos/video1.mp4", alt: "Lake Croatia" },
];

const VideoGallery = () => {
  // Set the first image as expanded by default
  const [activeImage, setActiveImage] = useState(images[0].id);

  // Event handler for mouse enter
  const handleMouseEnter = (id) => {
    setActiveImage(id);
  };

  return (
    <div>
      <section className="flex max-xl:hidden space-x-2">
        {images.map((image) => (
          <div
            key={image.id}
            className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-100 ease-in-out
              ${activeImage === image.id ? 'w-[600px]' : 'w-[200px]'} h-[340px]`}
            onMouseEnter={() => handleMouseEnter(image.id)}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
            <video
              src={image.src}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded-2xl"
            />
            <span className="absolute inset-0 flex items-center px-4 justify-between text-2xl text-white font-bold transition-opacity duration-300 z-10">
              {image.alt}
              <a href='http://youtube.com' target='blank'>
                <FaCirclePlay size={40} color='black' className='bg-[#611F69] rounded-full' />
              </a>
            </span>
          </div>
        ))}
      </section>




      {/* mobile gallery  */}
      <section className="xl:hidden flex flex-col gap-5 px-5 space-x-2">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-2xl cursor-pointer w-full  h-[340px]"
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
            <video
              src={image.src}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded-2xl"
            />
            <span className="absolute inset-0 flex items-center px-4 justify-between text-2xl text-white font-bold transition-opacity duration-300 z-10">
              {image.alt}
              <a href='http://youtube.com' target='blank'>
                <FaCirclePlay size={40} color='black' className='bg-[#611F69] rounded-full' />
              </a>
            </span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default VideoGallery;
