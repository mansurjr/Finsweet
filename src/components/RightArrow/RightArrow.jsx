import { memo } from 'react';
import hero_arrow from "../../assets/hero_arrow.svg";



const RightArrow = () => {
  return (<img className="w-[24px]" src={hero_arrow} alt="arrow" />

  );
};

export default memo(RightArrow);