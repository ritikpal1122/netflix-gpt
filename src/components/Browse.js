import React from "react";
import Header from "./Header/Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRateMovies from "../hooks/useTopRateMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {

  // api calling
  // Fetch Data from TMDB API and Update Store
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRateMovies();
  useUpcomingMovies();
  return (
    <div className="w-100 overflow-x-auto h-">
      <Header />
      {showGptSearch ? (
      <GptSearch/>
      ):(
        <>
      <MainContainer />
      <SecondryContainer  />
      </>
      )}
      {/* 

      main container 
       - video background
       - video title 
      Secondry container 
       - cards

      
       */}
    </div>
  );
};

export default Browse;
