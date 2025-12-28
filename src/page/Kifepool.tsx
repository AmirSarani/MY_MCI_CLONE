import { useTranslation } from "react-i18next";
import FooterHeader from "../components/FooterHeader";
import ListBills from "../components/ListBills";

const Kifepool = () => {
  const { t } = useTranslation();
  return (
    <div dir="rtl" className="flex flex-col gap-2 text-white">
      <div className="p-4 bg-[#161A1D]">
        <p className="font-semibold ">{t("parsePage.parse")}</p>
      </div>
      <div className="bg-[#101214] py-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2 bg-[#161A1D] py-4 px-8">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex justify-center items-center gap-1">
              <p className="text-[14px] text-gray-300">
                {t("parsePage.parseStock")}
              </p>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                width="18"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <defs></defs>
                <path
                  fill="#0095da"
                  d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
                ></path>
                <path
                  fill="#0095da"
                  d="M12 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75zM12 17c-.13 0-.26-.03-.38-.08s-.23-.12-.33-.21c-.09-.1-.16-.2-.21-.33A.995.995 0 0111 16c0-.13.03-.26.08-.38s.12-.23.21-.33c.1-.09.21-.16.33-.21a1 1 0 01.76 0c.12.05.23.12.33.21.09.1.16.21.21.33.05.12.08.25.08.38s-.03.26-.08.38c-.05.13-.12.23-.21.33-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08z"
                ></path>
              </svg>
            </div>
            <p className="font-semibold text-[18px]">
              {t("parsePage.therIsNoMoneyInYourParse")}
            </p>
          </div>
          <div className="flex flex-col gap-2 bg-[#22272B] justify-center items-center p-4 rounded-lg ">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              width="26"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <defs></defs>
              <path
                stroke="#0095da"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 11.5V17a4 4 0 004 4h11a3 3 0 003-3V9.044a3.031 3.031 0 00-3-3.023h-.011a187.07 187.07 0 00-3.489-.018m2.97 5.666l3.53-.706m-3.53.706a1.83 1.83 0 000 3.588m0-3.588l1.138-.228A2 2 0 0121 13.402v.121a2 2 0 01-2.392 1.961l-1.137-.227m0-3.588l1.921-.385A2 2 0 0021 9.324v-.361m0 7l-3.53-.706m0 0l1.922.384A2 2 0 0121 17.602v.36M19 6.039v-.126c0-1.527-1.148-2.804-2.674-2.868A47.572 47.572 0 0011 3.111"
              ></path>
              <path
                stroke="#ff4f00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.5 6.5V3v2m0 1.5V10 8m0-1.5H10 8m-1.5 0H3h2M6.5 5A1.5 1.5 0 008 6.5M6.5 5A1.5 1.5 0 015 6.5m3 0A1.5 1.5 0 006.5 8M5 6.5A1.5 1.5 0 016.5 8"
              ></path>
            </svg>
            <p className="font-semibold text-[14px]">
              {t("parsePage.increaseStock")}
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[#161A1D] h-[370px] p-4">
          <p className="font-semibold ">{t("parsePage.listBills")}</p>
          <ListBills />
        </div>
      </div>

      <FooterHeader />
    </div>
  );
};

export default Kifepool;
