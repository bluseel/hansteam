import React from "react";
import Rectangle from "./rectangleLocation";
import { Link } from "react-router-dom";
const OurLocations: React.FC = () => {
  const cities = [
    {
      city: "Newmarket",
      imageUrl: "https://i.imgur.com/Kx6GY6Q.jpg",
      link: "/newmarket",
    },
    {
      city: "Innisfil",
      imageUrl: "https://i.imgur.com/NOnuqMB.jpg",
      link: "/innisfil",
    },
    {
      city: "Barrie",
      imageUrl: "https://i.imgur.com/kpAtSF3.jpg",
      link: "/barrie",
    },
    {
      city: "Toronto",
      imageUrl: "https://i.imgur.com/cuiULU2.jpg",
      link: "/toronto",
    },
    {
      city: "Angus",
      imageUrl: "https://i.imgur.com/jHLbHO6.jpg",
      link: "/angus",
    },
    {
      city: "Bradford",
      imageUrl: "https://i.imgur.com/L38T4Xi.jpg",
      link: "/bradford",
    },
    {
      city: "Richmond Hill",
      imageUrl: "https://i.imgur.com/p3WCwoI.jpg",
      link: "/richmond-hill",
    },
    {
      city: "West Gwillimbury",
      imageUrl: "https://i.imgur.com/HHW6Yrm.jpg",
      link: "/west-gwillimbury",
    },
    {
      city: "East Gwillimbury",
      imageUrl: "https://i.imgur.com/2iEHfIc.jpg",
      link: "/east-gwillimbury",
    },
  ];

  const isMobile = window.innerWidth <= 700;
  console.log(isMobile);

  return (
    <div className="h-screen overflow-hidden overflow-x-hidden bg-primary-yellow text-3xl text-neutral-white">
      {/* Grid layout */}
      <div className="flex flex-col">
        {/* first row */}
        <div className="mb-1 flex h-[23dvh] flex-row-reverse gap-1 max-[600px]:h-fit max-[600px]:flex-col">
          <div className="z-10 flex h-full w-full items-center justify-center bg-primary-yellow text-4xl italic text-neutral-black max-[600px]:h-[7dvh]">
            Our Locations
          </div>
          {cities.slice(0, 3).map((cityData, index) => (
            <div className="h-fit w-full">
              <Rectangle
                key={index}
                city={cityData.city}
                imageUrl={cityData.imageUrl}
                imgHeight={isMobile ? "9.6dvh" : "23dvh"}
                link={cityData.link}
              />
            </div>
          ))}
        </div>

        {/* Remaining rows */}
        <div className="flex flex-row gap-1 max-[600px]:flex-col">
          {/* toronto big one */}
          <div className="w-[50dvw] text-5xl max-[600px]:w-full max-[600px]:text-4xl">
            {cities.map((cityData, index) => {
              if (index === 3) {
                return (
                  <div>
                    <Rectangle
                      key={index}
                      city={cityData.city}
                      imageUrl={cityData.imageUrl}
                      imgHeight={isMobile ? "9.6dvh" : "75dvh"}
                      link={cityData.link}
                    />
                  </div>
                );
              }
            })}
          </div>

          {/* all other rows */}
          <div className="felx flex-col">
            {/* 2nd row */}
            <div className="mb-1 flex w-[50dvw] gap-1 max-[600px]:w-full max-[600px]:flex-col">
              {cities.map((cityData, index) => {
                if (index > 3 && index < 6) {
                  return (
                    <div className="h-full w-full">
                      <Rectangle
                        key={index}
                        city={cityData.city}
                        imageUrl={cityData.imageUrl}
                        imgHeight={isMobile ? "9.6dvh" : "23dvh"}
                        link={cityData.link}
                      />
                    </div>
                  );
                }
              })}
            </div>

            {/* 2nd row */}
            <div className="mb-1 w-[50dvw] max-[600px]:w-full">
              {cities.map((cityData, index) => {
                if (index === 6) {
                  return (
                    <div className="h-full w-full">
                      <Rectangle
                        key={index}
                        city={cityData.city}
                        imageUrl={cityData.imageUrl}
                        imgHeight={isMobile ? "9.6dvh" : "23dvh"}
                        link={cityData.link}
                      />
                    </div>
                  );
                }
              })}
            </div>

            {/* last row */}
            <div className="flex w-[50dvw] gap-1 max-[600px]:w-full max-[600px]:flex-col">
              {cities.map((cityData, index) => {
                if (index > 6 && index < 9) {
                  return (
                    <div className="h-full w-full">
                      <Rectangle
                        key={index}
                        city={cityData.city}
                        imageUrl={cityData.imageUrl}
                        imgHeight={isMobile ? "9.6dvh" : "27dvh"}
                        link={cityData.link}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocations;
