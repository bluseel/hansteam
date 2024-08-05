import React, { useState, useEffect, useRef, Suspense } from "react";

const WhyUs = React.lazy(() => import("./components/home/WhyUs"));
const OurLocations = React.lazy(() => import("./components/home/OurLocations"));
const Testimonials = React.lazy(() => import("./components/home/testimonials"));
const Hero = React.lazy(() => import("./components/home/hero"));

const Home = () => {
  return (
    <div className="">
      {/* hero */}

      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <WhyUs />
        <OurLocations />
        <Testimonials />
      </Suspense>
    </div>
  );
};

export default Home;
