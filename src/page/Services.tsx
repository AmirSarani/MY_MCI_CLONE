import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
// import "../css/swiper.css";
// import "swiper/css";
// import "swiper/css/pagination";
// import { FreeMode, Pagination } from "swiper/modules";
// import MyImg from "../images/forFirstSliderHamrah.jpg";
import { motion } from "framer-motion";
import clsx from "clsx";
import FooterHeader from "../components/FooterHeader";
// import NavarBottom from "../Components/NavarBottem";
const Services = () => {
  const { t } = useTranslation();
  const [activeNvarService, setActiveNvarService] = useState<
    | "usefulService"
    | "simcardService"
    | "convertionService"
    | "messageService"
    | "digicalService"
    | "elseService"
  >("usefulService");
  return (
    <div dir="rtl" className="flex flex-col  gap-2 text-white">
      <div className="flex flex-col gap-2 sticky top-0 z-10 bg-[#161A1D]">
        <p className="font-semibold p-4">{t("servicesPage.services")}</p>
        <div className=" px-1 rounded-lg">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={0}
            freeMode={true}
            className=" *:pt-3 *:text-center h-14"
          >
            <SwiperSlide>
              <a
                href="#service1"
                onClick={() => {
                  setActiveNvarService("usefulService");
                }}
                className={clsx(
                  "border  rounded-full p-2 ",
                  activeNvarService === "usefulService"
                    ? "bg-blue-400 "
                    : "bg-[#161A1D] border border-gray-300"
                )}
              >
                {t("servicesPage.usefulService")}
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="#service2"
                onClick={() => {
                  setActiveNvarService("simcardService");
                }}
                className={clsx(
                  "  rounded-full p-2 ",
                  activeNvarService === "simcardService"
                    ? "bg-blue-400 "
                    : "bg-[#161A1D] border border-gray-300"
                )}
              >
                {t("servicesPage.simcardService")}
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="#service3"
                onClick={() => {
                  setActiveNvarService("convertionService");
                }}
                className={clsx(
                  "  rounded-full p-2 ",
                  activeNvarService === "convertionService"
                    ? "bg-blue-400 "
                    : "bg-[#161A1D] border border-gray-300"
                )}
              >
                {t("servicesPage.convertionService")}
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="#service4"
                onClick={() => {
                  setActiveNvarService("messageService");
                }}
                className={clsx(
                  "  rounded-full p-2 ",
                  activeNvarService === "messageService"
                    ? "bg-blue-400 "
                    : "bg-[#161A1D] border border-gray-300"
                )}
              >
                {t("servicesPage.messageService")}
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="#service5"
                onClick={() => {
                  setActiveNvarService("digicalService");
                }}
                className={clsx(
                  "  rounded-full p-2 ",
                  activeNvarService === "digicalService"
                    ? "bg-blue-400 "
                    : "bg-[#161A1D] border border-gray-300"
                )}
              >
                {t("servicesPage.digicalService")}
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="#service6"
                onClick={() => {
                  setActiveNvarService("elseService");
                }}
                className={clsx(
                  "  rounded-full p-2 ",
                  activeNvarService === "elseService"
                    ? "bg-blue-400 "
                    : "bg-[#161A1D] border border-gray-300"
                )}
              >
                {t("servicesPage.elseService")}
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col bg-[#101214] p-4 gap-4  pb-24">
        <div id="service1" className="flex gap-3 items-center font-semibold">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>{" "}
          <span>{t("servicesPage.usefulService")}</span>
        </div>
        <div className="bg-[#161A1D] p-4 grid grid-cols-4 gap-4 rounded-lg">
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
              <svg
                fill="none"
                viewBox="0 0 25 24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <g
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path
                    stroke="#0095da"
                    d="M5.667 21h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3a2 2 0 00-2 2v3a2 2 0 002 2zM16.667 21h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3a2 2 0 00-2 2v3a2 2 0 002 2zM3.667 8V5a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2z"
                  ></path>
                  <path
                    stroke="#ff4f00"
                    d="M14.667 9.176V6.5a3.5 3.5 0 113.5 3.5H15.49a.824.824 0 01-.823-.824z"
                  ></path>
                  <path
                    stroke="#ff4f00"
                    d="M19.167 6.5a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </g>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.serviceInLocation")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.5 11h-.202c-.82 0-1.596-.373-2.11-1.014l-2.377-2.972A2.702 2.702 0 008.701 6H8.5A2.5 2.5 0 006 8.5v0A2.5 2.5 0 008.5 11h.202c.82 0 1.596-.373 2.11-1.014l2.377-2.972A2.701 2.701 0 0115.299 6h.201A2.5 2.5 0 0118 8.5v0a2.5 2.5 0 01-2.5 2.5z"
                ></path>
                <g
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M16.5 21h.5a4 4 0 004-4V7a4 4 0 00-4-4H7a4 4 0 00-4 4v10a4 4 0 004 4h.5M9 17.068L12 14m0 0l3 3.068M12 14v6"></path>
                  <path d="M15 17l-.78-.78c-.82-.82-2.22-.24-2.22.919V18.5M9 17l.78-.78c.82-.82 2.22-.24 2.22.919V21"></path>
                </g>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.becomeToForever")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8.5 2.5H7a3 3 0 00-3 3v11a3 3 0 003 3h3m-1.5-17L9 3h2l.5-.5m-3 0h3m0 0H13a3 3 0 013 3V9"
                ></path>
                <path
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 15h1.5m2.3 0h.2M13 18h1.5m2.3 0h.2M13 12h1.5m2.3 0h.2"
                ></path>
                <path
                  fill="#ff4f00"
                  d="M16.585 21.5v.75a.75.75 0 00.707-.5l-.707-.25zm-.172 0l-.706.252a.75.75 0 00.706.498v-.75zm2.787-.4l-.6.45a.75.75 0 001.05.15l-.45-.6zm-8.4 0l-.45.6a.75.75 0 001.05-.15l-.6-.45zm2.615.4l-.707.25c.105.3.389.5.707.5v-.75zm.172 0v.75c.317 0 .6-.2.706-.498l-.706-.252zm2.998-.75h-.172v1.5h.172v-1.5zm.707 1a.75.75 0 01.708-.5v-1.5a2.25 2.25 0 00-2.122 1.5l1.415.5zm.708-.5c.245 0 .462.116.6.3l1.2-.9a2.248 2.248 0 00-1.8-.9v1.5zm1.25-1.75c0 .408-.195.771-.5 1l.9 1.2c.667-.5 1.1-1.3 1.1-2.2h-1.5zm0-8.5v8.5h1.5V11h-1.5zM18 9.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0018 8.25v1.5zm-6 0h6v-1.5h-6v1.5zM10.75 11c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 009.25 11h1.5zm0 8.5V11h-1.5v8.5h1.5zm.5 1c-.305-.229-.5-.592-.5-1h-1.5c0 .9.433 1.7 1.1 2.2l.9-1.2zm.75-.75c-.737 0-1.39.355-1.8.9l1.2.9a.748.748 0 01.6-.3v-1.5zm2.122 1.5A2.25 2.25 0 0012 19.75v1.5a.75.75 0 01.707.5l1.415-.5zm-.535-.5h-.172v1.5h.172v-1.5zm.706 1.002a.75.75 0 01.707-.498v-1.5a2.25 2.25 0 00-2.12 1.494l1.413.504zm.707-.498a.75.75 0 01.707.498l1.413-.504A2.25 2.25 0 0015 19.754v1.5z"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">
              {t("servicesPage.summeryPerformance")}
            </p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
              <svg
                fill="none"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <path
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M26 17.333v-6.666m3.333 5v-3.334m-6.666 3.334v-3.334"
                ></path>
                <path
                  stroke="#0095da"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13.793 23.398L8.98 18.377a2 2 0 01-.161-2.578l1-1.345a2 2 0 00-.082-2.49L7.32 9.123c-.57-.668-1.516-.885-2.208-.344-2.107 1.65-5.378 6.072 2.903 14.748 8.203 8.593 13.048 5.672 14.992 3.614.658-.698.454-1.751-.29-2.356l-2.51-2.035a2 2 0 00-2.403-.089l-1.424.993a2 2 0 01-2.587-.258z"
                ></path>
                <path
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19.333 12A4.666 4.666 0 1124 7.333m-6.047.953l1.38-.952V5.632"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.waitingForSong")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
              <svg
                fill="none"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <path
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M11.333 2.667h-2a4 4 0 00-4 4v16a4 4 0 004 4H10m1.333-24l.667.666h2.667l.666-.667m-4 0h4m0 0h2a4 4 0 014 4V18"
                ></path>
                <path
                  fill="#ff4f00"
                  fillRule="evenodd"
                  d="M12.7 20a.7.7 0 00-.7.7v5.6a.7.7 0 00.7.7h2.8a.7.7 0 100-1.4h-2.1v-4.9a.7.7 0 00-.7-.7zm7 1.4H19v4.9a.7.7 0 11-1.4 0v-4.9h-.7a.7.7 0 110-1.4h2.8a.7.7 0 110 1.4zm3.5 0h2.1a.7.7 0 100-1.4h-2.8a.7.7 0 00-.7.7v5.6a.7.7 0 00.7.7h2.8a.7.7 0 100-1.4h-2.1v-1.4h2.1a.7.7 0 100-1.4h-2.1v-1.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.VoLTEViLTE")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
              <svg
                fill="none"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <path
                  fill="#0095da"
                  d="M20.29 4.482a.75.75 0 10-1.064 1.058 9.75 9.75 0 010 13.792.75.75 0 001.065 1.058 11.25 11.25 0 000-15.908zM2.584 12.44a9.75 9.75 0 012.858-6.893.753.753 0 10-1.065-1.065 11.25 11.25 0 000 15.908.75.75 0 001.065-1.058 9.75 9.75 0 01-2.858-6.892z"
                ></path>
                <path
                  fill="#ff4f00"
                  d="M17.628 7.137a.75.75 0 10-1.057 1.065 6 6 0 010 8.475.75.75 0 001.057 1.065 7.5 7.5 0 000-10.605zm-9.532 0a.75.75 0 00-1.058 0 7.5 7.5 0 000 10.605.75.75 0 001.058-1.065 6 6 0 010-8.475.75.75 0 000-1.065zm6.615 4.62L10.96 9.59a.75.75 0 00-1.125.652v4.328a.75.75 0 001.125.652l3.75-2.167a.75.75 0 000-1.298zm-3.375 1.5V11.54l1.5.862-1.5.855z"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.withCinama")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                  d="M3 17c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93c0-1.33-.53-2.6-1.46-3.54l-3.07-3.07A5.036 5.036 0 0012.93 2H8C5 2 3 4 3 7v5.98"
                  stroke="#0095DA"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
                <path
                  d="M10 18.5h4c1.65 0 3-1.35 3-3v-3c0-1.65-1.35-3-3-3h-4c-1.65 0-3 1.35-3 3v3c0 1.65 1.35 3 3 3zM12 9.5v9M7.5 14h9"
                  stroke="#FF4F00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.billForOther")}</p>
          </div>
        </div>
        <div className="flex justify-between *:rounded-lg">
          <img
            _ngcontent-ng-c2146617534=""
            width="77px"
            height="97px"
            alt="banner"
            className="object-scale-down rounded-lg"
            loading="eager"
            ng-img="true"
            src="https://my.mci.ir/assets/banner/4.jpg"
          ></img>

          <img
            _ngcontent-ng-c2146617534=""
            width="77px"
            height="97px"
            alt="banner"
            className="object-scale-down rounded-lg"
            loading="eager"
            ng-img="true"
            src="https://my.mci.ir/assets/banner/2.jpg"
          ></img>

          <img
            _ngcontent-ng-c2146617534=""
            width="77px"
            height="97px"
            alt="banner"
            className="object-scale-down rounded-lg"
            loading="eager"
            ng-img="true"
            src="https://my.mci.ir/assets/banner/1.jpg"
          ></img>

          <img
            _ngcontent-ng-c2146617534=""
            width="77px"
            height="97px"
            alt="banner"
            className="object-scale-down rounded-lg"
            loading="eager"
            ng-img="true"
            src="https://my.mci.ir/assets/banner/80a81d7e-f64d-4b69-b2a7-b2dee2009899.jpg"
          ></img>
        </div>
        <div
          id="service2"
          className="flex gap-3 items-center font-semibold pt-4"
        >
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>{" "}
          <span>{t("servicesPage.simcardService")}</span>
        </div>
        <div className="bg-[#161A1D] p-4 grid grid-cols-4 gap-2 rounded-lg">
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M20 14.5v-3.32a4 4 0 00-1.002-2.648l-2.81-3.18A4 4 0 0013.19 4H6a4 4 0 00-4 4v6a4 4 0 004 4h8"
                ></path>
                <path
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6.5 14.5h5a1 1 0 001-1v-4a1 1 0 00-1-1h-5a1 1 0 00-1 1v4a1 1 0 001 1z"
                ></path>
                <path
                  fill="#ff4f00"
                  d="M14.824 15.248a.75.75 0 00.745-1.303l-.745 1.303zm.914-1.39a.75.75 0 001.5 0h-1.5zm-1.726 1.051l-.647-.378.647.378zm.29 1.199a.75.75 0 10-.744 1.302l.744-1.302zm-.686-.52l-.648-.377.648.378zm.314 1.171l-.372.651.372-.65zm-.314 2.652l-.647.378.647-.378zm7.06.34a.75.75 0 10-.743 1.303l.744-1.302zm-.371.652l-.372.651.372-.651zm.894-1.512a.75.75 0 00.744-1.302l-.744 1.302zm.685.519l.648.378-.648-.378zm-.313-1.17l-.372.651.372-.65zm-3.415-5.99h-.81v1.5h.81v-1.5zm4.377 2.962l-.397-.68-1.296.755.397.68 1.296-.755zm-1.296 3.82l-.397.68 1.296.756.396-.68-1.295-.756zm-3.891 3.718h.81v-1.5h-.81v1.5zm-4.377-2.961l.396.68 1.296-.757-.397-.679-1.295.756zm1.295-3.823l.396-.679-1.295-.756-.397.68 1.296.755zm.56-.718c1.059.604 2.414-.141 2.414-1.39h-1.5a.09.09 0 01-.012.049.125.125 0 01-.1.055.108.108 0 01-.057-.017l-.745 1.303zm-.164.04a.122.122 0 01.164-.04l.745-1.303a1.622 1.622 0 00-2.204.586l1.295.756zm-.358.82a.103.103 0 01-.038-.142l-1.296-.755a1.603 1.603 0 00.59 2.2l.744-1.303zm0 2.784a1.603 1.603 0 000-2.784l-.744 1.302c.07.04.069.14 0 .18l.744 1.302zm-.038.141a.103.103 0 01.038-.141l-.744-1.303a1.603 1.603 0 00-.59 2.2l1.296-.756zm.56.72a.122.122 0 01-.163-.04l-1.296.755a1.622 1.622 0 002.204.586l-.745-1.302zm2.414 1.39c0-1.25-1.355-1.996-2.414-1.39l.745 1.301a.109.109 0 01.058-.016.125.125 0 01.1.055.09.09 0 01.011.05h1.5zm.108.107a.107.107 0 01-.108-.107h-1.5c0 .887.72 1.607 1.608 1.607v-1.5zm.917-.107c0 .059-.048.107-.107.107v1.5c.888 0 1.607-.72 1.607-1.607h-1.5zm2.414-1.391c-1.06-.605-2.414.142-2.414 1.39h1.5a.09.09 0 01.013-.05.124.124 0 01.1-.055c.015 0 .034.004.057.017l.744-1.302zm.163-.04a.121.121 0 01-.163.04l-.744 1.302a1.621 1.621 0 002.203-.586l-1.296-.756zm.359-.82c.05.028.066.09.038.14l1.295.756a1.603 1.603 0 00-.589-2.199l-.744 1.302zm0-2.784a1.603 1.603 0 000 2.783l.744-1.302a.103.103 0 010-.178l-.744-1.303zm.038-.14a.103.103 0 01-.038.14l.744 1.303a1.603 1.603 0 00.59-2.2l-1.296.756zm-.56-.72a.122.122 0 01.163.04l1.296-.756a1.621 1.621 0 00-2.203-.587l.744 1.303zm-2.414-1.39c0 1.248 1.355 1.995 2.414 1.39l-.744-1.303a.109.109 0 01-.058.017.125.125 0 01-.1-.055.09.09 0 01-.012-.05h-1.5zm-.917-1.608c-.888 0-1.608.72-1.608 1.607h1.5c0-.059.048-.107.108-.107v-1.5zm.81 1.5c.06 0 .107.048.107.107h1.5c0-.887-.72-1.607-1.607-1.607v1.5z"
                ></path>
                <path
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M17.75 18.5a1 1 0 100-2 1 1 0 000 2z"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.manageSimCard")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                <g stroke="#ff4f00" strokeLinecap="round" strokeWidth="1.5">
                  <path d="M6.998 11.998h10.004M12 17a5.002 5.002 0 100-10.004A5.002 5.002 0 0012 17z"></path>
                  <path d="M12 17c1.105 0 2-2.24 2-5.002 0-2.762-.895-5.002-2-5.002s-2 2.24-2 5.002c0 2.763.895 5.002 2 5.002z"></path>
                </g>
                <path
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7z"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.roming")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8.5 2.5H7a3 3 0 00-3 3v11a3 3 0 003 3h3m-1.5-17L9 3h2l.5-.5m-3 0h3m0 0H13a3 3 0 013 3V9"
                ></path>
                <path
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 15h1.5m2.3 0h.2M13 18h1.5m2.3 0h.2M13 12h1.5m2.3 0h.2"
                ></path>
                <path
                  fill="#ff4f00"
                  d="M16.585 21.5v.75a.75.75 0 00.707-.5l-.707-.25zm-.172 0l-.706.252a.75.75 0 00.706.498v-.75zm2.787-.4l-.6.45a.75.75 0 001.05.15l-.45-.6zm-8.4 0l-.45.6a.75.75 0 001.05-.15l-.6-.45zm2.615.4l-.707.25c.105.3.389.5.707.5v-.75zm.172 0v.75c.317 0 .6-.2.706-.498l-.706-.252zm2.998-.75h-.172v1.5h.172v-1.5zm.707 1a.75.75 0 01.708-.5v-1.5a2.25 2.25 0 00-2.122 1.5l1.415.5zm.708-.5c.245 0 .462.116.6.3l1.2-.9a2.248 2.248 0 00-1.8-.9v1.5zm1.25-1.75c0 .408-.195.771-.5 1l.9 1.2c.667-.5 1.1-1.3 1.1-2.2h-1.5zm0-8.5v8.5h1.5V11h-1.5zM18 9.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0018 8.25v1.5zm-6 0h6v-1.5h-6v1.5zM10.75 11c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 009.25 11h1.5zm0 8.5V11h-1.5v8.5h1.5zm.5 1c-.305-.229-.5-.592-.5-1h-1.5c0 .9.433 1.7 1.1 2.2l.9-1.2zm.75-.75c-.737 0-1.39.355-1.8.9l1.2.9a.748.748 0 01.6-.3v-1.5zm2.122 1.5A2.25 2.25 0 0012 19.75v1.5a.75.75 0 01.707.5l1.415-.5zm-.535-.5h-.172v1.5h.172v-1.5zm.706 1.002a.75.75 0 01.707-.498v-1.5a2.25 2.25 0 00-2.12 1.494l1.413.504zm.707-.498a.75.75 0 01.707.498l1.413-.504A2.25 2.25 0 0015 19.754v1.5z"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">
              {t("servicesPage.summeryPerformance")}
            </p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9.125 17.561v2.062c0 .613.318 1.158.81 1.5a1.56 1.56 0 011.215-.563c.661 0 1.224.392 1.432.938h.175c.21-.545.77-.934 1.43-.934.66 0 1.222.39 1.431.934h.175c.208-.547.77-.938 1.432-.938.497 0 .938.221 1.215.563.492-.342.81-.887.81-1.5V14M13.5 6.312h3.75a2 2 0 012 2v1.47"
                ></path>
                <g stroke="#0095da" strokeLinejoin="round" strokeWidth="1.5">
                  <path d="M15.821 10.037l-2.487-2.595a1.578 1.578 0 01-.199-1.93A1.578 1.578 0 0013 3.653l-.876-1.027c-.57-.669-1.538-.894-2.143-.257-1.14 1.2-2.127 3.746 2.154 8.23 4.206 4.407 6.906 3.646 8.278 2.579.757-.59.55-1.668-.196-2.272l-.773-.628a1.446 1.446 0 00-1.744-.059 1.446 1.446 0 01-1.878-.181z"></path>
                  <path
                    strokeLinecap="round"
                    d="M16.357 14v1.135a2 2 0 01-2 2h-7.39c-.168 0-.335.021-.498.063l-2.969.764.747-3.073a2 2 0 00.057-.473V8.31a2 2 0 012-2H9"
                  ></path>
                </g>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.smallConvertion")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.5 11h-.202c-.82 0-1.596-.373-2.11-1.014l-2.377-2.972A2.702 2.702 0 008.701 6H8.5A2.5 2.5 0 006 8.5v0A2.5 2.5 0 008.5 11h.202c.82 0 1.596-.373 2.11-1.014l2.377-2.972A2.701 2.701 0 0115.299 6h.201A2.5 2.5 0 0118 8.5v0a2.5 2.5 0 01-2.5 2.5z"
                ></path>
                <g
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M16.5 21h.5a4 4 0 004-4V7a4 4 0 00-4-4H7a4 4 0 00-4 4v10a4 4 0 004 4h.5M9 17.068L12 14m0 0l3 3.068M12 14v6"></path>
                  <path d="M15 17l-.78-.78c-.82-.82-2.22-.24-2.22.919V18.5M9 17l.78-.78c.82-.82 2.22-.24 2.22.919V21"></path>
                </g>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.becomeToForever")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.5 19H7a4 4 0 01-4-4V7a4 4 0 014-4h8a4 4 0 014 4v6.222"
                ></path>
                <g stroke="#ff4f00" strokeWidth="1.5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.5 8v6L7 12"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.5 8v3.503c0 1.006-1.164 1.566-1.95.937L7 12M12.5 14V8l2.5 2"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.5 14v-3.503c0-1.006 1.164-1.566 1.95-.937L15 10"
                  ></path>
                  <path
                    strokeLinecap="round"
                    d="M21.11 16.934c.448.23.742.513.847.816.105.303.017.614-.254.895s-.714.52-1.274.69c-.561.17-1.217.261-1.889.265a6.885 6.885 0 01-1.9-.245c-.57-.163-1.024-.398-1.31-.676-.284-.278-.388-.588-.299-.892.09-.305.37-.591.805-.825"
                  ></path>
                  <path
                    strokeLinecap="round"
                    d="M21.11 19.334c.448.23.741.512.847.815.105.303.017.613-.252.894-.27.281-.711.52-1.27.69-.56.17-1.214.262-1.885.267a6.897 6.897 0 01-1.9-.242c-.57-.162-1.025-.396-1.313-.673-.287-.277-.394-.586-.308-.89.086-.305.362-.591.794-.826"
                  ></path>
                  <ellipse cx="18.5" cy="15.6" rx="3.5" ry="1.6"></ellipse>
                </g>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.countFree")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                <g
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <g stroke="#ff4f00">
                    <path d="M12.029 11H7M11 14.5H7M12.029 7.5H7M14.771 7.5h.23M14.771 11h.23"></path>
                  </g>
                  <path
                    stroke="#0095da"
                    d="M14 19.5H6.5a3 3 0 01-3-3v-10a3 3 0 013-3h9a3 3 0 013 3v7"
                  ></path>
                  <g stroke="#ff4f00">
                    <path d="M21.5 17.5a4 4 0 11-8 0 4 4 0 018 0zM20.304 14.96l-5.346 5.347"></path>
                  </g>
                </g>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.blackList")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M11 16.445H6a3 3 0 01-3-3V7a3 3 0 013-3h7.197a3 3 0 012.249 1.014l2.802 3.172A3 3 0 0119 10.172V12.5"
                ></path>
                <path
                  fill="#ff4f00"
                  d="M18.6 18.575l.531.528-.532-.528zm-3.155.563a3.694 3.694 0 01-3.694-3.694h-1.5a5.194 5.194 0 005.194 5.194v-1.5zm-3.694-3.694a3.694 3.694 0 013.694-3.694v-1.5a5.194 5.194 0 00-5.194 5.194h1.5zm3.694-3.694a3.694 3.694 0 013.694 3.694h1.5a5.194 5.194 0 00-5.194-5.194v1.5zm3.694 3.694a3.68 3.68 0 01-1.072 2.602l1.064 1.057a5.18 5.18 0 001.508-3.659h-1.5zm-1.072 2.602a3.68 3.68 0 01-2.622 1.092v1.5a5.18 5.18 0 003.686-1.535l-1.064-1.057z"
                ></path>
                <path
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17 15.5a1.496 1.496 0 01-1.5 1.5M15.445 19.891c.69 0 1.345-.158 1.928-.439.751-.362 1.704-.392 2.29.2L21 21.003M19.889 15.444c0 .688-.157 1.34-.436 1.922-.356.742-.387 1.68.192 2.265L21 21M21 21.002l-2.41-2.416M6 7v2.456C6 10.309 6.691 11 7.544 11v0c.853 0 1.545-.691 1.545-1.544V9m0-2v2m0 0C9.089 10.232 10 11 10 11"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.checkUsim")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                <g
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M12.2 16.444H6a3 3 0 01-3-3V7a3 3 0 013-3h7.197a3 3 0 012.249 1.014l2.802 3.172A3 3 0 0119 10.172V11.5"></path>
                  <path d="M11.675 13.333H7.11a1 1 0 01-1-1V9a1 1 0 011-1h4.222a1 1 0 011 1v3.001"></path>
                </g>
                <path
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12.043 11.98s3.086.336 4.457-1.98c1.371 2.316 4.457 1.98 4.457 1.98C21.514 19.841 16.5 21 16.5 21s-5.014-1.158-4.457-9.02z"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.takeCareOfLine")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
              <svg
                fill="none"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <path
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M22.458 22.455L16 28.913M9.542 9.538L16 3.08m6.458 6.458l6.459 6.459M9.541 22.455l-6.458-6.458"
                ></path>
                <path
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M16 16v12.261a1.333 1.333 0 01-2.04 1.13l-3.976-2.484a2.667 2.667 0 01-.51-4.108L16 16zm0 0V3.739a1.333 1.333 0 012.04-1.13l3.976 2.484a2.667 2.667 0 01.51 4.108L16 16zm0-.002H3.739a1.333 1.333 0 01-1.13-2.04l2.484-3.976a2.667 2.667 0 014.108-.51L16 15.997zm0 .004h12.26a1.333 1.333 0 011.131 2.04l-2.485 3.976a2.667 2.667 0 01-4.108.51L16 16.003z"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.bomino")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                  d="M3 17c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93c0-1.33-.53-2.6-1.46-3.54l-3.07-3.07A5.036 5.036 0 0012.93 2H8C5 2 3 4 3 7v5.98"
                  stroke="#0095DA"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
                <path
                  d="M10 18.5h4c1.65 0 3-1.35 3-3v-3c0-1.65-1.35-3-3-3h-4c-1.65 0-3 1.35-3 3v3c0 1.65 1.35 3 3 3zM12 9.5v9M7.5 14h9"
                  stroke="#FF4F00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.billForOther")}</p>
          </div>
        </div>
        <div className=" ">
          {/* <img className="rounded-lg w-full h-full" src={MyImg} alt="" /> */}
          <img
            _ngcontent-ng-c2146617534=""
            alt="banner"
            width="1040"
            height="176.81"
            className="w-full rounded-lg  my-4"
            loading="eager"
            ng-img="true"
            src="https://assets-prod-newmy.mci.ir/assets/banners/42e016201e64f6c0bc6149d823504d82.png"
          ></img>
        </div>
        <div
          id="service3"
          className="flex gap-3 items-center font-semibold pt-4"
        >
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>{" "}
          <span>{t("servicesPage.convertionService")}</span>
        </div>
        <div className="bg-[#161A1D] p-4 grid grid-cols-4  rounded-lg">
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                <g strokeLinecap="round" strokeWidth="1.5">
                  <g stroke="#ff4f00">
                    <path d="M10 12a2 2 0 11-4.001 0A2 2 0 0110 12h0z"></path>
                    <path strokeLinejoin="round" d="M8.5 14h7"></path>
                    <path d="M18 12a2 2 0 11-4.001 0A2 2 0 0118 12h0z"></path>
                  </g>
                  <g stroke="#0095da" strokeLinejoin="round">
                    <path d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7z"></path>
                    <path d="M21 14v3a4 4 0 01-2.132 3.538c-1.065.564-2.248-.17-2.868-1.205v0a1.716 1.716 0 00-1.472-.833H9.472c-.603 0-1.162.316-1.472.833v0c-.62 1.034-1.803 1.769-2.868 1.205A4 4 0 013 17v-3"></path>
                  </g>
                </g>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.voiceMail")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                  stroke="#ff4f00"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12.957 13.33l-1.99-2.077a1.262 1.262 0 01-.159-1.543 1.262 1.262 0 00-.109-1.488l-.509-.597c-.57-.669-1.558-.899-2.099-.207-.81 1.038-1.262 3.03 1.916 6.36 3.177 3.328 5.279 2.972 6.428 2.204.754-.504.556-1.538-.149-2.11l-.431-.35a1.157 1.157 0 00-1.396-.047 1.157 1.157 0 01-1.502-.145z"
                ></path>
                <g
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7z"></path>
                  <path d="M21 13V6.863c0-1.426-1.723-2.14-2.731-1.132L12.75 11.25"></path>
                  <path d="M12.5 11.5l5.769-5.769C19.277 4.723 18.563 3 17.137 3H11.5"></path>
                  <g>
                    <path d="M3 11v6.137c0 1.426 1.723 2.14 2.731 1.132l5.519-5.519"></path>
                    <path d="M11.5 12.5l-5.769 5.769C4.723 19.277 5.437 21 6.863 21H12.5M19.5 4.5l-15 15"></path>
                  </g>
                </g>
              </svg>
            </div>
            <p className="text-[10px]">
              {t("servicesPage.convertionLimitation")}
            </p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center px-4 overflow-hidden">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                <g stroke="#ff4f00" strokeLinecap="round" strokeWidth="1.5">
                  <path d="M7 12.002h10.004M12.002 17.004a5.002 5.002 0 100-10.004 5.002 5.002 0 000 10.004z"></path>
                  <path d="M12.002 17.004c1.105 0 2-2.24 2-5.002 0-2.763-.895-5.002-2-5.002s-2 2.24-2 5.002c0 2.762.895 5.002 2 5.002z"></path>
                </g>
                <g
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7z"></path>
                  <path d="M21 13V6.863c0-1.426-1.723-2.14-2.731-1.132L12.75 11.25"></path>
                  <path d="M12.5 11.5l5.769-5.769C19.277 4.723 18.563 3 17.137 3H11.5"></path>
                  <g>
                    <path d="M3 11v6.137c0 1.426 1.723 2.14 2.731 1.132l5.519-5.519"></path>
                    <path d="M11.5 12.5l-5.769 5.769C4.723 19.277 5.437 21 6.863 21H12.5M19.5 4.5l-15 15"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className=" overflow-hidden w-30 ">
              <motion.p
                initial={{ x: -100 }}
                animate={{ x: 100 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className=" text-[10px]"
              >
                {t("servicesPage.convertionLimitationNatinal")}
              </motion.p>
            </div>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
              <svg
                fill="none"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <path
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M26 17.333v-6.666m3.333 5v-3.334m-6.666 3.334v-3.334"
                ></path>
                <path
                  stroke="#0095da"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13.793 23.398L8.98 18.377a2 2 0 01-.161-2.578l1-1.345a2 2 0 00-.082-2.49L7.32 9.123c-.57-.668-1.516-.885-2.208-.344-2.107 1.65-5.378 6.072 2.903 14.748 8.203 8.593 13.048 5.672 14.992 3.614.658-.698.454-1.751-.29-2.356l-2.51-2.035a2 2 0 00-2.403-.089l-1.424.993a2 2 0 01-2.587-.258z"
                ></path>
                <path
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19.333 12A4.666 4.666 0 1124 7.333m-6.047.953l1.38-.952V5.632"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.waitingForSong")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-#22272B p-2 rounded-lg">
              <svg
                fill="none"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <path
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M11.333 2.667h-2a4 4 0 00-4 4v16a4 4 0 004 4H10m1.333-24l.667.666h2.667l.666-.667m-4 0h4m0 0h2a4 4 0 014 4V18"
                ></path>
                <path
                  fill="#ff4f00"
                  fillRule="evenodd"
                  d="M12.7 20a.7.7 0 00-.7.7v5.6a.7.7 0 00.7.7h2.8a.7.7 0 100-1.4h-2.1v-4.9a.7.7 0 00-.7-.7zm7 1.4H19v4.9a.7.7 0 11-1.4 0v-4.9h-.7a.7.7 0 110-1.4h2.8a.7.7 0 110 1.4zm3.5 0h2.1a.7.7 0 100-1.4h-2.8a.7.7 0 00-.7.7v5.6a.7.7 0 00.7.7h2.8a.7.7 0 100-1.4h-2.1v-1.4h2.1a.7.7 0 100-1.4h-2.1v-1.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <p className="text-[10px]">{t("servicesPage.VoLTEViLTE")}</p>
          </div>
        </div>
        <div
          id="service4"
          className="flex gap-3 items-center font-semibold pt-4"
        >
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>{" "}
          <span>{t("servicesPage.messageService")}</span>
        </div>
        <div className="bg-[#161A1D] p-4 grid grid-cols-4  rounded-lg">
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                <g
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <g stroke="#ff4f00">
                    <path d="M10 16v-2l1.5 1.5L13 14v2M6.5 13l1-.5V16"></path>
                    <path d="M16.5 17.5v0a2 2 0 002-2V9a3 3 0 00-3-3H7.438C6.368 6 5.5 6.868 5.5 7.938v0"></path>
                    <path d="M18.5 15v0a2.5 2.5 0 002.5-2.5V8a4.5 4.5 0 00-4.5-4.5H11A2.5 2.5 0 008.5 6v0"></path>
                  </g>
                  <g stroke="#0095da">
                    <path d="M3.772 17.241l-.195.824a1.5 1.5 0 001.842 1.796l.643-.17c.125-.032.253-.05.382-.05H14.5a1.5 1.5 0 001.5-1.5V10a1.5 1.5 0 00-1.5-1.5H5.312a1.5 1.5 0 00-1.5 1.5V16.895c0 .117-.013.233-.04.346z"></path>
                    <path d="M11.125 19.642H6.25L3 20.499l.813-3.428v-4.286"></path>
                  </g>
                </g>
              </svg>
            </div>

            <p className="text-[10px]">{t("servicesPage.aLotOfMessage")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center overflow-hidden px-4">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                <g strokeLinecap="round" strokeWidth="1.5">
                  <g stroke="#0095da">
                    <path d="M3 11.004L19 11M18.963 11.772a8 8 0 10-7.14 7.186"></path>
                    <path d="M14.2 11c0-4.418-1.433-8-3.2-8-1.767 0-3.2 3.582-3.2 8s1.433 8 3.2 8"></path>
                  </g>
                  <g stroke="#ff4f00" strokeLinejoin="round">
                    <path d="M21 16a5 5 0 11-10 0 5 5 0 0110 0zM19.505 12.826l-6.682 6.683"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className=" overflow-hidden w-30 ">
              <motion.p
                initial={{ x: -100 }}
                animate={{ x: 100 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className=" text-[10px]"
              >
                {t("servicesPage.callsUnsucces")}
              </motion.p>
            </div>
          </div>
        </div>
        <div
          id="service5"
          className="flex gap-3 items-center font-semibold pt-4"
        >
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>{" "}
          <span>{t("servicesPage.digicalService")}</span>
        </div>
        <div className="bg-[#161A1D] p-4 grid grid-cols-4  rounded-lg">
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19.863 9.226V17.5a2 2 0 01-2 2h-1.931M4.137 9.226V17.5a2 2 0 002 2h1.931m3.932-9c-2.15 0-3.727-1.88-3.206-3.82l.677-2.517c.104-.39.48-.663.912-.663h3.234c.432 0 .808.273.912.663l.677 2.517C15.727 8.62 14.15 10.5 12 10.5zm5.883 0c-.97 0-1.816-.614-2.051-1.49l-1.189-4.423c-.148-.552.301-1.087.913-1.087h1.787c.4 0 .76.236.918.602a371.98 371.98 0 011.602 3.74c.519 1.286-.503 2.658-1.98 2.658zm-11.766 0c-1.477 0-2.499-1.372-1.98-2.658L5.74 4.105A1 1 0 016.66 3.5h1.785c.612 0 1.061.535.913 1.087L8.168 9.01c-.235.876-1.081 1.49-2.051 1.49z"
                ></path>
                <g stroke="#ff4f00" strokeLinecap="round" strokeWidth="1.5">
                  <path d="M8 17.5h8M12 21.5a4 4 0 100-8 4 4 0 000 8z"></path>
                  <path d="M12 21.5c.884 0 1.6-1.79 1.6-4s-.716-4-1.6-4c-.883 0-1.6 1.79-1.6 4s.716 4 1.6 4z"></path>
                </g>
              </svg>
            </div>

            <p className="text-[10px]">{t("servicesPage.onlineMarket")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center ">
            <div className="bg-[#22272B] p-2 rounded-lg">
              <svg
                fill="none"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <path
                  fill="#0095da"
                  d="M20.29 4.482a.75.75 0 10-1.064 1.058 9.75 9.75 0 010 13.792.75.75 0 001.065 1.058 11.25 11.25 0 000-15.908zM2.584 12.44a9.75 9.75 0 012.858-6.893.753.753 0 10-1.065-1.065 11.25 11.25 0 000 15.908.75.75 0 001.065-1.058 9.75 9.75 0 01-2.858-6.892z"
                ></path>
                <path
                  fill="#ff4f00"
                  d="M17.628 7.137a.75.75 0 10-1.057 1.065 6 6 0 010 8.475.75.75 0 001.057 1.065 7.5 7.5 0 000-10.605zm-9.532 0a.75.75 0 00-1.058 0 7.5 7.5 0 000 10.605.75.75 0 001.058-1.065 6 6 0 010-8.475.75.75 0 000-1.065zm6.615 4.62L10.96 9.59a.75.75 0 00-1.125.652v4.328a.75.75 0 001.125.652l3.75-2.167a.75.75 0 000-1.298zm-3.375 1.5V11.54l1.5.862-1.5.855z"
                ></path>
              </svg>
            </div>

            <p className=" text-[10px]">{t("servicesPage.withCinama")}</p>
          </div>
        </div>
        <div
          id="service6"
          className="flex gap-3 items-center font-semibold pt-4"
        >
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>{" "}
          <span>{t("servicesPage.elseService")}</span>
        </div>
        <div className="bg-[#161A1D] p-4 grid grid-cols-4 gap-4 rounded-lg">
          <div className="flex flex-col gap-4  items-center justify-center">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                <g strokeWidth="1.5">
                  <g stroke="#ff4f00">
                    <path
                      strokeLinecap="round"
                      d="M14.984 7.192c.51.327.846.731.966 1.164.12.433.02.876-.288 1.277-.308.402-.812.744-1.451.986a6.306 6.306 0 01-2.154.38 6.411 6.411 0 01-2.171-.344c-.651-.232-1.172-.566-1.5-.962-.33-.396-.451-.838-.353-1.272.099-.435.414-.844.908-1.18"
                    ></path>
                    <ellipse cx="12" cy="5.286" rx="4" ry="2.286"></ellipse>
                  </g>
                  <g
                    stroke="#0095da"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.923 22l.761-.744a2 2 0 011.399-.57H13.6a2 2 0 001.29-.473l5.36-4.528a1.68 1.68 0 00.226-2.334v0a1.68 1.68 0 00-2.402-.226L14.2 16.433M3.5 16.5l.606-.546 1.014-.898a2 2 0 011.326-.503h6.542c.742 0 1.344.588 1.344 1.314 0 .203-.048.395-.132.566m-4.349.748h3.136c.536 0 .997-.306 1.213-.748"></path>
                    <path d="M4.923 22l.47-.46a3 3 0 012.097-.854h5.744a3 3 0 001.936-.709l5.08-4.292a1.68 1.68 0 00.226-2.334v0a1.68 1.68 0 00-2.402-.226l-3.873 3.308m-4.35.748h3.137c.535 0 .996-.306 1.213-.748m0 0c.083-.171.13-.363.13-.566 0-.726-.601-1.315-1.343-1.315H6.826a3 3 0 00-1.99.756l-.73.646"></path>
                  </g>
                </g>
              </svg>
            </div>

            <p className="text-[10px]">{t("servicesPage.moneyService")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center ">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8.5 6v6m2.5-1.303L6 7.303m5 3.394l-.938-.637a1 1 0 00-1.562.828m2.5-.19l-1.281-.87a1 1 0 010-1.655l1.28-.87M6 7.303l.938.637A1 1 0 008.5 7.112M6 7.303l1.281.87a1 1 0 010 1.655l-1.28.87m0 0L11 7.302m-5 3.394l.938-.637a1 1 0 011.562.828M11 7.303l-.938.637A1 1 0 018.5 7.112m0-.512v.512m0 4.288v-.512M13 18l1.5-6m-2 1.5h6m-6.5 3h6M16 18l1.5-6m-.685 2.743l-.25 1a1 1 0 01-.97.758h-.94a1 1 0 01-.97-1.243l.25-1a1 1 0 01.97-.758h.94a1 1 0 01.97 1.243z"
                ></path>
                <path
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7z"
                ></path>
              </svg>
            </div>

            <p className=" text-[10px]">{t("servicesPage.orderCode")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center ">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                <g
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M9 20H7.5a3 3 0 01-3-3V5a3 3 0 013-3H9l.5.5h2L12 2h1.5a3 3 0 013 3v3"></path>
                  <path d="M16.5 8V5a3 3 0 00-3-3h-6a3 3 0 00-3 3v12a3 3 0 003 3h2"></path>
                </g>
                <path
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12.818 18.778l2.433 2.464m-2.433-2.464a4.597 4.597 0 010-6.443 4.46 4.46 0 016.364 0 4.597 4.597 0 010 6.443m-6.364 0L16 22l3.182-3.222m0 0l-2.433 2.464m.16-4.765a1.313 1.313 0 000-1.84 1.274 1.274 0 00-1.818 0 1.313 1.313 0 000 1.84 1.274 1.274 0 001.818 0z"
                ></path>
              </svg>
            </div>

            <p className=" text-[10px]">{t("servicesPage.lookForPhone")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center ">
            <div className="bg-[#22272B] p-2 rounded-lg">
              <svg
                fill="none"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <path
                  stroke="#0095da"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8.667 14h-2A2.667 2.667 0 004 16.667V26a2.667 2.667 0 002.667 2.667H8m5.333 0H8m5.333 0h12m-12 0v-12 10m-5.333 2h3.333a2 2 0 002-2m12 2A2.667 2.667 0 0028 26V10a2.667 2.667 0 00-2.667-2.667h-2.666m2.666 21.334a2 2 0 01-2-2v-3.334m-2.666 5.334h-5.334a2 2 0 01-2-2m0 0v-9.334m10 6v4c0 .737-.597 1.334-1.333 1.334h-2.667A1.333 1.333 0 0118 27.333v-4m5.333 0c0-.736-.597-1.333-1.333-1.333h-2.667c-.736 0-1.333.597-1.333 1.333m0 0v3.334a2 2 0 01-2 2m-8-4h1.333m-1.333-4h1.333m10-4.667H22"
                ></path>
                <path
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13.747 7.832c-.965.409-1.788.644-2.342.668-.554.025-.808-.163-.722-.534.086-.37.507-.903 1.197-1.516.69-.613 1.612-1.271 2.622-1.873 1.01-.602 2.053-1.114 2.965-1.457.913-.343 1.646-.497 2.085-.44.439.059.56.326.343.76-.216.435-.757 1.013-1.539 1.645m-.09 3.417c.628.026 1.113.13 1.409.3.296.172.392.405.279.677-.113.272-.43.575-.922.877-.492.302-1.142.595-1.885.849-.743.254-1.555.46-2.356.6-.801.14-1.564.207-2.215.196-.65-.011-1.167-.1-1.498-.26-.331-.159-.466-.382-.391-.648"
                ></path>
              </svg>
            </div>

            <p className=" text-[10px]">{t("servicesPage.serviceOffice")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center ">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                <g strokeWidth="1.5">
                  <g stroke="#ff4f00" strokeLinecap="round">
                    <path d="M17.184 15.022A6 6 0 106.81 15.01M18.702 18.007A9 9 0 105.292 18"></path>
                  </g>
                  <g stroke="#0095da">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 14l.844 1.969M11 14l-.844 1.969m0 0L16 21l-2.156-5.031m-3.688 0L8 21l5.844-5.031"
                    ></path>
                    <circle cx="12" cy="12" r="2"></circle>
                  </g>
                </g>
              </svg>
            </div>

            <p className=" text-[10px]">{t("servicesPage.coverInternet")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center ">
            <div className="bg-[#22272B] p-2 rounded-lg">
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
                  stroke="#0095da"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.5 11l.688 4.13A1.605 1.605 0 013.605 17v0A1.605 1.605 0 012 15.395v-3.193c0-1.29 1.492-2.008 2.5-1.202v0zm0 0c0-4.49 2.575-8 7.5-8s7.5 3.51 7.5 8m0 0l-.689 4.13A1.605 1.605 0 0020.395 17v0C21.28 17 22 16.281 22 15.395v-3.193c0-1.29-1.492-2.008-2.5-1.202v0z"
                ></path>
                <path
                  stroke="#0095da"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2 12.202c0-.51.232-.929.575-1.201.657-.522 1.958-1.247 2.122-2.07C5.383 5.478 7.863 3 12 3c4.137 0 6.616 2.477 7.303 5.932.164.822 1.465 1.547 2.122 2.069.343.272.575.692.575 1.2"
                ></path>
                <path
                  fill="#ff4f00"
                  d="M5.886 19.062a.75.75 0 00-1.217.876l1.217-.876zM11 20.75h2v-1.5h-2v1.5zm-1 0c-2.1 0-3.425-.73-4.114-1.688l-1.217.876c1.04 1.445 2.88 2.312 5.33 2.312v-1.5zm2 1.5c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0012 23.75v-1.5zM13.25 21c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0014.75 21h-1.5zm-.25-.25a.25.25 0 01.25.25h1.5A1.75 1.75 0 0013 19.25v1.5zm-2-1.5A1.75 1.75 0 009.25 21h1.5a.25.25 0 01.25-.25v-1.5z"
                ></path>
                <path
                  stroke="#ff4f00"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M5.277 19.5c.692.961 1.843 1.665 3.441 1.907.084.013.166.032.245.057.975.309 1.808 1.404 2.824 1.513L12 23M10 10.1c0-1.16.895-2.1 2-2.1s2 .94 2 2.1c0 .714-.759 1.345-1.341 1.724-.388.253-.659.69-.659 1.176M12 15.9v.1"
                ></path>
              </svg>
            </div>

            <p className=" text-[10px]">{t("servicesPage.backUp")}</p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center ">
            <div className="bg-[#22272B] p-2 rounded-lg">
              <svg
                fill="none"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <g
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  clipPath="url('/panel/services#izclip0_11699_163525')"
                >
                  <path
                    stroke="#0095da"
                    d="M24.485 25.152a12 12 0 10-16.97 0M20 12.667l-4 4M16 4.667v1.5m8.485 2.014l-1.06 1.061m-14.85 0l-1.06-1.06M5.5 16.666H4m24 0h-1.5M7.515 25.15l1.06-1.06m14.85 0l1.06 1.06"
                  ></path>
                  <path
                    stroke="#ff4f00"
                    d="M19.771 24.895a5.334 5.334 0 00-7.542 0M17.886 26.781a2.667 2.667 0 00-3.771 0M17.886 26.781a2.667 2.667 0 00-3.771 0M16 28.667v.083"
                  ></path>
                </g>
                <defs>
                  <clipPath id="izclip0_11699_163525">
                    <path fill="#fff" d="M0 0h32v32H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>

            <p className=" text-[10px]">{t("servicesPage.speed")}</p>
          </div>
        </div>

        <FooterHeader />
      </div>
    </div>
  );
};

export default Services;
