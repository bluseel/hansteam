import BuysellForm from "./components/buy/buysellForm";

const Sell = () => {
  const whySellWithUs = [
    {
      heading: "Expert Valuation",
      description:
        "Our experts will provide a comprehensive valuation of your property to ensure you price it right for the market.",
    },
    {
      heading: "Marketing Mastery",
      description:
        "We use a blend of traditional and digital marketing techniques to ensure your property reaches the right buyers.",
    },
    {
      heading: "Professional Photography",
      description:
        "High-quality photos and virtual tours to showcase your property at its best.",
    },
    {
      heading: "Dedicated Support",
      description:
        "Our dedicated agents are with you every step of the way, providing personalized support and advice.",
    },
    {
      heading: "Negotiation Skills",
      description:
        "We aim to get you the best possible price through skilled negotiation.",
    },
    {
      heading: "Smooth Transactions",
      description:
        "From listing to closing, we handle all the paperwork and legalities, ensuring a smooth transaction process.",
    },
  ];

  const sellingProcess = [
    {
      step: "Consultation",
      description:
        "We start with a thorough consultation to understand your needs and goals.",
    },
    {
      step: "Valuation",
      description:
        "Our team provides a detailed property valuation based on current market trends.",
    },
    {
      step: "Preparation",
      description:
        "We offer tips and resources to help prepare your home for the market.",
    },
    {
      step: "Marketing",
      description:
        "Your property is listed and marketed across multiple channels.",
    },
    {
      step: "Showings",
      description:
        "We coordinate and manage showings, ensuring your property is seen by serious buyers.",
    },
    {
      step: "Offers",
      description: "We present and negotiate offers on your behalf.",
    },
    {
      step: "Closing",
      description:
        "We guide you through the closing process, ensuring all details are handled efficiently.",
    },
  ];

  return (
    <div className="flex flex-col gap-10 bg-primary-blue p-8 pt-24 text-2xl font-normal text-neutral-white max-[600px]:text-lg max-[600px]:leading-tight">
      <div className="pt-6">
        <h1 className="pt-2 text-5xl font-bold text-primary-yellow max-[600px]:text-3xl">
          Sell Your Property with Saul Real Estate
        </h1>
        Ready to Sell? We’re Here to Help! At Saul Real Estate, we understand
        that selling your property is a significant decision. Our team of
        experienced professionals is here to ensure that you get the best value
        for your home with a seamless and stress-free process.
      </div>

      <div>
        <h2 className="text-3xl font-bold max-[600px]:text-2xl">
          Why Sell with Us?
        </h2>
        <ul className="flex flex-col gap-4">
          {whySellWithUs.map((item, index) => (
            <li key={index} className="flex gap-4">
              <div>{"⦿   "}</div>
              <div>
                <span className="font-bold">{item.heading}</span>
                {": "}
                {item.description}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-bold max-[600px]:text-[1.8rem]">
          Our Selling Process:
        </h2>
        <ul className="flex flex-col gap-4">
          {sellingProcess.map((item, index) => (
            <li key={index} className="flex gap-4">
              <div>{`${index + 1}.     `}</div>
              <div>
                <span className="ml- font-bold">{item.step}</span>
                {": "}
                {item.description}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-bold max-[600px]:text-[1.8rem]">
          Send us you property details:
        </h2>

        <div className="-mx-2">
          <BuysellForm />
        </div>

        <div className="mt-10 px-2 text-[0.7rem] leading-tight">
          By proceeding, you consent to receive text messages at the number you
          provided from Saul Real Estate regarding real estate matters,
          including marketing messages. This is not a condition of purchase.
          Message frequency may vary. You can text "Help" for assistance. By
          proceeding, you also agree to our Terms of Service and Privacy Policy.
          Standard message and data rates may apply. Additionally, you agree to
          receive calls from Saul Real Estate at the number you provided,
          including marketing calls made by auto-dialer, pre-recorded or
          artificial voice, and email communications. This consent remains valid
          even if you are on a corporate, state, or national Do Not Call list.
          Calls and messages may be processed by an automated system. This site
          is protected by reCAPTCHA.
        </div>
      </div>

      {/* <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
        <div className="snap-start bg-amber-200 w-screen h-screen flex items-center justify-center text-8xl">1</div>
        <div className="snap-start bg-teal-200 w-screen h-screen flex items-center justify-center text-8xl">2</div>
        <div className="snap-start bg-cyan-200 w-screen h-screen flex items-center justify-center text-8xl">3</div>
        <div className="snap-start bg-fuchsia-200 w-screen h-screen flex items-center justify-center text-8xl">4</div>
      </div> */}
    </div>
  );
};

export default Sell;
