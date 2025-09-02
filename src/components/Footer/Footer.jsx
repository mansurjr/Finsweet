import { memo } from "react";
import logo from "../../assets/Logo.svg";
import { FOOTER_ICONS } from "../../static/index.jsx";

const Footer = () => {
  return (
    <footer className="bg-[#1C1E53] p-20">
      <div className="container mx-auto flex justify-between items-start gap-[142px]">
        <div className="flex flex-col w-1/2 gap-6 text-white">
          <div>
            <img src={logo} alt="Logo" className="mb-4" />
            <p>
              We are always open to discuss your project and <br />
              improve your online presence.
            </p>
          </div>

          <div className="mt-[85px] bg-[#FCD980] p-4 text-black grid grid-cols-2 gap-2">
            <p className="font-semibold">Email me at</p>
            <p className="font-semibold">Call us</p>
            <p>contact@website.com</p>
            <p>0927 6277 28525</p>
          </div>
        </div>

        <div className="w-1/2 text-white">
          <h3 className="text-[48px] font-semibold leading-[64px] tracking-normal text-left">
            Let's Talk!
          </h3>
          <p className="max-w-[399px]">
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>
          <div v className="flex gap-[26px] mt-[26px] text-white">
            {FOOTER_ICONS.map(({ icon, url }, inx) => (
              <a key={inx} href={url} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
