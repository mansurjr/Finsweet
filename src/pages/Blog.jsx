import React from "react";
import hero from "../assets/blog_hero.jpg";
import UnderlineLink from "../components/Underline/Underline";
import { blogs } from "../static";

const Blog = () => {
  return (
    <div>
      <section className="py-32">
        <div className="container">
          <div className="flex items-center justify-center flex-col">
            <h2 className="font-semibold text-5xl text-center max-w-[60%] leading-16">
              A UX Case Study on Creating a Studious Environment for Students
            </h2>
            <div className="flex items-center justify-center mb-8 mt-4 gap-1.5">
              <p className="text-[#454551] text-[16px] font-medium">
                Andrew Jonson
              </p>
              <p className="text-[#292937] text-[16px] font-medium">
                Posted on 27th January 2021
              </p>
            </div>
            <img
              className="w-full object-cover overflow-hidden h-[477px] "
              src={hero}
              alt=""
            />
            <p className="font-normal text-[#696973] text-center max-w-[55%] mt-12 mb-4">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator on a hillside.
            </p>
            <UnderlineLink className="text-[#2405F2]">
              <p className=" font-normal cursor-pointer select-none">
                Read more
              </p>
            </UnderlineLink>
          </div>
        </div>
      </section>
      <section className="py-32">
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            {blogs?.map((item) => (
              <div className="" key={item.id}>
                <img src={item.img} alt="" />
                <p className="font-medium text-[#696973] mt-8 mb-4">
                  {item.date}
                </p>
                <h6 className="font-normal text-[#282938] text-2xl mb-4">
                  {item.title}
                </h6>
                <p className="text-[16px] text-[#696973] max-w-[90%] leading-7">
                  {item.description}
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <UnderlineLink className="text-[#1C1E53]">
                    <p className="font-medium text-[16px]">{item.button}</p>
                  </UnderlineLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
