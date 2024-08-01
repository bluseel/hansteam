import React from 'react';
import Rectangle from './rectangleLocation';
import { Link } from 'react-router-dom';
const OurLocations: React.FC = () => {
  const cities = [
    { city: 'Newmarket', imageUrl: '/locations/newmarket.jpg', link: '/newmarket' },
    { city: 'Innisfil', imageUrl: '/locations/innisfil.jpg', link: '/innisfil' },
    { city: 'Barrie', imageUrl: '/locations/barrie.jpg', link: '/barrie' },
    { city: 'Toronto', imageUrl: '/locations/toronto.jpg', link: '/toronto' },
    { city: 'Angus', imageUrl: '/locations/angus.jpg', link: '/angus' },
    { city: 'Bradford', imageUrl: '/locations/bradford.jpg', link: '/bradford' },
    { city: 'Richmond Hill', imageUrl: '/locations/richmondhill.jpg', link: '/richmond-hill' },
    { city: 'West Gwillimbury', imageUrl: '/locations/westgwillimbury.jpg', link: '/west-gwillimbury' },
    { city: 'East Gwillimbury', imageUrl: '/locations/eastgwillimbury.jpg', link: '/east-gwillimbury' }
  ];
  

  const isMobile= (window.innerWidth <= 700);
  console.log(isMobile);
  

  return (
    <div className='text-3xl overflow-hidden h-screen bg-primary-yellow text-neutral-white overflow-x-hidden'>

      {/* Grid layout */}
      <div className="flex flex-col">

        {/* first row */}
        <div className='flex h-[23dvh] max-[600px]:h-fit mb-1  flex-row-reverse gap-1 max-[600px]:flex-col '>

          <div className=" w-full h-full max-[600px]:h-[7dvh] flex items-center justify-center text-4xl italic text-neutral-black bg-primary-yellow z-10">
            Our Locations
          </div>
          {cities.slice(0, 3).map((cityData, index) => (
            <div className='w-full h-fit'>
              <Rectangle key={index} city={cityData.city} imageUrl={cityData.imageUrl} imgHeight={isMobile?'9.6dvh':'23dvh'} link={cityData.link}/>
            </div>
          ))}
        </div>

        {/* Remaining rows */}
        <div className='flex gap-1 flex-row max-[600px]:flex-col '>

          {/* toronto big one */}
          <div className='w-[50dvw] max-[600px]:w-full  text-5xl max-[600px]:text-4xl'>
            {cities.map((cityData, index) => {
              if (index === 3) {
                return (
                  <div>
                    <Rectangle key={index} city={cityData.city} imageUrl={cityData.imageUrl} imgHeight={isMobile?'9.6dvh':'75dvh'} link={cityData.link} />
                  </div>
                )
              }
            })}
          </div>


          {/* all other rows */}
          <div className='felx flex-col '>

            {/* 2nd row */}
            <div className='flex w-[50dvw] max-[600px]:w-full gap-1 mb-1 max-[600px]:flex-col '>
              {cities.map((cityData, index) => {
                if (index > 3 && index < 6) {
                  return (
                    <div className='w-full h-full'>

                      <Rectangle key={index} city={cityData.city} imageUrl={cityData.imageUrl} imgHeight={isMobile?'9.6dvh':'23dvh'} link={cityData.link} />
                    </div>
                  )
                }
              })}
            </div>
          
            {/* 2nd row */}
            <div className='w-[50dvw] max-[600px]:w-full  mb-1 '>
              {cities.map((cityData, index) => {
                if (index === 6) {
                  return (
                    <div className='w-full h-full '>

                      <Rectangle key={index} city={cityData.city} imageUrl={cityData.imageUrl} imgHeight={isMobile?'9.6dvh':'23dvh'} link={cityData.link}/>
                    </div>
                  )
                }
              })}
            </div>

              {/* last row */}
              <div className='flex w-[50dvw] max-[600px]:w-full gap-1 max-[600px]:flex-col '>
              {cities.map((cityData, index) => {
                if (index > 6 && index < 9) {
                  return (
                    <div className='w-full h-full'>

                      <Rectangle key={index} city={cityData.city} imageUrl={cityData.imageUrl} imgHeight={isMobile?'9.6dvh':'27dvh'} link={cityData.link} />
                    </div>
                  )
                }
              })}
            </div>



          </div>


        </div>

      </div>

    </div>
  );
}

export default OurLocations;
