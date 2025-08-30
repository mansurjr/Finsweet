import React from "react";
import Hero from "../components/Hero/Hero";
import RightArrow from "../components/RightArrow/RightArrow";
import UnderlineLink from "../components/Underline/Underline";
import card1 from "../assets/Card.png";
import card2 from "../assets/card1.png";
import card3 from "../assets/card2.png";

const pic1 = {
  title: "Workhub office Webflow Webflow Design",
  body: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ",
  footer: "View project",
};

const pic2 = {
  title: "Unisaas Website Design",
  footer: "View portfolio",
};

const Home = () => {
  return (
    <main>
      <Hero />

      <div className="w-full py-[60px] flex flex-col gap-[30px]">
        <div className="mx-auto w-[1248px] flex justify-between items-center">
          <h1 className="text-[48px] font-semibold leading-[64px]">
            View our projects
          </h1>
          <div className="flex items-center gap-[10px] hover:cursor-pointer select-none text-[#1C1E53]">
            <UnderlineLink>
              <p className="font-medium">View more</p>
            </UnderlineLink>
            <RightArrow />
          </div>
        </div>

        <div className="mx-auto w-[1248px] grid grid-cols-[843px_405px] gap-4 leading-none">
          <div className="relative h-[600px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={card1}
              alt="Main project"
            />
            <div className="absolute top-0 left-0 w-1/2 h-full bg-[linear-gradient(-53.8deg,rgba(28,30,83,1),rgba(28,30,83,0.42)_100%)] z-10" />
            <div className="absolute bottom-10 left-10 z-20 text-white max-w-[400px]">
              <h2 className="text-2xl font-semibold">{pic1.title}</h2>
              <p className="mt-2 text-sm opacity-80 max-w-[293px]">
                {pic1.body}
              </p>
              <div className="flex gap-5 items-center content-center">
                <UnderlineLink className="mt-4">{pic1.footer}</UnderlineLink>
                <RightArrow />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between h-[600px]">
            <div className="relative h-[284px] overflow-hidden group">
              <img
                className="w-full h-full object-cover"
                src={card2}
                alt="Project card 2"
              />
              <div className="absolute inset-0 bg-[linear-gradient(-53.8deg,rgba(28,30,83,1),rgba(28,30,83,0.42)_100%)] z-10" />
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <h2 className="text-lg font-semibold">{pic2.title}</h2>
                <div className="flex items-center gap-3 mt-2">
                  <UnderlineLink>{pic2.footer}</UnderlineLink>
                  <RightArrow />
                </div>
              </div>
            </div>

            <img
              className="h-[284px] w-full object-cover"
              src={card3}
              alt="Project card 3"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
