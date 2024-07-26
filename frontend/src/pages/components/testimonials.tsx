import React from 'react'

const Testimonials = () => {
  return (
    <div className='h-[100dvh] bg-primary-blue px-10 text-neutral-white text-3xl 
    flex flex-col gap-[12dvh] '>
      <div className='w-full pt-4 h-[40dvh] '>

        {/* video testimonial header*/}
        <div className=' flex place-content-between items-center'>
          <div>
            Video Testimonials
          </div>
          <div className='flex text-neutral-black gap-2'>
            <div className='bg-primary-yellow px-10 flex place-content-center items-center'>
              All
            </div>
            <div className='flex place-content-center items-center bg-primary-yellow'>
              <img src="/arrow-right.svg" alt="left arrow" className='h-10 w-10 rotate-180' />
            </div>
            <div className='flex place-content-center items-center bg-primary-yellow'>
              <img src="/arrow-right.svg" alt="left arrow" className='h-10 w-10' />
            </div>
          </div>
        </div>

        {/* video testimonial content */}
        <div className='bg-red-900 w-full h-[40dvh]'>
          f
        </div>

      </div>

      <div className='w-full h-[40dvh]pt-4'>

        {/* video testimonial header*/}
        <div className=' flex place-content-between items-center'>
          <div>
            Google Reviews
          </div>
          <div className='flex text-neutral-black gap-2'>
            <div className='bg-primary-yellow px-10 flex place-content-center items-center'>
              All
            </div>
            <div className='flex place-content-center items-center bg-primary-yellow'>
              <img src="/arrow-right.svg" alt="left arrow" className='h-10 w-10 rotate-180' />
            </div>
            <div className='flex place-content-center items-center bg-primary-yellow'>
              <img src="/arrow-right.svg" alt="left arrow" className='h-10 w-10' />
            </div>
          </div>
        </div>

        {/* video testimonial content */}
        <div className='bg-red-900 w-full h-[40dvh]  leading-none'>

          <div className='flex'>
            <div className='w-24 bg-blue-600'>photo</div>
            <div className='w-[40svw] text-[13px]'> {/*content  */}
              <div className='bg-green-900 flex flex-col'>
                <div className='bg-slate-600'>Jeffrey Corbettis</div>
                <div className='font-normal bg-pink-600'>Local Guide</div>

              </div>

              <div className='bg-yellow-900'>
                stars

              </div>

              <div className='bg-pink-900 leading-tight font-normal'>
                Lorem ipsum dolor sit amet,  vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin quam risus, vestibulum id orci eu, aliquet hendrerit velit. Proin interdum sapien urna, a volutpat ex sollicitudin sed. Sed non efficitur urna, a maximus mauris. Sed consectetur nisi quis malesuada feugiat. Nunc in massa tincidunt, lacinia dolor quis, molestie magna

              </div>
            </div>
          </div>

        </div>

      </div>


    </div>
  )
}

export default Testimonials