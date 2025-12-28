import React from "react";
import hamrahLogo from "../images/hamrah-e-man-logo.svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useNumberLogin } from "../store/useStore";

const Otp = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { number } = useNumberLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = () => {
    navigate("/Home");
  };

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
        <button
          className=""
          onClick={() => {
            navigate("/Login");
          }}
        >
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
          <p className="text-white opacity-70">
            {t("otpPage.CodeSent", { number: number })}
          </p>
        </div>

        <form onSubmit={handleSubmit(onsubmit)} dir="ltr">
          <div className="w-full bg-[#161a1d] flex gap-[8px] justify-center items-center mt-[30px]">
            <input
              type="text"
              // className="w-[72px] h-[48px] bg-[#1D2125] rounded-[8px] text-white placeholder:text-white text-center text-[18px] outline-none appearance-none caret-white"
              {...register("i1", { required: true })}
              maxLength={1}
              className={`w-[72px] h-[48px] bg-[#1D2125] rounded-[8px] 
              text-white text-center text-[18px] outline-none
              placeholder:text-white appearance-none caret-white
              ${
                errors.i1
                  ? "border border-red-500"
                  : "border border-transparent"
              }`}
            />

            <input
              type="text"
              {...register("i2", { required: true })}
              maxLength={1}
              className={`w-[72px] h-[48px] bg-[#1D2125] rounded-[8px] 
              text-white text-center text-[18px] outline-none
              placeholder:text-white appearance-none caret-white
              ${
                errors.i2
                  ? "border border-red-500"
                  : "border border-transparent"
              }`}
            />
            <input
              type="text"
              {...register("i3", { required: true })}
              maxLength={1}
              className={`w-[72px] h-[48px] bg-[#1D2125] rounded-[8px] 
              text-white text-center text-[18px] outline-none
              placeholder:text-white appearance-none caret-white
              ${
                errors.i3
                  ? "border border-red-500"
                  : "border border-transparent"
              }`}
            />
            <input
              type="text"
              {...register("i4", { required: true })}
              maxLength={1}
              className={`w-[72px] h-[48px] bg-[#1D2125] rounded-[8px] 
              text-white text-center text-[18px] outline-none
              placeholder:text-white appearance-none caret-white
              ${
                errors.i4
                  ? "border border-red-500"
                  : "border border-transparent"
              }`}
            />
            <input
              type="text"
              {...register("i5", { required: true })}
              maxLength={1}
              className={`w-[72px] h-[48px] bg-[#1D2125] rounded-[8px] 
              text-white text-center text-[18px] outline-none
              placeholder:text-white appearance-none caret-white
              ${
                errors.i5
                  ? "border border-red-500"
                  : "border border-transparent"
              }`}
            />
          </div>

          <button
            type="submit"
            className="bg-[#28a9ea] w-full h-12 rounded-lg text-white text-[15px] font-medium mt-56"
          >
            تایید و دریافت کد
          </button>
        </form>

        <div className="flex items-center justify-center mt-6">
          <div className="bg-[#22272b] flex items-center gap-2 px-3 py-2 rounded-lg">
            <svg className="size-5" fill="none" viewBox="0 0 24 24">
              <path
                stroke="#c7d1db"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8.333 11.833H6M6.342 13l1.65-2.333m-1.65 0L7.992 13M13.167 11.833h-2.333M11.176 13l1.65-2.333m-1.65 0L12.826 13M18 11.833h-2.334M16.008 13l1.65-2.333m-1.65 0L17.658 13"
              ></path>
              <path
                stroke="#c7d1db"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 15V9a3 3 0 00-3-3H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3z"
              ></path>
            </svg>

            <button className="text-[14px] text-[#c7d1db]">
              {t("Login.LoginWithPassword")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
