import React from "react";
import Header from "./Header/Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

const Browse = () => {

  // api calling
  // Fetch Data from TMDB API and Update Store
  

  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondryContainer/>

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
