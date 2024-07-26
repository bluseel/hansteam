import { useState, useEffect } from 'react';
import lakesideBuilding from '/lakeside.jpg';

const Home = () => {
  const achievements = ['Excellence', 'Trust', 'Quality', 'Success', 'Excellence'];
  
  return (
    <div>
      <div className='absolute top-0 z-[2] w-full h-screen bg-slate-600'>
        <img
          src={lakesideBuilding}
          alt="real estate hero building"
          className='h-full w-full object-cover bg-yellow-600'
        />
      </div>

      {/* Hero text upper */}
      <div>
        <div className='relative z-[4] text-neutral-white text-hero-heading'>
          20 Years of
        </div>
        <div
          className={`text-primary-yellow text-hero-heading italic tracking-widest
                     flex gap-10 w-[25rem] relative z-[4]`}
        >
          <div
            className={`flex flex-col z-[8] h-20 overflow-hidden  bg-red-700` }>
            {achievements.map((item, index) => (
              <span key={index} className='animate-translateHeroBackground'>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
