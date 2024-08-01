import React from "react";
import { teamData } from "./teamsData";

const Team = () => {
  return (
    <div className="bg-primary-blue pt-24 text-2xl font-normal leading-none text-neutral-white max-[600px]:text-xl">
      <div className="flex flex-col gap-2 p-8">
        <div className="text-5xl font-bold text-primary-yellow max-[600px]:text-3xl">
          Hans Team of Experts
        </div>
        <div className="leading-7 max-[600px]:text-2xl">
          You don’t need an agent you need a team of qualified, trustable, and
          experienced people. Lorem ipsum dolor sit amet consectetur. Et at
          ornare nec tincidunt arcu. Et enim tellus ultrices semper augue
          venenatis feugiat morbi ac. Id orci eu justo amet vel porttitor.
          Aliquam lectus urna sed magnis pharetra scelerisque sit ante.
        </div>
      </div>

      <div className="flex flex-wrap place-content-center gap-[2dvw] py-8 max-[600px]:flex-col max-[600px]:gap-10">
        {teamData.map((employee) => (
          <div className="flex w-64 flex-col rounded-xl bg-primary-yellow text-neutral-black">
            <div className="h-60 bg-purple-700 object-cover">
              <img
                className="h-full w-full rounded-xl rounded-b-none"
                src="https://i.imgur.com/5FnceeT.png"
                alt=""
              />
            </div>

            <div className="flex flex-col gap-2 p-2">
              <div className="text-2xl font-extrabold leading-none">
                {employee.name}
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center text-[0.9rem]">
                  <img src="/briefcase.svg" className="mr-2 w-5" alt="" />{" "}
                  {employee.occupation}
                </div>
                <div className="flex items-center text-[0.9rem]">
                  <img src="/phone.svg" className="mr-2 w-5" alt="" />{" "}
                  {employee.phoneNumber}
                </div>
                <div className="flex items-center text-wrap text-[0.8rem] leading-none">
                  <img src="/mail.svg" className="mr-2 w-5" alt="" />{" "}
                  {employee.email}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
