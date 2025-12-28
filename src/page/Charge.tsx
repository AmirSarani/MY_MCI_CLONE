import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import LastCharge from "../components/LastCharge";
import TransferCredit from "../components/TransferCredit";
import FooterHeader from "../components/FooterHeader";

const Charge = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState<"lastCharge" | "transferCredit">(
    "lastCharge"
  );
  return (
    <div dir="rtl" className="flex flex-col text-white bg-[#101214]">
      <div className="flex justify-between p-4 bg-[#161A1D]">
        <p className="font-semibold">{t("chargePage.myCharge")}</p>
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
      <div className="flex-flex-col gap-2 bg-gray-910 p-4 text-white">
        <div className="flex bg-[#161A1D] p-2  justify-between rounded-md">
          <button
            onClick={() => {
              setActive("lastCharge");
            }}
            className={clsx(
              "flex gap-1 items-center justify-center text-[12px] font-semibold px-10 py-3 rounded-md",
              active === "lastCharge" ? "bg-[#22272B]" : "bg-[#161A1D]"
            )}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              // fit=""
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                className={clsx(
                  active === "lastCharge"
                    ? "stroke-[#ff4f00]"
                    : "stroke-[#808080]"
                )}
                d="M15 11.5l-3 3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                className={clsx(
                  active === "lastCharge"
                    ? "stroke-[#0095da]"
                    : "stroke-[#808080]"
                )}
                d="M12 5c-4.97 0-9 4.133-9 9.23a9.4 9.4 0 00.774 3.753c.282.649.953 1.017 1.661 1.017h13.13c.708 0 1.378-.368 1.66-1.017A9.4 9.4 0 0021 14.23C21 9.133 16.97 5 12 5zM12 5.5v1.125m6.364 1.511l-.796.796m-11.137 0l-.795-.796M4.125 14.5H3m18 0h-1.125"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                className={clsx(
                  active === "lastCharge"
                    ? "stroke-[#0095da]"
                    : "stroke-[#808080]"
                )}
                d="M12 5c-4.97 0-9 4.133-9 9.23a9.4 9.4 0 00.774 3.753c.282.649.953 1.017 1.661 1.017h13.13c.708 0 1.378-.368 1.66-1.017A9.4 9.4 0 0021 14.23C21 9.133 16.97 5 12 5z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                className={clsx(
                  active === "lastCharge"
                    ? "stroke-[#0095da]"
                    : "stroke-[#808080]"
                )}
                d="M12 5c-4.97 0-9 4.133-9 9.23 0 .932.135 1.831.385 2.68.4 1.357 1.777 2.09 3.193 2.09h10.844c1.416 0 2.792-.733 3.193-2.09A9.45 9.45 0 0021 14.23C21 9.134 16.97 5 12 5zM12 5.5v1.125m6.364 1.511l-.796.796m-11.137 0l-.795-.796M4.125 14.5H3m18 0h-1.125"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
            </svg>{" "}
            {t("chargePage.lastCharge")}
          </button>
          <button
            onClick={() => {
              setActive("transferCredit");
            }}
            className={clsx(
              "flex gap-1 items-center justify-center text-[12px] font-semibold px-10 py-3 rounded-md",
              active === "transferCredit" ? "bg-[#22272B]" : "bg-[#161A1D]"
            )}
          >
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
                className={clsx(
                  active === "transferCredit"
                    ? "stroke-[#ff4f00]"
                    : "stroke-[#808080]"
                )}
                d="M4 14v2.333a2 2 0 002 2h4m0 0L8.25 20M10 18.333l-1.75-1.666M20 10V7.667a2 2 0 00-2-2h-4m0 0L15.75 4M14 5.667l1.75 1.666"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                className={clsx(
                  active === "transferCredit"
                    ? "stroke-[#0095da]"
                    : "stroke-[#808080]"
                )}
                d="M10 8V5a2 2 0 00-2-2H5a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2zM21 19v-3a2 2 0 00-2-2h-3a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
              <path
                className={clsx(
                  active === "transferCredit"
                    ? "stroke-[#0095da]"
                    : "stroke-[#808080]"
                )}
                d="M3 7l1.273-.52a3.114 3.114 0 012.354 0v0a3.114 3.114 0 002.515-.071L10 6M21 18l-1.273-.52a3.114 3.114 0 00-2.354 0v0a3.114 3.114 0 01-2.515-.071L14 17"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
            </svg>
            {t("chargePage.transferCredit")}
          </button>
        </div>
        <div>
          {active === "lastCharge" ? <LastCharge /> : <TransferCredit />}
        </div>
      </div>
      {/* <NavarBottom /> */}

      <FooterHeader />
    </div>
  );
};

export default Charge;
