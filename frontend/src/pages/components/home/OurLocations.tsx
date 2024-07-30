import React from 'react';
import Rectangle from './rectangleLocation';
const OurLocations: React.FC = () => {
  const cities = [
    { city: 'Newmarket', imageUrl: '/locations/ottawa.jpg' },
    { city: 'Innisfil', imageUrl: '/locations/calgary.jpg' },
    { city: 'Barrie', imageUrl: '/locations/montreal.jpg' },
    { city: 'Toronto', imageUrl: '/locations/toronto.jpg' },
    { city: 'Angus', imageUrl: '/locations/toronto.jpg' },
    { city: 'Bradford', imageUrl: '/locations/toronto.jpg' },
    { city: 'Richmond Hill', imageUrl: '/locations/toronto.jpg' },
    { city: 'West Gwillimbury', imageUrl: '/locations/toronto.jpg' },
    { city: 'East Gwillimbury', imageUrl: '/locations/toronto.jpg' },
    // Add more cities as needed
  ];

  return (
    <div className='text-3xl overflow-hidden h-screen bg-primary-yellow text-neutral-white overflow-x-hidden'>

      {/* Grid layout */}
      <div className="flex flex-col gap-1">

        {/* first row */}
        <div className='flex h-[23dvh] flex-row-reverse gap-1'>

          <div className=" w-full h-full flex items-center justify-center text-4xl italic text-neutral-black bg-primary-yellow z-10">
            Our Locations
          </div>
          {cities.slice(0, 3).map((cityData, index) => (
            <div className='w-full h-fit'>
              <Rectangle key={index} city={cityData.city} imageUrl={cityData.imageUrl} imgHeight='23dvh' />
            </div>
          ))}
        </div>

        {/* Remaining rows */}
        <div className='flex gap-1 flex-row'>

          {/* torronto big one */}
          <div className='w-[50dvw] text-5xl'>
            {cities.map((cityData, index) => {
              if (index === 3) {
                return (
                  <div>
                    <Rectangle key={index} city={cityData.city} imageUrl={cityData.imageUrl} imgHeight='73dvh' />
                  </div>
                )
              }
            })}
          </div>


          {/* all other rows */}
          <div className='felx flex-col '>

            {/* 2nd row */}
            <div className='flex w-[50dvw] gap-1 mb-1'>
              {cities.map((cityData, index) => {
                if (index > 3 && index < 6) {
                  return (
                    <div className='w-full h-full'>

                      <Rectangle key={index} city={cityData.city} imageUrl={cityData.imageUrl} imgHeight='23dvh' />
                    </div>
                  )
                }
              })}
            </div>
          
            {/* 2nd row */}
            <div className='w-[50dvw]  mb-1'>
              {cities.map((cityData, index) => {
                if (index === 6) {
                  return (
                    <div className='w-full h-full '>

                      <Rectangle key={index} city={cityData.city} imageUrl={cityData.imageUrl} imgHeight='25dvh' />
                    </div>
                  )
                }
              })}
            </div>

              {/*  row */}
              <div className='flex w-[50dvw] gap-1 '>
              {cities.map((cityData, index) => {
                if (index > 6 && index < 9) {
                  return (
                    <div className='w-full h-full'>

                      <Rectangle key={index} city={cityData.city} imageUrl={cityData.imageUrl} imgHeight='23dvh' />
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
