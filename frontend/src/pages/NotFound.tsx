// src/pages/NotFound.jsx
import React from 'react';

const NotFound = () => {

  return (
    <div className="grid h-screen place-content-center bg-primary-blue px-4">
      <div className="text-center">
        <div className='w-[80dvw] h-[70dvh] max-[600px]:h-fit'>
          <img src="/404.svg" className='h-full w-full' alt="" />
        </div>

        <p className="mt-4 text-white">We can't find that page.</p>
        <a
          href="/"
          className="mt-6 inline-block rounded border-primary-yellow border-2 border-solid  px-5 py-3 text-sm font-medium text-white hover:bg-primary-yellow hover:text-black focus:outline-none focus:ring"
        >
          Go Back Home
        </a>


      </div>
    </div>
  );
};

export default NotFound;
