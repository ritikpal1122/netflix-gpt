import React from "react";
import MovieCard from "./MovieCard";


const MovieList = ({ title, movies }) => {
  console.log("movies", movies);
  return (
    <div className="px-6">
      <h1 className="text-3xl text-white py-6">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden checkscroll">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard className="ms-2" posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
