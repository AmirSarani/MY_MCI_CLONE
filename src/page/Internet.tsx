import clsx from "clsx";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FooterHeader from "../components/FooterHeader";
import InternetC from "../components/InternetC";
import Conversetion from "../components/Conversetion";
import Message from "../components/Message";
import BuyPagkege from "../components/BuyPagkege";

const Internet = () => {
  const { t } = useTranslation();
  const [activeInternet, setActiveInternet] = useState<
    "internet" | "conversetion" | "message"
  >("internet");
  return (
    <div dir="rtl" className="flex flex-col gap-4 text-white bg-[#161A1D] ">
      <div className="flex justify-between p-4">
        <p className="font-semibold">{t("internetPage.myInternet")}</p>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <defs></defs>
          <path
            d="M4.326 15.934a8.9 8.9 0 004.243 4.25 8.565 8.565 0 005.903.514 8.784 8.784 0 004.877-3.457 9.209 9.209 0 00.751-9.234 9.024 9.024 0 00-2.33-2.983 8.732 8.732 0 00-3.322-1.728 8.587 8.587 0 00-3.719-.167 8.685 8.685 0 00-3.454 1.426m0 0c-1.394.965-2.588 2.383-3.521 4.07m3.52-4.07c-.64.443-1.237.982-1.787 1.598-.641.72-2.007.429-2.135-.526L3 3l.754 5.625m3.52-4.07a10.223 10.223 0 00-1.843 1.662c-.809.92.026 2.2 1.242 2.053l2.177-.263s-2.754.33-5.096.618"
            stroke="#0095da"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
          <path
            d="M9 14.5l3.5-2v-4"
            stroke="#ff4f00"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
          <path
            d="M9 14.5l1.988-1.136a3 3 0 001.512-2.605V8.5"
            stroke="#ff4f00"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col gap-4 bg-[#101214] p-4 ">
        <div className="flex bg-[#161A1D] p-2  justify-between rounded-md">
          <button
            onClick={() => {
              setActiveInternet("internet");
            }}
            className={clsx(
              "flex  items-center px-4 gap-1 justify-center text-[11px]  py-2 rounded-md",
              activeInternet === "internet"
                ? "bg-[#22272B] text-white"
                : "bg-[#161A1D] text-white"
            )}
          >
            <svg
              fill="none"
              viewBox="0 0 56 56"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                d="M24.5 21v14l-5.834-4.667"
                stroke="#ff4f00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <path
                d="M24.5 21v11.503c0 1.007-1.165 1.566-1.95.937l-3.884-3.107M31.499 35V21l5.833 4.667"
                stroke="#ff4f00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <path
                d="M31.499 35V23.497c0-1.006 1.164-1.566 1.95-.937l3.883 3.107"
                stroke="#ff4f00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <path
                d="M25.572 6.016a5 5 0 014.856 0l16 8.889A5 5 0 0149 19.275v17.45a5 5 0 01-2.572 4.37l-16 8.89a5 5 0 01-4.856 0l-16-8.89A5 5 0 017 36.726v-17.45a5 5 0 012.572-4.37l16-8.89z"
                stroke="#0095da"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
            {t("internetPage.internet")}
          </button>
          <button
            onClick={() => {
              setActiveInternet("conversetion");
            }}
            className={clsx(
              "flex items-center justify-center text-[12px] px-4 gap-1  py-2 rounded-md",
              activeInternet === "conversetion"
                ? "bg-[#22272B] text-white"
                : "bg-[#161A1D] text-white"
            )}
          >
            <svg
              fill="none"
              viewBox="0 0 56 56"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                d="M28.947 31.082l-4.001-4.175a2 2 0 01-.252-2.445l.286-.457a2 2 0 00-.173-2.358l-1.95-2.288c-.57-.669-1.518-.888-2.194-.327-1.84 1.527-4.378 5.39 2.683 12.788 6.982 7.315 11.184 5.095 12.973 3.311.68-.677.475-1.735-.27-2.34l-1.881-1.526a2 2 0 00-2.413-.082l-.211.15a2 2 0 01-2.597-.251z"
                stroke="#ff4f00"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <path
                d="M25.572 6.016a5 5 0 014.856 0l16 8.889A5 5 0 0149 19.275v17.45a5 5 0 01-2.572 4.37l-16 8.89a5 5 0 01-4.856 0l-16-8.89A5 5 0 017 36.725v-17.45a5 5 0 012.572-4.37l16-8.89z"
                stroke="#0095da"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
            {t("internetPage.conversetion")}
          </button>
          <button
            onClick={() => {
              setActiveInternet("message");
            }}
            className={clsx(
              "flex  items-center justify-center gap-1 text-[12px]  px-4 py-2 rounded-md",
              activeInternet === "message"
                ? "bg-[#22272B] text-white"
                : "bg-[#161A1D] text-white"
            )}
          >
            <svg
              fill="none"
              viewBox="0 0 56 56"
              xmlns="http://www.w3.org/2000/svg"
              // fit=""
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                d="M19.833 21.704a2 2 0 012-2h13.5a2 2 0 012 2V33.11a2 2 0 01-2 2h-11.75c-.166 0-.332.02-.493.062l-4.424 1.123 1.109-4.505a2 2 0 00.058-.478v-9.61z"
                stroke="#ff4f00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <path
                d="M19.833 21.704a2 2 0 012-2h13.5a2 2 0 012 2V33.11a2 2 0 01-2 2h-11.75c-.166 0-.332.02-.493.062l-2.808.713a1 1 0 01-1.218-1.208l.71-2.887a2 2 0 00.059-.478v-9.61z"
                stroke="#ff4f00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <path
                d="M25.572 6.016a5 5 0 014.856 0l16 8.889A5 5 0 0149 19.275v17.45a5 5 0 01-2.572 4.37l-16 8.89a5 5 0 01-4.856 0l-16-8.89A5 5 0 017 36.725v-17.45a5 5 0 012.572-4.37l16-8.89z"
                stroke="#0095da"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
            {t("internetPage.message")}
          </button>
        </div>
        <div>
          {activeInternet === "internet" && <InternetC />}
          {activeInternet === "conversetion" && <Conversetion />}
          {activeInternet === "message" && <Message />}
        </div>
      </div>
      <BuyPagkege />
      <FooterHeader />
    </div>
  );
};

export default Internet;
