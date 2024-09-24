import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import './styles.css'; // import the CSS file

const SecondryContainer = () => {
  const movies = useSelector(store => store.movies);
  console.log(movies);
  return (
    <div className='SecondryContainer bg-black'>
      <div className='-mt-60 relative z-50'>
        <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondryContainer;