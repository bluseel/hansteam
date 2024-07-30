// src/pages/NotFound.jsx
import React from 'react';

const NotFound = () => {
  return (
    <div className='h-screen pt-28 bg-primary-blue text-neutral-white'>
      <div className='flex flex-col place-content-center items-center h-full'>
        <div className='text-8xl'>404</div>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
