import React from 'react'

const OurLocations = () => {
  return (
    <div className='h-[100dvh] bg-primary-yellow text-neutral-white'>

      <div className='flex'>
        <div className='relative flex-[1] border-4 border-primary-yellow border-l-0 border-t-0 h-[35dvh] '>
          <img src="/locations/ottawa.jpg" alt="ottawa city real estate"
            className='w-full h-full object-center object-cover' />
          <div className='flex absolute top-[0] left-[0]  h-full w-full bg-primary-blue/60 items-center acive:opacity-0 hover:opacity-0 transition-opacity ease-in-out'>
            <div className=' text-hero-heading text-center w-full'>
              OTTAWA
            </div>
          </div>
        </div>

        <div className='relative flex-[1] h-[35dvh] border-4 border-primary-yellow border-l-0 border-t-0'>
          <img src="/locations/vancouver.jpg" alt="vancouver city real estate"
            className='w-full h-full object-center object-cover' />
          <div className='flex absolute top-[0] left-[0]  h-full w-full bg-primary-blue/60 items-center acive:opacity-0 hover:opacity-0 transition-opacity ease-in-out'>
            <div className=' text-5xl text-center w-full'>
              VANCOUVER
            </div>
          </div>
        </div>

        <div className='flex-[1] text-center content-center text-hero-heading italic h-[35dvh] inline-block text-neutral-black 
        bg-primary-yellow z-10'>Our Locations</div>
      </div>

      <div className='flex' >
        <div className='relative flex-[2] border-l-2 border-black h-[65dvh] border-4 border-primary-yellow border-l-0 border-t-0 border-b-0'>
          <img src="/locations/toronto.jpg" alt="toronto city real estate"
            className='w-full h-full object-center object-cover' />
          <div className='flex absolute top-[0] left-[0]  h-full w-full bg-primary-blue/60 items-center acive:opacity-0 hover:opacity-0 transition-opacity ease-in-out'>
            <div className=' text-hero-heading text-center w-full'>
              TORONTO
            </div>
          </div>
        </div>



        <div className='flex-[1]  flex flex-col bg-red-900'>
          <div className='relative h-[33dvh] border-4 border-primary-yellow border-l-0 border-r-0 border-t-0'>
            <img src="/locations/montreal.jpg" alt="montreal city real estate"
              className='w-full h-full object-center object-cover' />
            <div className='flex absolute top-[0] left-[0]  h-full w-full bg-primary-blue/60 items-center acive:opacity-0 hover:opacity-0 transition-opacity ease-in-out'>
              <div className=' text-5xl text-center w-full'> 
                MONTREAL
              </div>
            </div>
          </div>

          <div className='relative border-l-2 border-black h-[32dvh]'>
            <img src="/locations/calgary.jpg" alt="calgary city real estate"
              className='w-full h-full object-center object-cover' />
            <div className='flex absolute top-[0] left-[0]  h-full w-full bg-primary-blue/60 items-center acive:opacity-0 hover:opacity-0 transition-opacity ease-in-out'>
              <div className=' text-5xl text-center w-full'>
                CALGARY
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default OurLocations