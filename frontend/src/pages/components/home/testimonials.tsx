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

  // controls the google buttons
  const [translatoinFactor, settranslatoinFactor] = useState(0)
  const [dynamicStyling, setDynamicStyling] = useState(`max-[600px]:h-fit max-[600px]:flex-none max-[600px]:w-full    flex flex-1 bg-purple-700 p-2 ease-in-out duration-1000  transition-transform `)
  const [direction, setDirection] = useState('')
  const [index, setIndex] = useState(0)
  const [googeLeftArrowStyling, setGoogeLeftArrowStyling] = useState('')
  const [googeRightArrowStyling, setGoogeRightArrowStyling] = useState('')
  // since in mobile there only image evertime so i have to check till last image 
  // on the other hand in pc 2 images are shown so i have to check till 2nd last image
  const [isMobile, setsMobile] = useState(window.innerWidth < 600 ? true : false)
  console.log('mmmmmmmmm', isMobile);


  useEffect(() => {
    // translate is negative since the elements exists on right side
    if (direction === 'next') {
      const newFactor = translatoinFactor * (-1)
      setDynamicStyling(`max-[600px]:h-fit max-[600px]:flex-none max-[600px]:w-full flex flex-1 bg-purple-700 p-2 
          -translate-x-[${translatoinFactor}%] ease-in-out duration-1000  -transition-transform `)
      console.log('after:', newFactor);
    }

    // styling for that arrow
    if (index === 0) {
      setGoogeLeftArrowStyling(`flex place-content-center items-center bg-primary-yellow opacity-60`)

    } else {
      setGoogeLeftArrowStyling(`flex place-content-center items-center bg-primary-yellow cursor-pointer`)
    }


    if (direction === 'prev') {
      const newFactor = translatoinFactor * (-1)

      setDynamicStyling(`max-[600px]:h-fit max-[600px]:flex-none max-[600px]:w-full flex flex-1 bg-purple-700 p-2 
        -translate-x-[${translatoinFactor}%] ease-in-out duration-1000  -transition-transform `)
      console.log('after:', newFactor);
    }

    // button styling
    if (isMobile ? (index < GoogleReviews.length - 1) : (index < GoogleReviews.length - 2)) {
      setGoogeRightArrowStyling(`flex place-content-center items-center bg-primary-yellow cursor-pointer`)

    } else {
      setGoogeRightArrowStyling(`flex place-content-center items-center bg-primary-yellow opacity-60`)
    }


  }, [translatoinFactor])


  return (
    <div className=' bg-primary-blue max-[600px]:px-4 px-10 text-neutral-white max-[600px]:text-xl text-3xl 
    flex flex-col max-[600px]:gap-[4dvh] gap-[24dvh] overflow-x-hidden w-full'>


      {/* Video Testimonials*/}
      <div className='max-[600px]:h-fit w-full pt-4 h-[40dvh] '>
        <div className='flex pb-1 items-center'>
          <div className='w-[40px] h-[40px] mr-2'>
            <img src="/user.png" alt="" className='w-full h-full' />
          </div>
          <div>Video Reviews</div>
        </div>

        <Carousel className=' w-full h-fit' opts={{ align: "start" }}>

          <CarouselContent>
            {VideoTestimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className='max-[600px]:h-full max-[600px]:flex-col-reverse bg-purple-700 w-full  h-[47dvh] flex'>
                  <div className='flex-[1] px-5 py-3'>
                    <div className='max-[600px]:text-xl text-2xl italic tracking-widest pb-3'>
                      “{testimonial.name}:”
                    </div>
                    <div className='h-fit max-[600px]:text-[0.9rem] max-[600px]:leading-[20px] max-[600px]:w-full  text-[1.2rem] leading-tight font-thin text-justify'>
                      {testimonial.review}
                    </div>
                  </div>
                  <a href={testimonial.url} className='max-[600px]:h-[50%] max-[600px]:flex-none flex-[1] relative' >
                    <div className='absolute flex w-full h-full items-center place-content-center bg-black/50'>
                      <div><img src="/white-play.png" className='max-[600px]:w-28 max-[600px]:h-28 max-[600px]:active:w-24 max-[600px]:active:h-24 max-[600px]:hover:w-28 max-[600px]:hover:h-28
                      w-48 h-48 hover:w-52 hover:h-52 transition-all hover:cursor-pointer active:w-44 active:h-44' alt="" /></div>
                    </div>
                    <img src="/locations/toronto.jpg" className='h-full w-full object-cover' alt="" />
                  </a>
                </div>


              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='w-fit absolute -top-10 right-12'>
            <div className='bg-primary-yellow text-neutral-black px-4 py-[2px] text-xl'>
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
            <img src="/user.png" alt="" className='w-full h-full' />
          </div>
          <div>Google Review</div>
        </div>

        <Carousel className=' w-full h-fit' opts={{ align: "start" }}>

          <CarouselContent>
            {GoogleReviews.map((reviewer) => (
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
            <div className='bg-primary-yellow text-neutral-black px-4 py-[2px] text-xl'>
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