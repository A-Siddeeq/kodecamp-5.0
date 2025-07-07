import React from "react";
import { IoSearch } from "react-icons/io5";
import { useAuth } from "../../contexts/AuthContext";
import img1 from "../../assets/TopReport/img1.png";
import img2 from "../../assets/TopReport/img2.png";
import img3 from "../../assets/TopReport/img3.png";
import img4 from "../../assets/TopReport/img4.png";
import img5 from "../../assets/TopReport/img5.png";

const TopReport = () => {
  const { currentUser } = useAuth();
  const name = currentUser?.displayName || "User";
  return (
    <div>
      {" "}
      <div className="flex justify-between py-4">
        <h1 className="font-[400] xl:leading-[36px]">Hello, {name}👋🏼,</h1>
        <div className="flex flex-col justify-center">
          <IoSearch className="absolute ml-2" />
          <input
            className="rounded-xl w- xl:w-[216px] xl:h-[38px] py-2 px-3 text-[#B5B7C0] bg-white font-[400] text-[14px] leading-[21px] focus:outline-none focus:shadow-outline placeholder:pl-5"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex justify-center md:justify-start gap-x-1 xl:justify-around xl:mx-12 items-center bg-white rounded-2xl mb-4 p-2 w-full">
        <div className="flex flex-col md:flex-row items-center text-center md:gap-x-2 tracking-wide">
          <div>
            <svg
              className="w-[55px] xl:w-[84px]"
              width="84"
              height="84"
              viewBox="0 0 84 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="42"
                cy="42"
                r="42"
                fill="url(#paint0_linear_2702_521)"
              />
              <path
                d="M38.0302 41.0229C37.8552 41.0054 37.6452 41.0054 37.4527 41.0229C33.2877 40.8829 29.9802 37.4704 29.9802 33.2704C29.9802 28.9829 33.4452 25.5004 37.7502 25.5004C42.0377 25.5004 45.5202 28.9829 45.5202 33.2704C45.5027 37.4704 42.1952 40.8829 38.0302 41.0229Z"
                stroke="#00AC4F"
                strokeWidth="2.625"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M50.7171 28.9996C54.1121 28.9996 56.8421 31.7471 56.8421 35.1246C56.8421 38.4321 54.2171 41.1271 50.9446 41.2496C50.8046 41.2321 50.6471 41.2321 50.4896 41.2496"
                stroke="#00AC4F"
                strokeWidth="2.625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M29.2805 47.4796C25.0455 50.3146 25.0455 54.9346 29.2805 57.7521C34.093 60.9721 41.9855 60.9721 46.798 57.7521C51.033 54.9171 51.033 50.2971 46.798 47.4796C42.003 44.2771 34.1105 44.2771 29.2805 47.4796Z"
                stroke="#00AC4F"
                strokeWidth="2.625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M54.0947 57.0004C55.3547 56.7379 56.5447 56.2304 57.5247 55.4779C60.2547 53.4304 60.2547 50.0529 57.5247 48.0054C56.5622 47.2704 55.3897 46.7804 54.1472 46.5004"
                stroke="#00AC4F"
                strokeWidth="2.625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2702_521"
                  x1="74.55"
                  y1="2.14197e-06"
                  x2="42"
                  y2="84"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D3FFE7" />
                  <stop offset="1" stopColor="#EFFFF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-[#ACACAC] font-[400] text-[14px] leading-[21px]">
              Total Customers
            </p>
            <p className="text-[#333333] font-[600] text-[32px] leading-[32px]">
              5,423
            </p>
            <div className="flex items-center gap-x-1">
              <div className="flex items-center gap-x-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 17L10 5"
                    stroke="#00AC4F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.16663 9.99996L9.99996 4.16663L15.8333 9.99996"
                    stroke="#00AC4F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="font-[700] text-[#00AC4F] text-[12px] leading-[18px]">
                  16%
                </span>
              </div>
              <div className="font-[400] text-[12px] leading-[18px]">
                {" "}
                this month
              </div>
            </div>
          </div>

          <div>
            <svg
              className="w-[55px] xl:w-[84px]"
              width="84"
              height="84"
              viewBox="0 0 84 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="42"
                cy="42"
                r="42"
                fill="url(#paint0_linear_2702_539)"
              />
              <path
                d="M46.0667 53.75L48.6 56.2833L53.6667 51.2167"
                stroke="#00AC4F"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M42.2669 40.117C42.1003 40.1003 41.9003 40.1003 41.7169 40.117C37.7503 39.9836 34.6003 36.7336 34.6003 32.7336C34.5836 28.6503 37.9003 25.3336 41.9836 25.3336C46.0669 25.3336 49.3836 28.6503 49.3836 32.7336C49.3836 36.7336 46.2169 39.9836 42.2669 40.117Z"
                stroke="#00AC4F"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M41.9832 58.3498C38.9498 58.3498 35.9332 57.5831 33.6332 56.0498C29.5998 53.3498 29.5998 48.9498 33.6332 46.2664C38.2165 43.1998 45.7332 43.1998 50.3165 46.2664"
                stroke="#00AC4F"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2702_539"
                  x1="74.55"
                  y1="2.14197e-06"
                  x2="42"
                  y2="84"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D3FFE7" />
                  <stop offset="1" stop-color="#EFFFF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-[#ACACAC] font-[400] text-[14px] leading-[21px]">
              Members
            </p>
            <p className="text-[#333333] font-[600] text-[32px] leading-[32px]">
              1,893
            </p>
            <div className="flex items-center gap-x-1">
              <div className="flex items-center gap-x-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3L10 15"
                    stroke="#D0004B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.8334 10L10 15.8334L4.16671 10"
                    stroke="#D0004B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="font-[700] text-[#D0004B] text-[12px] leading-[18px]">
                  1%
                </span>
              </div>
              <div className="font-[400] text-[12px] leading-[18px]">
                {" "}
                this month
              </div>
            </div>
          </div>

          <div>
            <svg
              className="w-[55px] xl:w-[84px]"
              width="84"
              height="84"
              viewBox="0 0 84 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="42"
                cy="42"
                r="42"
                fill="url(#paint0_linear_2702_556)"
              />
              <path
                d="M32.27 24.5H51.7125C57.9425 24.5 59.5 26.0575 59.5 32.27V43.3475C59.5 49.5775 57.9425 51.1175 51.73 51.1175H32.27C26.0575 51.135 24.5 49.5775 24.5 43.365V32.27C24.5 26.0575 26.0575 24.5 32.27 24.5Z"
                stroke="#00AC4F"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M42 51.1345V59.4995"
                stroke="#00AC4F"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24.5 43.75H59.5"
                stroke="#00AC4F"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M34.125 59.5H49.875"
                stroke="#00AC4F"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2702_556"
                  x1="74.55"
                  y1="2.14197e-06"
                  x2="42"
                  y2="84"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D3FFE7" />
                  <stop offset="1" stop-color="#EFFFF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-[#ACACAC] font-[400] text-[14px] leading-[21px]">
              Active Now
            </p>
            <p className="text-[#333333] font-[600] text-[32px] leading-[32px]">
              189
            </p>
            <div className="flex items-center gap-x-1">
              <div className="flex items-center space-x-[-12px]">
                <img
                  class="w-6 rounded-full border-2 border-white"
                  src={img1}
                  alt="Avatar 5"
                />
                <img
                  class="w-6 rounded-full border-2 border-white"
                  src={img2}
                  alt="Avatar 5"
                />
                <img
                  class="w-6 rounded-full border-2 border-white"
                  src={img3}
                  alt="Avatar 5"
                />
                <img
                  class="w-6 rounded-full border-2 border-white"
                  src={img4}
                  alt="Avatar 5"
                />
                <img
                  class="w-6 rounded-full border-2 border-white"
                  src={img5}
                  alt="Avatar 5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopReport;
