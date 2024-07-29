import { Trash } from 'lucide-react'
import { useEffect, useState } from 'react'
import { GoogleReviews, VideoTestimonials } from './testimonialsData.js'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../shadcn/components/ui/carousel.js"

const Testimonials = () => {

  function handleVideoAll() {
    window.open('https://www.youtube.com/watch?v=s1NU_IMDJs0&list=PLNZG2cK2I_z69wgXNFOv9Gn_e78FNh5Nz&pp=iAQB', 
      '_blank', 'noopener,noreferrer');

  }
  
  function handleGoogleReviewsAll() {
    window.open('https://www.google.com/search?q=hans+team&sca_esv=a2600e0876dec691&rlz=1C1CHBF_enPH977PH977&ei=6A2_ZbmmK4zO1e8P4OuJqAE&gs_ssp=eJzj4tVP1zc0TIm3SC-vNLQwYLRSNaiwsDBKTDFNTjZINUlKSTYztTKoSEm0TDE3MDA0MDMwM05NMvTizEjMK1YoSU3MBQBbShK4&oq=hans+team&gs_lp=Egxnd3Mtd2l6LXNlcnAiCWhhbnMgdGVhbSoCCAAyCxAuGIAEGMcBGK8BMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yCBAuGBYYHhgKMgYQABgWGB4yCBAAGBYYHhgKMhoQLhiABBjHARivARiXBRjcBBjeBBjgBNgBAUjIGVAAWKwPcAJ4AZABAJgBc6ABwQiqAQM2LjW4AQPIAQD4AQHCAg4QABiABBiKBRixAxiDAcICCxAuGIAEGMcBGNEDwgILEAAYgAQYsQMYgwHCAg4QLhiABBiKBRixAxiDAcICChAAGIAEGIoFGEPCAggQABiABBixA8ICCxAuGIAEGLEDGNQCwgIREAAYgAQYigUYkQIYsQMYgwHCAg4QABiABBiKBRiRAhixA8ICEBAuGIAEGIoFGEMYxwEY0QPCAg0QLhiABBiKBRhDGLEDwgILEC4YgAQYsQMYgwHCAhEQLhiABBixAxiDARjHARjRA8ICChAuGIAEGIoFGEPCAgUQLhiABMICGRAuGIAEGIoFGEMYlwUY3AQY3gQY3wTYAQHCAgsQABiABBiKBRiRAsICFxAuGIAEGIoFGJECGMcBGK8BGJgFGJkFwgILEAAYgAQYigUYkgPCAg0QABiABBiKBRhDGMkDwgINEC4YgAQYigUYQxjUAsICDRAAGIAEGIoFGEMYsQPCAhAQLhiABBiKBRhDGLEDGIMBwgIIEC4YgAQYsQPCAggQLhixAxiABMICBxAAGIAEGArCAgcQLhiABBgK4gMEGAAgQboGBggBEAEYFA&sclient=gws-wiz-serp#lrd=0x882ad5cc0e4bdc65:0xda9d700106063eb1,1,,,,', 
      '_blank', 'noopener,noreferrer');


  }


  return (
    <div className=' bg-primary-blue max-[600px]:px-4 px-10 text-neutral-white max-[600px]:text-xl text-3xl 
    flex flex-col max-[600px]:gap-[4dvh] gap-[24dvh] overflow-x-hidden w-full'>


      {/* Video Testimonials*/}
      <div className='max-[600px]:h-fit w-full pt-4 h-[40dvh] '>
        <div className='flex pb-1 items-center'>
          <div className='w-[40px] h-[40px] mr-2'>
            <img src="/youtube.png" alt="" className='w-full h-full' />
          </div>
          <div>Video Reviews</div>
        </div>

        <Carousel className=' w-full h-fit' opts={{ align: "start" }}>

          <CarouselContent>
            {VideoTestimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className='max-[600px]:h-fit max-[600px]:flex-col-reverse bg-purple-700 w-full  h-[47dvh] flex'>
                  <div className='flex-[1] px-5 py-3'>
                    <div className='flex flex-col leading-none max-[600px]:text-xl pb-3'>
                      <div className='text-2xl italic tracking-widest '>
                      {testimonial.name}
                      </div>
                      <div className='text-[1rem] font-normal'>{testimonial.occupation}</div>
                    </div>
                    <div className='h-fit max-[600px]:text-[0.9rem] max-[600px]:leading-[20px] max-[600px]:w-full  text-[1.2rem] leading-tight font-thin text-justify'>
                      {testimonial.review}
                    </div>
                  </div>
                  <div className='max-[600px]:h-[50%] max-[600px]:flex-none flex-[1] relative' >
                    {/* you see bunch of errors on console due to this embed */}
                    <iframe width="100%" height="100%" src={testimonial.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                  </div>
                </div>


              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='w-fit absolute -top-10 right-12'>
            <div onClick={handleVideoAll} className=' hover:cursor-pointer bg-primary-yellow text-neutral-black px-4 py-[2px] text-xl'>
              All
            </div>
            <CarouselPrevious className='rounded-none bg-primary-yellow text-black border-primary-yellow' />
            <CarouselNext className='rounded-none bg-primary-yellow text-black border-primary-yellow' />

          </div>
        </Carousel>


      </div>

      {/* Google reviews*/}
      <div className='mb-4'>
        <div className='flex pb-1 items-center'>
          <div className='w-[40px] mr-2'>
            <img src="/google.png" alt="" className='w-full h-full p-1' />
          </div>
          <div>Google Review</div>
        </div>

        <Carousel className=' w-full h-fit' opts={{ align: "start" }}>

          <CarouselContent>
            {GoogleReviews.map((reviewer, index) => (
              <CarouselItem className='md:basis-1/2 ' key={index}>
                <div className='leading-none max-[600px]:h-fit max-[600px]:flex-none max-[600px]:w-full flex bg-purple-700 p-2'>
                  <div className='w-[40px] h-[40px]'>
                    <img src="/user.png" alt="" className='w-full h-full' />
                  </div>

                  <div className=' max-[600px]:w-full w-[40dvw] text-[13px] pl-1'> {/*content  */}
                    <div className=' flex flex-col'>
                      <div >{reviewer.name}</div>
                      <div className='font-normal'>{reviewer.occupation}</div>

                    </div>
                    <div className='my-2 h-3 w-[13%] overflow-hidden '>
                      <div className='flex h-3 w-fit'>
                        {
                          reviewer.stars.map((item, index) => (
                            <img key={index} src="/star.png" className='h-full w-full' alt="" />
                          ))
                        }
                      </div>


                    </div>
                    <div className=' leading-tight font-normal'>
                      {reviewer.review}
                    </div>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='w-fit absolute -top-10 right-12'>
            <div onClick={handleGoogleReviewsAll} className='hover:cursor-pointer bg-primary-yellow text-neutral-black px-4 py-[2px] text-xl'>
              All
            </div>
            <CarouselPrevious className='rounded-none bg-primary-yellow text-black border-primary-yellow' />
            <CarouselNext className='rounded-none bg-primary-yellow text-black border-primary-yellow' />

          </div>
        </Carousel>


      </div>
    </div>

  )
}

export default Testimonials