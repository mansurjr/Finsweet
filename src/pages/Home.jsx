import React from "react";
import Hero from "../components/Hero/Hero";
import RightArrow from "../components/RightArrow/RightArrow";
import UnderlineLink from "../components/Underline/Underline";
import card1 from "../assets/Card.png";
import card2 from "../assets/card1.png";
import card3 from "../assets/card2.png";
import MainCard from "../components/MainCard/MainCard";
import { CARD_DATA } from "../static/index.jsx";
import profile_photo from "../assets/woman-in-collared-shirt-774909.svg";

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
    <div>
      <Hero />

      <section className="w-full py-[60px] flex flex-col gap-[30px]">
        <div className="container flex justify-between items-center">
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
              <div className="flex items-center gap-3 mt-3">
                <UnderlineLink className="">{pic1.footer}</UnderlineLink>
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
                <div className="flex items-center gap-3 mt-2 ">
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
      </section>
      <section className="bg-[rgba(244,246,252,1)] py-[128px]">
        <div className="container">
          <p className="text-center text-[rgba(40,41,56,1)] font-poppins text-base font-medium leading-7">
            Features
          </p>
          <h1 className="text-center max-w-[630px] text-[rgba(40,41,56,1)] text-[48px] font-semibold leading-[64px] mx-auto ">
            Design that solves problems, one product at a time
          </h1>
          <div className="grid grid-cols-3 gap-[32px] mt-[45px] ">
            {CARD_DATA?.map((data, idx) => (
              <divCard
                key={idx}
                title={data.title}
                description={data.description}
                icon={data.icon}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-[130px]">
        <div className="flex container gap-[110px]">
          <div className="flex-1 max-w-[327px]">
            <h1 className="text-[rgba(40,41,56,1)] font-poppins text-[38px] font-semibold leading-[56px]">
              What our clients say about us
            </h1>
            <p className="text-[#282938] text-base font-normal leading-7 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-12">
            <h1 className="font-medium text-[32px] leading-[48px]">
              "The best agency we’ve worked with so far. They understand our
              product and are able to add new features with a great focus."
            </h1>
            <div className="flex gap-4">
              <img
                className="rounded-full h-[58px] w-[58px] object-cover"
                src={profile_photo}
                alt="Profile"
              />
              <div>
                <p className="font-normal text-lg leading-8 tracking-normal">
                  Jenny Wilson
                </p>
                <span className="font-normal text-[12px] leading-[28px]">
                  Vice President
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
