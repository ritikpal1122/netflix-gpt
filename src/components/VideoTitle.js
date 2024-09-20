import React from 'react';

const VideoTitle = ({title , overview}) => {
  return (
    <div className=' text-white absolute  pt-[20%] px-24 '>
      <div>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4 shadow-md '>{overview}</p>
      </div>
      <div className=''>
        <button  className=' text-black p-4 px-12 text-xl rounded-lg bg-white shadow-md '> ▶️ Play</button>
        <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 mx-2 rounded-lg'>More Info</button>
      </div>
    </div>
  );
} 

export default VideoTitle;
