import React from "react";
import { faq, pricing } from "../static/index.jsx";

const Pricing = () => {
  return (
    <div>
      <section className="py-32">
        <div className="container">
          <h2 className="text-center text-5xl text-[#282938] font-semibold">
            Our Pricing Plans
          </h2>
          <p className="max-w-[562px] text-center justify-self-center mt-4 font-medium text-[16px]">
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
          <div className="grid grid-cols-3 gap-8 ">
            {pricing?.map((item) => (
              <div
                className={` max-w-[90%] py-16 px-12 rounded-xl mt-16
                ${item.id == 2 ? "bg-[#2B2D5A] text-white" : "bg-[#F4F6FB]"}

                `}
                key={item.id}>
                <div className="flex gap-4 items-center mb-5">
                  <h3 className="font-semibold text-4xl">{item.price}</h3>
                  <p
                    className={`font-normal text-[16px] ${
                      item.id == 2 ? "text-[#FCD980]" : "text-[#2405F2]"
                    }`}>
                    {item.kind}
                  </p>
                </div>
                <h6
                  className={`font-medium text-2xl ${
                    item.id === 2 ? "text-white" : "text-[#292937]"
                  }`}>
                  {item.title}
                </h6>
                <p
                  className={` mt-2.5 ${
                    item.id === 2 ? "text-[#BFBFCD]" : "text-[#666772]"
                  }`}>
                  {item.description}
                </p>

                <div className="flex gap-5 flex-col  mt-20">
                  <div className="flex gap-2">
                    <img src={item.player} alt="" />
                    <p>{item.option1}</p>
                  </div>
                  <div className="flex gap-2">
                    <img src={item.player} alt="" />
                    <p>{item.option2}</p>
                  </div>
                  <div className="flex gap-2">
                    <img src={item.player} alt="" />
                    <p>{item.option3}</p>
                  </div>

                  {item.id == 1 && (
                    <>
                      <div className="flex gap-2">
                        <img src={item.gray_player} alt="" />
                        <p>{item.option4}</p>
                      </div>
                      <div className="flex gap-2">
                        <img src={item.gray_player} alt="" />
                        <p>{item.option5}</p>
                      </div>
                    </>
                  )}

                  {item.id != 1 && (
                    <>
                      <div className="flex gap-2">
                        <img src={item.player} alt="" />
                        <p>{item.option4}</p>
                      </div>
                      <div className="flex gap-2">
                        <img src={item.player} alt="" />
                        <p>{item.option5}</p>
                      </div>
                    </>
                  )}
                  {item.id == 3 && (
                    <>
                      <div className="flex gap-2">
                        <img src={item.player} alt="" />
                        <p>{item.option6}</p>
                      </div>
                    </>
                  )}
                </div>
                <button
                  className={`text-nowrap py-4 px-[77px] grid place-items-center justify-self-center  rounded-full cursor-pointer duration-300 border border-transparent font-semibold text-[18px]
                    ${
                      item.id === 2
                        ? "bg-[#FCD980]  mt-16 text-[#282938] hover:border hover:border-[#FCD980] "
                        : "bg-[#282938] mt-[45px] text-white hover:border hover:border-[#282938] hover:bg-transparent hover:text-[#282938]"
                    }`}>
                  {item.buttton}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-32">
        <div className="container">
          <div className="flex  items-start">
            <div className="w-[40%]">
              <h2 className="text-5xl text-[#282938] font-semibold leading-16 max-w-[70%]">
                Frequently asked questions
              </h2>
              <p className="text-[#2405F2] text-[18px] font-normal mt-4">
                Contact us For More Info
              </p>
            </div>
            <div className="w-[60%]">
              {faq?.map((item) => (
                <div
                  className="border-b-1 border-solid border-[#C6C2EA] flex items-center py-8 px-6"
                  key={item.id}>
                  <h6 className="text-[#2405F2] text-[24px] font-normal">
                    {item.number}
                  </h6>
                  <div className="flex justify-between w-full ml-14 cursor-pointer select-none">
                    <h6 className="font-normal text-[24px] text-[#282938]">
                      {item.title}
                    </h6>
                    <img src={item.img} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
