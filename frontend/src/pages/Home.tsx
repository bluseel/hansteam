import { useState, useEffect, useRef } from "react";
// import lakesideBuilding from "/lakeside.jpg";
const lakesideBuilding = "https://i.imgur.com/jstNld5.jpg";
import WhyUs from "./components/home/WhyUs";
import OurLocations from "./components/home/OurLocations";
import Testimonials from "./components/home/testimonials";
import { Link } from "react-router-dom";

const Home = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.setAttribute(
        "src",
        "https://www.youtube.com/embed/oiW9BeIcsMg?autoplay=1&mute=1&controls=0&loop=1&playlist=oiW9BeIcsMg&modestbranding=1&showinfo=0&iv_load_policy=3&rel=0",
      );
    }
  }, []);

  const achievements = [
    "Real Estate",
    "Excellence",
    "Trust",
    // "Quality",
    "Success",
    "Real Estate",
  ];

  return (
    <div className="">
      <div className="top-0 z-[2] h-screen w-full bg-slate-600">
        {/* <img
        src={lakesideBuilding}
        alt="real estate hero building"
        className="h-full w-full bg-yellow-600 object-cover"
      /> */}
        <div className="h-full w-full overflow-hidden">
          <div className="relative z-[50] flex h-[1000px] w-full -translate-y-44 overflow-hidden">
            <iframe
              ref={videoRef}
              className="pointer-events-none absolute left-0 top-0 h-full w-full object-fill max-[600px]:scale-[4]"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Background Video"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Hero text*/}
      <div className="absolute top-[30%] z-[50] pl-5 max-[600px]:w-[100dvw] max-[600px]:overflow-hidden">
        <div className="relative z-[4] text-7xl text-neutral-white max-[600px]:text-6xl">
          20 Years of
        </div>
        <div
          className={`relative z-[4] flex w-[28rem] gap-10 text-7xl italic tracking-widest text-primary-yellow max-[600px]:text-6xl`}
        >
          <div
            className={`z-[8] flex h-20 flex-col overflow-hidden max-[600px]:h-[4rem]`}
          >
            {achievements.map((item, index) => (
              <span key={index} className="animate-translateHeroBackground">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex gap-8 max-[600px]:w-64 max-[600px]:flex-col max-[600px]:gap-4">
          <Link to={"/buy"}>
            {" "}
            <button className="w-full bg-primary-blue px-4 py-2 text-white hover:bg-primary-blue/80 active:bg-primary-blue/80">
              Discover your perfect Home
            </button>
          </Link>
          <Link to={"/sell"}>
            <button className="w-full bg-primary-yellow px-4 py-2 hover:bg-primary-yellow/80 active:bg-primary-yellow/80">
              Sell your Property with Us
            </button>
          </Link>
        </div>
      </div>

      <WhyUs />
      <OurLocations />
      <Testimonials />
    </div>
  );
};

export default Home;
