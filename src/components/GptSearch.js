import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSugg from './GptMovieSugg';

const GptSearch = () => {
  return (
    <div className='py-48 '>
       <GptSearchBar/>
       <GptMovieSugg/>
    </div>
  );
}

export default GptSearch;
