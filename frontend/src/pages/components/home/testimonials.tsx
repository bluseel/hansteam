import { Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { GoogleReviews, VideoTestimonials } from "./testimonialsData.js";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../shadcn/components/ui/carousel.js";

const Testimonials = () => {
  function handleVideoAll() {
    window.open(
      "https://www.youtube.com/watch?v=bS08iUfUw-I",
      "_blank",
      "noopener,noreferrer",
    );
  }

  function handleGoogleReviewsAll() {
    window.open(
      "https://www.youtube.com/watch?v=bS08iUfUw-I",
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className="flex min-h-[100dvh] w-full flex-col gap-[24dvh] overflow-x-hidden bg-primary-blue px-10 text-3xl text-neutral-white max-[600px]:gap-[4dvh] max-[600px]:px-4 max-[600px]:text-xl">
      {/* Video Testimonials*/}
      <div className="h-[40dvh] w-full pt-4 max-[600px]:h-fit">
        <div className="flex items-center pb-1">
          <div className="mr-2 h-[40px] w-[40px]">
            <img src="/youtube.png" alt="" className="h-full w-full" />
          </div>
          <div>Video Reviews</div>
        </div>

        <Carousel className="h-fit w-full" opts={{ align: "start" }}>
          <CarouselContent>
            {VideoTestimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="flex h-[47dvh] w-full bg-purple-700 max-[600px]:h-fit max-[600px]:flex-col-reverse">
                  <div className="flex-[1] px-5 py-3">
                    <div className="flex flex-col pb-3 leading-none max-[600px]:text-xl">
                      <div className="text-2xl italic tracking-widest">
                        {testimonial.name}
                      </div>
                      <div className="text-[1rem] font-normal">
                        {testimonial.occupation}
                      </div>
                    </div>
                    <div className="h-fit text-justify text-[1.2rem] font-thin leading-tight max-[600px]:w-full max-[600px]:text-[0.9rem] max-[600px]:leading-[20px]">
                      {testimonial.review}
                    </div>
                  </div>
                  <div className="relative flex-[1] max-[600px]:h-[50%] max-[600px]:flex-none">
                    {/* you see bunch of errors on console due to this embed */}
                    <iframe
                      width="100%"
                      height="100%"
                      src={testimonial.url}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -top-10 right-12 w-fit">
            <div
              onClick={handleVideoAll}
              className="bg-primary-yellow px-4 py-[2px] text-xl text-neutral-black hover:cursor-pointer"
            >
              All
            </div>
            <CarouselPrevious className="rounded-none border-primary-yellow bg-primary-yellow text-black" />
            <CarouselNext className="rounded-none border-primary-yellow bg-primary-yellow text-black" />
          </div>
        </Carousel>
      </div>

      {/* Google reviews*/}
      <div className="mb-4">
        <div className="flex items-center pb-1">
          <div className="mr-2 w-[40px]">
            <img src="/google.png" alt="" className="h-full w-full p-1" />
          </div>
          <div>Google Review</div>
        </div>

        <Carousel className="h-fit w-full" opts={{ align: "start" }}>
          <CarouselContent>
            {GoogleReviews.map((reviewer, index) => (
              <CarouselItem className="md:basis-1/2" key={index}>
                <div className="flex bg-purple-700 p-2 leading-none max-[600px]:h-fit max-[600px]:w-full max-[600px]:flex-none">
                  <div className="h-[40px] w-[40px]">
                    <img src="/user.png" alt="" className="h-full w-full" />
                  </div>

                  <div className="w-[40dvw] pl-1 text-[13px] max-[600px]:w-full">
                    {" "}
                    {/*content  */}
                    <div className="flex flex-col">
                      <div>{reviewer.name}</div>
                      <div className="font-normal">{reviewer.occupation}</div>
                    </div>
                    <div className="my-2 h-3 w-[13%] overflow-hidden">
                      <div className="flex h-3 w-fit">
                        {reviewer.stars.map((item, index) => (
                          <img
                            key={index}
                            src="/star.png"
                            className="h-full w-full"
                            alt=""
                          />
                        ))}
                      </div>
                    </div>
                    <div className="font-normal leading-tight">
                      {reviewer.review}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -top-10 right-12 w-fit">
            <div
              onClick={handleGoogleReviewsAll}
              className="bg-primary-yellow px-4 py-[2px] text-xl text-neutral-black hover:cursor-pointer"
            >
              All
            </div>
            <CarouselPrevious className="rounded-none border-primary-yellow bg-primary-yellow text-black" />
            <CarouselNext className="rounded-none border-primary-yellow bg-primary-yellow text-black" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
