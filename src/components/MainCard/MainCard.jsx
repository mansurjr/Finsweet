import { memo } from "react";

const MainCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 relative">
      {icon && (
        <div className="absolute top-4 left-4">
          <img src={icon} alt={title} className="w-10 h-10" />
        </div>
      )}
      <div className="mt-14">
        {" "}
        <p className="text-lg font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-[#282938] mt-2">{description}</p>
      </div>
    </div>
  );
};

export default memo(MainCard);
