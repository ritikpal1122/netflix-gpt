import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white absolute pt-[20%] px-6 sm:px-12 md:px-24">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          {title}
        </h1>
        <p className="py-6 text-sm sm:text-base md:text-lg w-full md:w-2/3 lg:w-1/2 shadow-md">
          {overview}
        </p>
      </div>
      <div className="mt-4">
        <button className="text-black py-2 px-8 sm:py-3 sm:px-10 text-sm sm:text-lg md:text-xl rounded-lg bg-white shadow-md">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white py-2 px-8 sm:py-3 sm:px-10 text-sm sm:text-lg md:text-xl bg-opacity-50 mx-2 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
