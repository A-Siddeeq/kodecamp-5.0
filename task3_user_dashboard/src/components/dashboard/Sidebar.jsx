import React, { useState } from "react";
import { LogoutButton } from "../Button";
import settingsIcon from "../../assets/Sidebar/settingsIcon.svg";
import dasboardIcon from "../../assets/Sidebar/dashboard.svg";
import productIcon from "../../assets/Sidebar/product.svg";
import customerIcon from "../../assets/Sidebar/customerIcon.svg";
import incomeIcon from "../../assets/Sidebar/incomeIcon.svg";
import promoteIcon from "../../assets/Sidebar/promoteIcon.svg";
import helpIcon from "../../assets/Sidebar/helpIcon.svg";
import { HiMenuAlt3 } from "react-icons/hi";
import "../../../src/index.css";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Hamburger icon (mobile only) */}
      <div className="p-4 md:hidden z-50">
        <HiMenuAlt3 className="text-2xl cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Sidebar Drawer */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-white z-40 transition-transform duration-300 ease-in-out
          ${
            isMenuOpen
              ? "md:w-[65px] translate-x-0"
              : "md:w-[260px] -translate-x-full"
          }
           md:translate-x-0 md:static md:flex md:flex-col 
        `}
      >
        {/* Sidebar content */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <div
              className="flex items-center gap-x-4 p-4 hover:cursor-pointer"
              onClick={toggleMenu}
            >
              <img src={settingsIcon} />
              <h1
                className={`font-[600] Poppins xl:text-[24px] xl:leading-[32px] ${
                  isMenuOpen ? "md:hidden" : "flex"
                }`}
              >
                Dashboard
              </h1>
            </div>

            <div
              className={`flex flex-col gap-y-3 xl:gap-y-4 p-4          isMenuOpen ? "md:hidden" : ""
                  }`}
            >
              {[
                { icon: <img src={dasboardIcon} />, label: "Dashboard" },
                { icon: <img src={productIcon} />, label: "Product" },
                { icon: <img src={customerIcon} />, label: "Customer" },
                { icon: <img src={incomeIcon} />, label: "Income" },
                { icon: <img src={promoteIcon} />, label: "Promote" },
                { icon: <img src={helpIcon} />, label: "Help" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-x-4 p-2 rounded-lg cursor-pointer hover:bg-[#5932EA] hover:text-white xl:w-[250px] xl:h-[46px] ${
                    isMenuOpen ? "md:hidden" : ""
                  }`}
                >
                  {item.icon}
                  <p className="text-[#9197B3] text-[14px] font-[400] leading-[21px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`p-4 flex flex-col gap-y-4 ${
              isMenuOpen ? "md:hidden" : ""
            }`}
          >
            <div className="bg-gradient-to-r from-[#EAABF0] to-[#4623E9] rounded-[20px] w-full h-[150px] p-3 text-white text-center flex flex-col justify-between">
              <p className="font-[600] text-[14px] leading-[21px]">
                Upgrade to PRO to get access to all Features!
              </p>
              <button className="bg-white text-[#4925E9] rounded-[20px] px-4 py-2 text-[14px] font-[600]">
                Get PRO now
              </button>
            </div>

            <div className="flex items-center justify-between w-full px-2">
              <img
                src="/image.png"
                alt="profile"
                className="rounded-full w-[42px] h-[42px] mr-2"
              />
              <div className="flex flex-col flex-1">
                <p className="text-[14px] font-[400]">Evano</p>
                <span className="text-[12px] text-[#757575]">
                  Program Manager
                </span>
              </div>
            </div>

            <LogoutButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
