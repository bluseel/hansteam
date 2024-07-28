import { useEffect, useState, useRef } from "react";

const WhyUs = () => {
  const stats = [
    { name: "Real Estate Sales", number: 2.5, icon: "/sale-statistics.svg", alt: "real estate sales img" },
    { name: "Happy Customers", number: 6000, icon: "/happy-face.svg", alt: "happy customers" },
    { name: "Properties Sold", number: 3000, icon: "/property.svg", alt: "property sold" },
  ];

  const totalDuration = 5000; // Total duration for the animation in milliseconds
  const decimalSpeedMultiplier = 2; // Speed multiplier for decimal animation
  const wholeNumberSpeedMultiplier = 2; // Speed multiplier for whole number animation

  // Easing function: easeOutQuad
  const easeOutQuad = (t) => t * (2 - t);

  const animateValue = (endValue, isDecimal) => {
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
        { threshold: 0.1 } // Adjust threshold as needed
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
        let increment = isDecimal ? 0.01 : Math.max(1, endValue / (totalDuration / 10));
        const interval = setInterval(() => {
          const elapsedTime = Date.now() - startTime;
          const progress = Math.min(elapsedTime / duration, 1); // Normalize progress
          const easedProgress = easeOutQuad(progress);
          const currentValue = endValue * easedProgress;

          setValue(isDecimal ? currentValue.toFixed(2) : Math.round(currentValue));

          if (progress === 1) {
            clearInterval(interval);
          }
        }, 10); // Update every 10ms

        return () => clearInterval(interval);
      }
    }, [isInView, endValue, isDecimal]);

    return { value, ref };
  };

  return (
    <div className="h-[100dvh] bg-primary-blue text-neutral-white max-[600px]:pt-6">
      <div className="ml-[10%] w-[80%] text-justify leading-[9rem] #F6E100">
        {/* hans message */}
        <div className="text-5xl max-[600px]:text-4xl max-[400px]:text-3xl">
          "You do not need an agent. You need
          <span className=" max-[600px]:text-5xl max-[400px]:text-4xl text-7xl text-primary-yellow italic font-extrabold tracking-tight"> team </span>.
          And not just any team, but a team of 50 professionals with <span className="max-[400px]:text-4xl max-[600px]:text-5xl text-7xl text-nowrap text-primary-yellow italic font-extrabold tracking-tight"> 20 years  </span> of experience!"
        </div>
        <div className="max-[400px]:text-2xl max-[600px]:text-3xl text-4xl text-primary-yellow">~Hans</div>
      </div>

      {/* Stats about hands */}
      <div className="relative pt-2 max-[600px]:pt-8">
        <div className=" text-neutral-white flex w-full max-[600px]:flex-col max-[600px]:items-center">
          {stats.map((stat, index) => {
            const { value, ref } = animateValue(stat.number, stat.number < 10);
            return (
              <div key={index} className="flex-1 flex flex-col max-[600px]:flex-row place-content-center items-center overflow-hidden" ref={ref}>
                <div className="max-[400px]:h-24 h-40 max-[600px]:pr-4 ">
                  <img src={stat.icon} alt={stat.alt} className="w-full h-full" />
                </div>
                
                <div className="flex flex-col items-center max-[600px]:place-content-center">
                  <div className="text-5xl">
                    {stat.number < 10 ? `${value}B+` : `${value}+`}
                  </div>
                  <div>{stat.name}</div>
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
