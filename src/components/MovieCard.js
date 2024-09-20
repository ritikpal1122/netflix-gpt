import React from "react";
import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 ms-2 cursor-pointer">
      <img alt="movie" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;       