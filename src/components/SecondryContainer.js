import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondryContainer = () => {
  const movies = useSelector(store=>store.movies)
  console.log(movies);
  return (
    <div className='bg-black'>
     <div className='-mt-60 relative z-50'>
    <MovieList title={"Now Playing Movies"} movies = {movies.nowPlayingMovies}/>
    <MovieList title={"Popular Movies"} movies = {movies.popularMovies}/>
    <MovieList title={"Top Rated Movies"} movies = {movies.topRatedMovies}/>
    <MovieList title={"Upcoming Movies"} movies = {movies.upcomingMovies}/>


      {/* 
        movielist - popular 
        movielist - top rated
        movielist - upcoming
   multiple movie card 
  
       */}
       </div>
    
    </div>
  );
}

export default SecondryContainer;
