import { useTranslation } from "react-i18next";

const LastCharge = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2 pt-2 pb-40">
      <div className="flex bg-[#161A1D] px-4 py-5 rounded-md items-center justify-between">
        <div className="flex gap-2">
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
              d="M19.167 19.333L17.5 21"
              stroke="#ff4f00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
            <path
              d="M12.5 15.984l-.58-.474a.75.75 0 00.023.977l.557-.503zm5.748-2.06a.75.75 0 00-1.5 0h1.5zm-1.5.954a.75.75 0 101.5 0h-1.5zm4.426 1.451a.75.75 0 001.112 1.008l-1.112-1.008zm-8.464 1.007a.75.75 0 101.113-1.005l-1.113 1.005zm9.79-1.352l.556.504a.75.75 0 00.025-.978l-.581.474zm-9.42.475c1.126-1.378 2.7-2.209 4.418-2.209v-1.5c-2.226 0-4.208 1.08-5.579 2.76l1.162.949zm3.668-2.535v.954h1.5v-.954h-1.5zm.75.326c1.721 0 3.296.83 4.42 2.208l1.163-.948c-1.372-1.682-3.355-2.76-5.583-2.76v1.5zm4.446 1.23l-.77.85 1.112 1.007.77-.849-1.112-1.008zm-8.12.85l-.767-.848-1.114 1.005.767.849 1.113-1.005z"
              fill="#ff4f00"
            ></path>
            <path
              d="M4.5 19v0a1.414 1.414 0 012 0v0a1.414 1.414 0 002 0v0M6.5 12h3a1 1 0 001-1V8.5a1 1 0 00-1-1h-3a1 1 0 00-1 1V11a1 1 0 001 1z"
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
            <path
              d="M18.5 10v-.782a3.5 3.5 0 00-.92-2.364l-2.49-2.718A3.5 3.5 0 0012.51 3H6a3.5 3.5 0 00-3.5 3.5v5A3.5 3.5 0 006 15h3"
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
          </svg>
          <p className="text-gray-500 text-[15px]">
            {t("chargePage.allLastCharge")}
          </p>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <p className="text-[13px] font-semibold">
            {t("chargePage.allLastChargeMoney")}
          </p>
          <p className="text-[12px] text-gray-500 ">
            {t("chargePage.uniqueMoney")}
          </p>
        </div>
      </div>
      <div className="flex flex-col bg-[#161A1D] px-4 py-8 rounded-md ">
        <div className="flex items-center justify-between pb-6 ">
          <div>
            <p className="text-gray-500 text-[13px]">
              {t("chargePage.normal")}
            </p>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <p className="text-[13px] font-semibold">
              {t("chargePage.allLastChargeMoney")}
            </p>
            <p className="text-[12px] text-gray-500 ">
              {t("chargePage.uniqueMoney")}
            </p>
          </div>
        </div>
        <hr className="text-gray-300" />
        <div className="flex items-center justify-between py-6 ">
          <div>
            <p className="text-gray-500 text-[13px]">
              {t("chargePage.perfect")}
            </p>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <p className="text-[13px] font-semibold">
              {t("chargePage.perfectMoney")}
            </p>
            <p className="text-[12px] text-gray-500 ">
              {t("chargePage.uniqueMoney")}
            </p>
          </div>
        </div>
        <hr className="text-gray-300" />
        <div className="flex items-center justify-between py-6 ">
          <div>
            <p className="text-gray-500 text-[13px]">{t("chargePage.loyal")}</p>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <p className="text-[13px] font-semibold">
              {t("chargePage.loyalMoney")}
            </p>
            <p className="text-[12px] text-gray-500 ">
              {t("chargePage.uniqueMoney")}
            </p>
          </div>
        </div>
        <hr className="text-gray-300" />
        <div className="flex items-center justify-between py-6 ">
          <div>
            <p className="text-gray-500 text-[13px]">
              {t("chargePage.womenGift")}
            </p>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <p className="text-[13px] font-semibold">
              {t("chargePage.womenGiftMoney")}
            </p>
            <p className="text-[12px] text-gray-500 ">
              {t("chargePage.uniqueMoney")}
            </p>
          </div>
        </div>
        <div className="flex gap-2 pt-2 ">
          <p className="text-[#ff4f00] text-[15px] font-semibold ">
            {t("chargePage.preambleMore")}
          </p>
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
              d="M15 6l-6 6 3 3"
              stroke="#ff4f00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
            <path
              d="M15 18l-1.5-1.5M15 6l-4.586 4.586a2 2 0 000 2.828L12 15"
              stroke="#ff4f00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
            <path
              d="M15 18l-1.5-1.5"
              stroke="#ff4f00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
          </svg>
        </div>
      </div>
      <div className="bg-[#161A1D] py-4 flex justify-center fixed bottom-20  left-0 right-0">
        <button className="text-center bg-[#ff4f00] px-33 py-3 rounded-lg text-white">
          {t("chargePage.buyANewCharge")}
        </button>
      </div>
    </div>
  );
};

export default LastCharge;
