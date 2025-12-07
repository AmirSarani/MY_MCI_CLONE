import React from "react";
import hamrahLogo from "../images/hamrah-e-man-logo.svg";
import { useTranslation } from "react-i18next";

const Otp = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen w-full bg-[#101214] flex flex-col" dir="rtl">
      <div className="pt-12 pb-22 flex justify-center">
        <img
          src={hamrahLogo}
          alt=""
          className="w-[110px] h-[74px] absolute z-1 top-22"
        />
      </div>

      <div className="bg-[#161a1d] w-full flex-1 rounded-t-2xl px-6 py-8">
        <button className="">
          <svg
            className="size-5 opacity-60"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            // fit=""
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <defs></defs>
            <path
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5 12H3"
            ></path>
            <path
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12.818 4L21 12m0 0l-8.182 8M21 12H11M13 20l5.78-5.78c.82-.82.24-2.22-.919-2.22H9"
            ></path>
            <path
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M13 4l5.78 5.78c.82.82.24 2.22-.919 2.22H9"
            ></path>
          </svg>
        </button>
        <div className="pt-5">
          <h2 className="text-white">{t("otpPage.EnterCode")}</h2>
        </div>
        <div className="pt-4">
          <p className="text-white opacity-70">{t("otpPage.CodeSent")}</p>
        </div>
      </div>
    </div>
  );
};

export default Otp;
