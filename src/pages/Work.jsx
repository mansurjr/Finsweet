import React from "react";
import { FOOTER_ICONS } from "../static/index.jsx";
import template1 from "../assets/template1.png";
import template2 from "../assets/template2.png";
import template3 from "../assets/template3.png";
import template4 from "../assets/template4.png";
import template5 from "../assets/template5.png";
import template6 from "../assets/template6.png";
import UnderlineLink from "../components/Underline/Underline.jsx";
import RightArrow from "../components/RightArrow/RightArrow.jsx";

const Work = () => {
  const text =
    "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.";

  const templates = [
    template1,
    template2,
    template3,
    template4,
    template5,
    template6,
  ];

  return (
    <div>
      <section className="bg-[#EEF4FA]">
        <div className="text-center container py-44 flex flex-col items-center justify-center">
          <p className="text-[#282938]">What we created</p>
          <h1 className="font-semibold text-[48px] leading-[64px] tracking-normal">
            Our Work Portfolio
          </h1>
          <p className="font-medium text-base leading-7 text-[#1C1E53] max-w-[733px]">
            We help teams create great digital products by providing them with
            tools and technology to make the design-to-code process universally
            accessible.
          </p>
          <div className="flex gap-[26px] mt-[26px] justify-center items-center">
            {FOOTER_ICONS.map(({ icon, url }, inx) => (
              <a key={inx} href={url} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="text-[#282938] flex items-center justify-center gap-8 mt-24">
            <span className="text-[#2405F2]">All</span>
            <span>UI Design</span>
            <span>Webflow Design</span>
            <span>Figma Design</span>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6">
            {templates.map((template, index) => (
              <div key={index} className="">
                <img
                  src={template}
                  alt={`Template ${index + 1}`}
                  className="mx-auto"
                />
                <h1 className="mt-4 font-semibold text-[38px] leading-[56px]">
                  Template {index + 1}
                </h1>
                <p className="text-[#1C1E53] font-normal text-base leading-7 text-justify">
                  {text}
                </p>
                <div className="flex gap-3">
                  <UnderlineLink>
                    <span>Read case study</span>
                  </UnderlineLink>
                  <RightArrow></RightArrow>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="p-32">
        <div className="container text-center">
          <p className="font-semibold text-[48px] leading-[64px] tracking-normal">
            Let's build something great together
          </p>

          <p className="mt-4 font-normal text-base leading-7 tracking-normal text-gray-600">
            Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
            ultricies nec dolor sit amet, scelerisque cursus purus.
          </p>

          <button className="mt-6 px-14 py-4 bg-[#FCD980] rounded-full font-medium hover:cursor-pointer select-none  hover:brightness-95">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Work;
