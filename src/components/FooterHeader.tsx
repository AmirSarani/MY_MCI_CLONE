import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

function FooterHeader() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <>
      <div className="w-[428px] h-[86px] bg-[#22272B] absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-row-reverse justify-around items-end ">
        <button
          className="w-[64px] h-[68px]  flex flex-col justify-center items-center gap-[5px] rounded-[10px] hover:bg-[#4f5052]"
          onClick={() => {
            navigate("/Login");
          }}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fit=""
            height="24px"
            width="24px"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <defs></defs>
            <path
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M20 20v-8.32a4 4 0 00-1.71-3.279l-4.008-2.8a4 4 0 00-4.585.004L5.705 8.4A4 4 0 004 11.677V20"
            ></path>
            <path
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M20 20v-9.362a2 2 0 00-.855-1.64l-6.01-4.197a2 2 0 00-2.292.001l-5.99 4.196A2 2 0 004 10.636V20"
            ></path>
            <path
              stroke="#ff4f00"
              stroke-Linecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.5 20v-4a2 2 0 012-2h1a2 2 0 012 2v4"
            ></path>
          </svg>
          <span className="text-[10px] text-[#6B7280]">
            {t("mainPage.home")}
          </span>
        </button>
        <button
          className="w-[64px] h-[68px] 100 flex flex-col justify-center items-center  gap-[5px] rounded-[10px] hover:bg-[#4f5052]"
          onClick={() => {
            navigate("/Otp");
          }}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fit=""
            height="24px"
            width="24px"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <defs></defs>
            <path
              stroke="#ff4f00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M11.998 9.073V10.1m5.078 2.104l.242-.24c.381-.376.401-.992-.003-1.345a8.056 8.056 0 00-10.63.002c-.404.352-.385.967-.005 1.344l.24.239"
            ></path>
            <path
              fill="#ff4f00"
              d="M6 11.29l-.554-.506a.75.75 0 00.026 1.038L6 11.289zm6.748-2.217a.75.75 0 00-1.5 0h1.5zm-1.5 1.026a.75.75 0 001.5 0h-1.5zm5.3 1.57a.75.75 0 001.055 1.067l-1.054-1.067zM6.393 12.735a.75.75 0 101.056-1.065l-1.056 1.065zM18 11.289l.527.534a.75.75 0 00.028-1.038l-.555.504zm-11.446.505c1.364-1.497 3.3-2.427 5.444-2.427v-1.5c-2.59 0-4.92 1.126-6.552 2.917l1.108 1.01zm4.694-2.72v1.025h1.5V9.073h-1.5zm.75.293c2.147 0 4.084.928 5.447 2.427l1.11-1.01c-1.633-1.794-3.966-2.917-6.557-2.917v1.5zm5.475 1.389l-.924.913 1.054 1.067.924-.913-1.054-1.067zm-10.025.914l-.92-.913-1.056 1.065.92.913 1.056-1.065z"
            ></path>
            <path
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M21 17V7a4 4 0 00-4-4H7a4 4 0 00-4 4v10a4 4 0 004 4h10a4 4 0 004-4zM13.822 13.176L11.998 15"
            ></path>
          </svg>

          <span className="text-[10px] text-[#6B7280]">
            {" "}
            {t("mainPage.charg")}
          </span>
        </button>
        <button className="w-[64px] h-[68px] flex flex-col justify-center items-center  gap-[5px] rounded-[10px] hover:bg-[#4f5052]">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fit=""
            height="24px"
            width="24px"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <defs></defs>
            <path
              stroke="#ff4f00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 15v-.818a3 3 0 011.436-2.56l.564-.344 1-.611.5-.306"
            ></path>
            <path
              stroke="#ff4f00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15.5 10.361l-.5.306-1 .61-.436.267a3 3 0 01-3.128 0L10 11.278l-1-.611-.5-.306"
            ></path>
            <path
              stroke="#ff4f00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 15.5v-1.318a3 3 0 00-1.436-2.56L10 11.279l-.5-.306-.5-.305"
            ></path>
            <path
              stroke="#0095da"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.572 3.349a5 5 0 014.856 0l4 2.222A5 5 0 0121 9.942v4.116a5 5 0 01-2.572 4.37l-4 2.223a5 5 0 01-4.856 0l-4-2.222A5 5 0 013 14.058V9.942a5 5 0 012.572-4.37l4-2.223z"
            ></path>
            <path
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M21 12V9.637a1.479 1.479 0 00-2.25-1.262v0l-1.125.688"
            ></path>
            <path
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M16.5 4.5l2.195 1.22a1.537 1.537 0 01.055 2.655v0l-1.125.688"
            ></path>
            <path
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokewidth="1.5"
              d="M16.5 4.5l2.25 1.25a1.5 1.5 0 01.055 2.592l-.055.033-1.125.688M3 12V9.637a1.479 1.479 0 012.25-1.262v0l1.125.688"
            ></path>
            <path
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M7.5 4.5L5.25 5.75a1.5 1.5 0 00-.055 2.592l.055.033 1.125.688"
            ></path>
            <path
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M7.5 4.5L5.25 5.75a1.5 1.5 0 00-.055 2.592l.055.033 1.125.688M12 18v1.45a1.5 1.5 0 01-2.228 1.312L7.5 19.5"
            ></path>
            <path
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 18v1.45a1.5 1.5 0 002.229 1.312L16.5 19.5"
            ></path>
          </svg>
          <span className="text-[10px] text-[#6B7280]">
            {t("mainPage.basteha")}
          </span>
        </button>
        <button className="w-[64px] h-[68px]  flex flex-col justify-center items-center  gap-[5px] rounded-[10px] hover:bg-[#4f5052]">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fit=""
            height="24px"
            width="24px"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <defs></defs>
            <path
              stroke="#ff4f00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M16.31 6.872c-.723.307-1.341.483-1.756.501-.416.019-.606-.122-.542-.4.065-.278.38-.678.898-1.137.518-.46 1.21-.954 1.967-1.405.757-.452 1.539-.836 2.224-1.093.684-.257 1.234-.372 1.563-.33.33.044.42.244.258.57-.163.326-.568.76-1.155 1.234"
            ></path>
            <path
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19.7 7.375c.47.02.834.097 1.056.225.222.129.294.304.21.508-.085.204-.323.43-.692.657a7.228 7.228 0 01-1.413.637c-.558.19-1.167.346-1.768.45a9.02 9.02 0 01-1.66.147c-.489-.008-.876-.076-1.124-.195-.249-.12-.35-.287-.294-.486M5 21h3a2 2 0 002-2v-3a2 2 0 00-2-2H5a2 2 0 00-2 2v3a2 2 0 002 2zM16 21h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3a2 2 0 00-2 2v3a2 2 0 002 2zM3 8V5a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            ></path>
          </svg>
          <span className="text-[10px] text-[#6B7280]">
            {t("mainPage.khadamat")}
          </span>
        </button>
        <button className="w-[64px] h-[68px]  flex flex-col justify-center items-center  gap-[5px] rounded-[10px] hover:bg-[#4f5052]">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fit=""
            height="24px"
            width="24px"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <defs></defs>
            <path
              stroke="#ff4f00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19 6.038v-.126c0-1.527-1.147-2.804-2.672-2.867-2.866-.12-7.494-.075-11.137 1.082C3.794 4.571 3 5.953 3 7.417V10.5"
            ></path>
            <path
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M17.989 6.058c-4.772-.054-8.996-.102-12.773 1.2C3.812 7.74 3 9.141 3 10.626v6.372a4 4 0 004 4h11a3 3 0 003-3V9.081a3.032 3.032 0 00-3-3.023h-.011z"
            ></path>
            <path
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M21 11l-3.53.706A1.83 1.83 0 0016 13.5v0a1.83 1.83 0 001.47 1.794L21 16"
            ></path>
            <path
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M18.608 11.478l-1.137.228a1.83 1.83 0 000 3.588l1.137.228A2 2 0 0021 13.56v-.12a2 2 0 00-2.392-1.962z"
            ></path>
            <path
              stroke="#0095da"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M21 18v-.36a2 2 0 00-1.608-1.962l-1.921-.384A1.83 1.83 0 0116 13.5v0a1.83 1.83 0 011.47-1.794l1.922-.384A2 2 0 0021 9.36V9"
            ></path>
          </svg>
          <span className="text-[10px] text-[#6B7280]">
            {t("mainPage.kifpool")}
          </span>
        </button>
      </div>
    </>
  );
}

export default FooterHeader;
