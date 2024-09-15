import React, {  } from "react";
// import { API_OPTIONS } from "../utils/constant";
import { useSelector } from "react-redux";
// import { addTrailerVideo } from "../utils/moviesSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    
// push traileer video into redux store 

const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video cover"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1&showinfo=0"}
        title="YouTube video player"
        autoplay
      ></iframe>
    </div>
  );
};

export default VideoBackground;
