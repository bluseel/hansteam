import { useEffect, useState, useRef } from "react";

const WhyUs = () => {
  const stats = [
    {
      name: "Real Estate Sales",
      number: 2.5,
      icon: "/sale-statistics.svg",
      alt: "real estate sales img",
    },
    {
      name: "Happy Customers",
      number: 6000,
      icon: "/happy-face.svg",
      alt: "happy customers",
    },
    {
      name: "YORK REGION and SIMCOE COUNTY ",
      number: 0,
      icon: "/1.svg",
      alt: "happy customers",
    },
    {
      name: "Properties Sold",
      number: 3000,
      icon: "/property.svg",
      alt: "property sold",
    },
  ];

  const totalDuration = 5000; // Total duration for the animation in milliseconds

  // Easing function: easeOutQuad
  const easeOutQuad = (t: number) => t * (2 - t);

  const animateValue = (endValue: number, isDecimal: boolean) => {
    const [value, setValue] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect(); // Disconnect observer after the element is in view
            }
          });
        },
        { threshold: 0.1 }, // Adjust threshold as needed
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    useEffect(() => {
      if (isInView) {
        let startTime = Date.now();
        let duration = totalDuration;
        const interval = setInterval(() => {
          const elapsedTime = Date.now() - startTime;
          const progress = Math.min(elapsedTime / duration, 1); // Normalize progress
          const easedProgress = easeOutQuad(progress);
          const currentValue = endValue * easedProgress;

          setValue(currentValue); // Store the numerical value

          if (progress === 1) {
            clearInterval(interval);
          }
        }, 10); // Update every 10ms

        return () => clearInterval(interval);
      }
    }, [isInView, endValue]);

    // Return both the raw value and the ref
    return { value, ref };
  };

  return (
    <div className="flex h-[100dvh] flex-col place-content-center bg-primary-blue text-neutral-white max-[600px]:h-fit max-[600px]:pt-6">
      <div className="#F6E100 ml-[10%] w-[80%] text-justify leading-[9rem]">
        {/* hans message */}
        <div className="text-5xl max-[600px]:text-4xl max-[400px]:text-3xl">
          "You do not need an agent. You need
          <span className="text-7xl font-extrabold italic tracking-tight text-primary-yellow max-[600px]:text-5xl max-[400px]:text-4xl">
            {" "}
            team{" "}
          </span>
          . And not just any team, but a team of 50 professionals with{" "}
          <span className="text-nowrap text-7xl font-extrabold italic tracking-tight text-primary-yellow max-[600px]:text-5xl max-[400px]:text-4xl">
            {" "}
            20 years{" "}
          </span>{" "}
          of experience!"
        </div>
        <div className="text-4xl uppercase text-primary-yellow max-[600px]:text-3xl max-[400px]:text-2xl">
          ~hans ohrstrom
        </div>
      </div>

      {/* Stats about hands */}
      <div className="relative pt-2 max-[600px]:pb-8 max-[600px]:pt-8">
        <div className="flex w-full text-neutral-white max-[600px]:flex-col max-[600px]:items-center max-[600px]:gap-4">
          {stats.map((stat, index) => {
            const { value, ref } = animateValue(stat.number, stat.number < 10);
            return (
              <div
                key={index}
                className="flex flex-1 flex-col place-content-center items-center overflow-hidden max-[600px]:flex-row"
                ref={ref}
              >
                <div className="h-40 max-[600px]:pr-4 max-[400px]:h-20">
                  <img
                    src={stat.icon}
                    alt={stat.alt}
                    className="h-full w-full"
                  />
                </div>

                <div className="flex flex-col items-center text-center max-[600px]:place-content-center">
                  <div className="text-5xl max-[600px]:text-3xl">
                    {stat.number === 0
                      ? `Homelife's`
                      : stat.number < 10
                        ? `${value.toFixed(2)}B+`
                        : `${Math.round(value)}+`}
                  </div>
                  <div className="max-[600px]:w-40 max-[600px]:text-sm">
                    {stat.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
