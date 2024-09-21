import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSugg from './GptMovieSugg';
import { BACKGROUNG_URL } from '../utils/constant';

const GptSearch = () => {
  return (
    <>
     <div className="absolute -z-10">
            <img 
                className="h-screen object-cover md:w-screen"
                src= {BACKGROUNG_URL}
                alt = "background"
            />
      </div>
    <div className='py-48 '>
       <GptSearchBar/>
       <GptMovieSugg/>
    </div></>
  );
}

export default GptSearch;
