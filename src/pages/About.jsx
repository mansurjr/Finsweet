import React from "react";
import hero from "../assets/about_hero.png";
import teacherImg from "../assets/about_section2.jpg";
import { teamMembers } from "../static/index.jsx";

const About = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div>
      <section className="py-[128px]">
        <div className="flex container gap-[48px]">
          <div className="flex-1 flex flex-col content-center justify-center gap-[30px]">
            <h6>About us</h6>
            <h1 className="font-semibold text-[54px] leading-[74px]">
              Our designs solve problems
            </h1>
            <p className="font-normal text-[#282938] text-[16px] leading-[28px] tracking-normal text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="flex-1">
            <img
              className="w-[640px] h-[337px] object-cover"
              src={hero}
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container ">
          <div className="bg-[#F4F5F5] flex gap-15 py-24 px-10 content-center justify-between">
            <div className="flex gap-[16px] flex-col flex-1">
              <h1 className="font-semibold text-[38px] leading-[56px]">
                Goal focussed
              </h1>
              <p className="ext-[rgba(40,41,56,1)]  text-[16px] font-normal leading-[28px]">
                {text}
              </p>
            </div>
            <div className="flex gap-[16px] flex-col flex-1">
              <h1 className="font-semibold text-[38px] leading-[56px] min-w-1">
                Continuous improvement
              </h1>
              <p className="ext-[rgba(40,41,56,1)]  text-[16px] font-normal leading-[28px]">
                {text}
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <img
              className="w-[100%] h-[340px] object-cover"
              src={teacherImg}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="bg-[#EEF4FA]">
        <div className="container py-[128px]">
          <h1 className="font-semibold text-[48px] leading-[64px] tracking-normal text-center">
            Meet our team
          </h1>
          <div className="flex gap-[32px] justify-center mt-12">
            {teamMembers?.map((item) => (
              <div
                key={item.id}
                className="w-[296px] h-[344px] bg-white flex flex-col items-center justify-center  shadow-md ">
                <div className="w-32 h-32">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full"
                  />

                  {item.id === 1 && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[rgba(255,255,255,0.35)] from-[42%] to-[rgba(82,57,250,0.79)] flex items-end opacity-0 group-hover:opacity-100 transition">
                      <div className="flex mb-4 mx-auto gap-3">
                        <FaFacebook className="text-lg text-white cursor-pointer" />
                        <FaInstagram className="text-lg text-white cursor-pointer" />
                        <FaTwitter className="text-lg text-white cursor-pointer" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-center mt-4">
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
