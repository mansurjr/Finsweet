import { memo } from "react";
import hero from "../../assets/hero.png";
import { Link } from "react-router-dom";
import RightArrow from "../RightArrow/RightArrow";
import UnderlineLink from "../Underline/Underline";

const Hero = () => {
  return (
    <section className="w-full bg-[#1C1E53]">
      <div className="container flex mx-[582px] py-[126px]">
        <div className="w-1/2 text-white flex flex-col gap-[24px]">
          <h1 className="text-[54px] font-semibold leading-[74px] tracking-[0] text-left max-w-[582px]">
            Building stellar websites for early startups
          </h1>
          <p className="text-[#ffffff9f]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex gap-[40px] items-center">
            <Link to={"/work"}>
              <button className="px-[56px] py-[16px] bg-[#FCD980] rounded-full hover:cursor-pointer select-none">
                View our work
              </button>
            </Link>
            <Link to={"/pricing"} className="flex items-center gap-3">
              <UnderlineLink>
                <p>View Pricing</p>
              </UnderlineLink>
              <RightArrow />
            </Link>
          </div>
        </div>
        <div className="w-1/2">
          <img src={hero} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
