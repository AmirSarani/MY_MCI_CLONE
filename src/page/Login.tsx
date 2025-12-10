import React from "react";
import hamrahLogo from "../images/hamrah-e-man-logo.svg";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
// import { useStore } from "zustand";
import { useNumberLogin } from "../store/useStore";

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // const { number, setNumber } = useStore();

  // گرفتن state از Zustand
  const { setNumber } = useNumberLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // وقتی فرم درست بود این اجرا می‌شود
  const onSubmit = (data: any) => {
    console.log("PHONE:", data.phone);
    setNumber(data.phone);

    // اینجا بفرست صفحه بعد:
    navigate("/Otp");
  };

  return (
    <>
      <div className="min-h-screen w-full bg-[#101214] flex flex-col" dir="rtl">
        <div className="pt-12 pb-22 flex justify-center">
          <img
            src={hamrahLogo}
            alt=""
            className="w-[110px] h-[74px] absolute z-1 top-22"
          />
        </div>

        <div className="bg-[#161a1d] w-full flex-1 rounded-t-2xl px-6 py-8">
          <div className="text-right mb-6">
            <p className="text-white font-bold text-[17px]">
              {t("Login.SignUpSignIn")}
            </p>
            <p className="text-[#c7d1db] text-[14px] mt-1">
              {t("Login.PleaseEnterYourMobileNumber")}
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* PHONE INPUT */}
            <div className="w-full mb-3">
              <div className="relative">
                <input
                  {...register("phone", {
                    required: "تلفن همراه لازم است.",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "تلفن همراه لازم است.",
                    },
                    minLength: {
                      value: 10,
                      message: "تلفن همراه لازم است.",
                    },
                    maxLength: {
                      value: 10,
                      message: "تلفن همراه لازم است.",
                    },
                  })}
                  className={`h-12 w-full bg-[#1d2125] rounded-lg pr-3 pl-16 text-white placeholder:text-right placeholder:text-[#c7d1db70] focus:outline-none ${
                    errors.phone ? "border border-red-500" : ""
                  }`}
                  placeholder={t("Login.EnterYourNumber")}
                  maxLength={10}
                />

                {/* Country Code */}
                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center text-white">
                  <span>|</span>
                  <span className="text-[#c7d1db] text-[15px] pl-2">
                    {t("Login.BadgNumber")}
                  </span>
                </div>
              </div>

              {/* Error */}
              {errors.phone && (
                <p className="text-red-400 text-[13px] mt-2 text-right">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="bg-[#28a9ea] w-full h-12 rounded-lg text-white text-[15px] font-medium mt-56"
            >
              تایید و دریافت کد
            </button>
          </form>

          {/* Login with password */}
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
    </>
  );
}

export default Login;
