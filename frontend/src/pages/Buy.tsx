import React, { useState } from "react";
import BuysellForm from "./components/buy/buysellForm";

const Buy = () => {
  const askYourselfList = [
    {
      heading: "Location",
      description: "What neighborhoods or communities do you prefer?",
    },
    {
      heading: "Type of Home",
      description:
        "What style are you looking for? How many bedrooms and bathrooms do you need?",
    },
    {
      heading: "Special Needs",
      description: "Do you need a home office or a bonus room?",
    },
    {
      heading: "Entertainment",
      description: "Do you need a home suitable for hosting guests?",
    },
    {
      heading: "Outdoor Features",
      description: "Do you want a yard, pool, or a gated community?",
    },
    {
      heading: "Budget",
      description: "Have you set a price range or consulted a lender?",
    },
    {
      heading: "Future Plans",
      description:
        "Are there any future plans or changes you anticipate that might influence your home choice?",
    },
    {
      heading: "Commute and Accessibility",
      description:
        "How important is the proximity to work, schools, or public transportation?",
    },
  ];

  return (
    <div className="bg-primary-blue pt-24 text-2xl font-normal text-neutral-white max-[600px]:text-lg max-[600px]:leading-tight">
      {/*written  */}
      <div className="p-8">
        <div className="text-5xl font-bold text-primary-yellow max-[600px]:text-3xl">
          Buy With Us
        </div>
        <div>
          Are you buying a property for the first time or had bad experience
          before? Be rest assured We at Saul Real Esate will be with you at
          every inch, to help you and assist you in buying the perfect property
          for you and your family
        </div>

        <div>
          <br />
          <h2 className="text-3xl font-bold max-[600px]:text-2xl">
            Before you start your search, ask yourself:
          </h2>
          <ul className="flex flex-col gap-4">
            {askYourselfList.map((item, index) => (
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
      </div>

      {/* form */}
      <div className="mt-4">
        <div className="px-8 text-justify text-3xl font-bold max-[600px]:text-3xl">
          Tell us what you are looking for
        </div>

        <div className="px-6">
          <BuysellForm />
        </div>

        <div className="mt-10 p-2 text-[0.7rem] leading-tight">
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
    </div>
  );
};

export default Buy;
