import { useState, useEffect } from 'react';
import lakesideBuilding from '/lakeside.jpg';
import WhyUs from './components/home/WhyUs';
import OurLocations from './components/home/OurLocations';
import Testimonials from './components/home/testimonials';
import { Link } from 'react-router-dom';


const Home = () => {
  const achievements = ['Excellence', 'Trust', 'Quality', 'Success', 'Excellence'];


  return (
    <div className=''>
      <div className='top-0 z-[2] w-full h-screen bg-slate-600'>
        <img
          src={lakesideBuilding}
          alt="real estate hero building"
          className='h-full w-full object-cover bg-yellow-600'
        />
      </div>

      {/* Hero text*/}
      <div className='pl-5 absolute top-[30%] max-[600px]:w-[100dvw] max-[600px]:overflow-hidden'>
        <div className=' text-7xl relative z-[4] text-neutral-white max-[600px]:text-6xl'>
          20 Years of
        </div>
        <div
          className={`text-primary-yellow text-7xl italic tracking-widest
                     flex gap-10 w-[28rem] relative z-[4] max-[600px]:text-6xl`}
        >
          <div
            className={`flex flex-col z-[8] h-20 max-[600px]:h-[4rem] overflow-hidden`}>
            {achievements.map((item, index) => (
              <span key={index} className=' animate-translateHeroBackground'>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className='max-[600px]:flex-col max-[600px]:gap-4 max-[600px]:w-64  flex gap-8 mt-10'>
          <Link to={'/buy'}> <button className='w-full hover:bg-primary-blue/80 active:bg-primary-blue/80 bg-primary-blue text-white px-4 py-2'>Discover your perfect Home</button></Link>
          <Link to={'/sell'}><button className='w-full hover:bg-primary-yellow/80 active:bg-primary-yellow/80 bg-primary-yellow px-4 py-2'>Sell your Property with Us</button></Link>
        </div>

      </div>

      <WhyUs />
      <OurLocations />
      <Testimonials />
    </div>
  );
};

export default Home;
