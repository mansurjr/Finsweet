import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { NAVBAR_MENU } from "../../static/index.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1C1E53] h-[92px] flex font-poppins">
      <nav className="container flex justify-between items-center w-full">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8" />
        </Link>

        <ul className="hidden md:flex items-center gap-[40px] text-[#BBBBCB]">
          {NAVBAR_MENU.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`hover:text-white transition ${
                  index === NAVBAR_MENU.length - 1
                    ? "px-[24px] py-[8px] border rounded-full"
                    : ""
                }`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <GiHamburgerMenu />}
        </button>
      </nav>

      {isOpen && (
        <div className="absolute top-[92px] left-0 w-full bg-[#1C1E53] md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6 text-[#BBBBCB]">
            {NAVBAR_MENU.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`hover:text-white transition ${
                    index === NAVBAR_MENU.length - 1
                      ? "px-[24px] py-[8px] border rounded-full"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
