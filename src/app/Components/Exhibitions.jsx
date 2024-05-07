'use client'
import React, { useState } from "react";
import GlobalButton from "./Globalbutton";
import Image from "next/image";

const exhibitionData = [
  {
    backgroundImage: "./entrance.png",
    alt: "video",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=HAL-mHkMDu3EwFyG", // YouTube video URL 1
    date: "Oct 31 - Nov 2, 2023",
    location: "Dubai, UAE",
    title: "International Family Medicine Conference & Exhibition 2023",
    arrowSrc: "/right-arrow-svgrepo-com.svg"
  },
  {
    backgroundImage: "./inside.png",
    alt: "video",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=HAL-mHkMDu3EwFyG", // YouTube video URL 2
    date: "Jan 29 - Feb 1, 2024",
    location: "Dubai, UAE",
    title: "Where The World Of Healthcare Meets",
    arrowSrc: "/right-arrow-svgrepo-com.svg"
  }
];

const PopupVideo = ({ videoSrc, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative">
        <button
          className="absolute top-2 right-2 text-white text-xl focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
        <iframe
          className="w-full h-full"
          src={videoSrc}
          title="popup-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

const Exhibitions = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoLoading, setVideoLoading] = useState(false);

  const playVideo = (videoSrc) => {
    setSelectedVideo(videoSrc);
    setVideoLoading(true);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setVideoLoading(false);
  };

  return (
    <div className="w-full bg-blue-950">
      <div className="flex justify-center py-6">
        <h2 className="tex-lg md:text-2xl text-white font-bold">
          Explore Latest Medical Exhibitions
        </h2>
      </div>
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {exhibitionData.map((exhibition, index) => (
          <div key={index} className="relative">
            <div
              className="relative bg-cover bg-center h-80 w-9/12 p-6 cursor-pointer flex items-center justify-center"
              style={{ backgroundImage: `url('${exhibition.backgroundImage}')` }}
              onClick={() => playVideo(exhibition.videoSrc)}
            >
              {videoLoading && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
                  <p className="text-white">Loading...</p>
                </div>
              )}
              <Image
                alt={exhibition.alt}
                src="/video player.svg"
                width={60}
                height={60}
              />
            </div>
            <div className="w-9/12 bg-[#264681] p-2 rounded">
              <div className="flex justify-between p-1">
                <p className="text-green-400 text-xs md:text-lg">{exhibition.location}</p>
                <p className="text-xs  md:text-lg text-white font-thin">
                  {exhibition.date}
                </p>
              </div>
              <div className="mt-2 flex justify-between">
                <h3 className="text-sm md:text-lg text-white cursor-pointer">
                  {exhibition.title}
                </h3>
                {exhibition.arrowSrc && (
                  <div className="bg-blue-950 flex items-center rounded px-5 lg:px-8 cursor-pointer">
                    <Image
                      className="hover:translate-x-2"
                      src={exhibition.arrowSrc}
                      width={32}
                      height={32}
                      alt="arrow"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedVideo && <PopupVideo videoSrc={selectedVideo} onClose={closeVideo} />}
      <GlobalButton bgColor="white" textColor="[#0c2a63]" text="Discover more" />
    </div>
  );
};

export default Exhibitions;
