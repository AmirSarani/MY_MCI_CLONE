import { useTranslation } from "react-i18next";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Chart from "react-apexcharts";

export const MainContent = () => {
  const { t } = useTranslation();

  const options1 = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%", // اندازه فضای خالی وسط
        },
        track: {
          strokeWidth: "100%",
          background: "#4e4e4e",
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "11px",
            color: "#848484",
          },
          value: {
            show: true,
            color: "#848484",
            fontSize: "12px",
          },
        },
      },
    },
    labels: [t("mainPage.thereIsNo")], // برچسب نمودار
  };
  const options2 = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%", // اندازه فضای خالی وسط
        },
        track: {
          strokeWidth: "100%",
          background: "#4e4e4e",
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "11px",
            color: "#848484",
          },
          value: {
            show: true,
            color: "#848484",
            fontSize: "12px",
          },
        },
      },
    },
    labels: [t("mainPage.thereIs")], // برچسب نمودار
  };
  const options3 = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%", // اندازه فضای خالی وسط
        },
        track: {
          strokeWidth: "100%",
          background: "#4e4e4e",
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "11px",
            color: "#848484",
          },
          value: {
            show: true,
            color: "#848484",
            fontSize: "12px",
          },
        },
      },
    },
    labels: [t("mainPage.thereIs")], // برچسب نمودار
  };

  const series1 = [0]; // مقدار درصدی که نمایش داده میشه
  const series2 = [30]; // مقدار درصدی که نمایش داده میشه
  const series3 = [0]; // مقدار درصدی که نمایش داده میشه

  return (
    <>
      <div className="w-full bg-[#101214] flex flex-col justify-center items-center gap-[10px]">
        <div
          className="w-[396px] bg-[#22272B] h-[108px] flex rounded-[10px] "
          dir="rtl"
        >
          <Swiper
            slidesPerView={4.5}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper w-[93%]"
          >
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center gap-y-0.5 w-[72px] h-full  overflow-hidden ">
                <a className="flex items-center justify-center w-[72px] h-[72px]  rounded-full bg-gradient-to-tr from-[#F76B1C] to-[#FAD961]">
                  <div className="flex items-center justify-center w-[68px]  h-[68px] md:h-[76px] bg-[#1a1a1a] rounded-full">
                    <img
                      className="w-[62px]  h-[62px] object-cover rounded-full"
                      alt="اعتبار همراهی"
                      src="https://assets-prod-newmy.mci.ir/assets/banners/df554bb93b931e253f084e9bce34df1c.jpg"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/img/story-default.jpg";
                      }}
                    />
                  </div>
                </a>

                <p className="text-white text-xs  font-normal text-center whitespace-nowrap">
                  {t("mainPage.SwiperStory1")}
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col justify-center items-center gap-y-0.5 w-[72px] h-full overflow-hidden">
                <a className="flex items-center justify-center w-[72px] md:w-20 h-[72px] md:h-20 rounded-full bg-gray-200">
                  <div className="flex items-center justify-center w-[68px] md:w-[76px] h-[68px] md:h-[76px] bg-[#1a1a1a] rounded-full">
                    <img
                      className="w-[62px] md:w-[70px] h-[62px] md:h-[70px] object-cover rounded-full"
                      alt="آوای انتظار"
                      src="https://assets-prod-newmy.mci.ir/assets/banners/0e9df27951e3595b0e66c08a9fd197b7.jpg"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/img/story-default.jpg";
                      }}
                    />
                  </div>
                </a>

                <p className="text-white text-xs md:text-sm font-normal text-center whitespace-nowrap">
                  {t("mainPage.SwiperStory2")}
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col justify-center items-center gap-y-0.5 w-[72px] h-full overflow-hidden">
                <a className="flex items-center justify-center w-[72px] md:w-20 h-[72px] md:h-20 rounded-full bg-gradient-to-tr from-[#F76B1C] to-[#FAD961]">
                  <div className="flex items-center justify-center w-[68px] md:w-[76px] h-[68px] md:h-[76px] bg-[#1a1a1a] rounded-full">
                    <img
                      className="w-[62px] md:w-[70px] h-[62px] md:h-[70px] object-cover rounded-full"
                      alt="قرعه کشی"
                      src="https://assets-prod-newmy.mci.ir/assets/banners/e0ae518a7773d219df82697551120d66.jpeg"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/img/story-default.jpg";
                      }}
                    />
                  </div>
                </a>

                <p className="text-white text-xs md:text-sm font-normal text-center whitespace-nowrap">
                  {t("mainPage.SwiperStory3")}
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col justify-center items-center gap-y-0.5 w-[72px] h-full overflow-hidden">
                <a className="flex items-center justify-center w-[72px] md:w-20 h-[72px] md:h-20 rounded-full bg-gradient-to-tr from-[#F76B1C] to-[#FAD961]">
                  <div className="flex items-center justify-center w-[68px] md:w-[76px] h-[68px] md:h-[76px] bg-[#1a1a1a] rounded-full">
                    <img
                      className="w-[62px] md:w-[70px] h-[62px] md:h-[70px] object-cover rounded-full"
                      alt="اینترنت"
                      src="https://assets-prod-newmy.mci.ir/assets/banners/d8e0db4ce76af45362a0fbaee184d3be.jpg"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/img/story-default.jpg";
                      }}
                    />
                  </div>
                </a>

                <p className="text-white text-xs md:text-sm font-normal text-center whitespace-nowrap">
                  {t("mainPage.SwiperStory4")}
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col justify-center items-center gap-y-0.5 w-[72px] h-full overflow-hidden">
                <a className="flex items-center justify-center w-[72px] md:w-20 h-[72px] md:h-20 rounded-full bg-gradient-to-tr from-[#F76B1C] to-[#FAD961]">
                  <div className="flex items-center justify-center w-[68px] md:w-[76px] h-[68px] md:h-[76px] bg-[#1a1a1a] rounded-full">
                    <img
                      className="w-[62px] md:w-[70px] h-[62px] md:h-[70px] object-cover rounded-full"
                      alt="خدمت در محل"
                      src="https://assets-prod-newmy.mci.ir/assets/banners/fd55c5c7c65443ab38d2a8986a55e3e6.jpg"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/img/story-default.jpg";
                      }}
                    />
                  </div>
                </a>

                <p className="text-white text-xs md:text-sm font-normal text-center whitespace-nowrap">
                  {t("mainPage.SwiperStory5")}
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col justify-center items-center gap-y-0.5 w-[72px] h-full overflow-hidden">
                <a className="flex items-center justify-center w-[72px] md:w-20 h-[72px] md:h-20 rounded-full bg-gradient-to-tr from-[#F76B1C] to-[#FAD961]">
                  <div className="flex items-center justify-center w-[68px] md:w-[76px] h-[68px] md:h-[76px] bg-[#1a1a1a] rounded-full">
                    <img
                      className="w-[62px] md:w-[70px] h-[62px] md:h-[70px] object-cover rounded-full"
                      alt="شارژ"
                      src="https://assets-prod-newmy.mci.ir/assets/banners/b1831e93466aade26868864ff91b2f1a.jpg"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/img/story-default.jpg";
                      }}
                    />
                  </div>
                </a>

                <p className="text-white text-xs md:text-sm font-normal text-center whitespace-nowrap">
                  {t("mainPage.SwiperStory6")}
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col justify-center items-center gap-y-0.5 w-[72px] h-full overflow-hidden">
                <a className="flex items-center justify-center w-[72px] md:w-20 h-[72px] md:h-20 rounded-full bg-gradient-to-tr from-[#F76B1C] to-[#FAD961]">
                  <div className="flex items-center justify-center w-[68px] md:w-[76px] h-[68px] md:h-[76px] bg-[#1a1a1a] rounded-full">
                    <img
                      className="w-[62px] md:w-[70px] h-[62px] md:h-[70px] object-cover rounded-full"
                      alt="باشگاه مشتریان"
                      src="https://assets-prod-newmy.mci.ir/assets/banners/2f47115655f156c0501df1f0d7450050.jpg"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/img/story-default.jpg";
                      }}
                    />
                  </div>
                </a>

                <p className="text-white text-xs md:text-sm font-normal text-center whitespace-nowrap">
                  {t("mainPage.SwiperStory7")}
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/*  */}

        <div className="w-[394px] h-[131px] bg-[#22272B]  rounded-[10px] flex justify-around items-center gap-[10px]">
          <div className="w-[100px] h-[121px]  flex flex-col">
            <div className="w-[100px] h-[21px] flex justify-center items-center text-[#C7D1D8]">
              {t("mainPage.Payamak")}
            </div>

            <div className="w-[100px] h-[100px]  flex justify-center items-center">
              <Chart
                options={options1}
                series={series1}
                type="radialBar"
                height={130}
                width={120}
              />
            </div>
          </div>

          <div className="w-[100px] h-[121px]  flex flex-col">
            <div className="w-[100px] h-[21px]  flex justify-center items-center text-[#C7D1D8]">
              {t("mainPage.Internet")}
            </div>

            <div className="w-[100px] h-[100px]  flex justify-center items-center">
              <Chart
                options={options2}
                series={series2}
                type="radialBar"
                height={130}
                width={120}
              />
            </div>
          </div>

          <div className="w-[100px] h-[121px]  flex flex-col">
            <div className="w-[100px] h-[21px] flex justify-center items-center text-[#C7D1D8]">
              {t("mainPage.Mokaleme")}
            </div>

            <div className="w-[100px] h-[100px]  flex justify-center items-center ">
              <Chart
                options={options3}
                series={series3}
                type="radialBar"
                height={130}
                width={120}
              />
            </div>
          </div>
        </div>

        {/*  */}

        <div className="w-[394px] h-[70px] p-[16px] bg-[#22272B]  rounded-[10px] flex justify-around items-center gap-[10px]">
          <div className="flex items-center justify-between w-[90%] ">
            <div className="flex flex-col">
              <button className="bg-[#FF6B26] text-white  w-[80px] h-12 rounded-[10px] text-[14px] font-medium">
                {t("mainPage.buycharch")}
              </button>
            </div>

            <div className="flex flex-col">
              <div className="text-white text-[12px] font-light">
                {t("mainPage.baghiCharg")}
              </div>

              <div className="flex items-center gap-x-1 mt-1">
                <span className="text-gray-400 text-[12px] font-light">
                  {t("mainPage.reaal")}
                </span>

                <span className="text-white text-[16px] font-semibold">
                  {t("mainPage.mablaghCharg")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[394px] h-[88px] p-[16px] bg-[#22272B]  rounded-[10px] flex justify-around items-center gap-[10px]">
          <div className="w-[90%] bg-[#22272B] h-[64px] flex justify-between items-center ">
            <div className="w-[40px] h-[64px flex flex-col gap-[5px] relative">
              <div className="w-[40px] h-[40px] bg-[#4f5052] rounded-[5px] flex justify-center items-center">
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
                    d="M15 19.5a2.5 2.5 0 002.5-2.5 2.5 2.5 0 002.5 2.5 2.5 2.5 0 00-2.5 2.5 2.5 2.5 0 00-2.5-2.5z"
                  ></path>
                  <path
                    stroke="#ff4f00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M18.239 18.913a.937.937 0 10-1.326 1.326.937.937 0 001.326-1.326zM5 5a2 2 0 002-2 2 2 0 002 2 2 2 0 00-2 2 2 2 0 00-2-2z"
                  ></path>
                  <path
                    stroke="#ff4f00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7.59 4.53a.75.75 0 10-1.06 1.061.75.75 0 001.06-1.06z"
                  ></path>
                  <path
                    stroke="#0095da"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.055 2.93l.578-.455a2.205 2.205 0 012.734 0l.578.455c.41.323.917.49 1.436.474l.732-.023a2.225 2.225 0 012.204 1.62l.211.738c.143.5.454.934.88 1.228l.625.434a2.257 2.257 0 01.837 2.606l-.26.738a2.267 2.267 0 000 1.51l.26.738c.271.766.107 1.602-.393 2.201M3.967 7.401a2.257 2.257 0 00-.837 2.606l.26.738a2.266 2.266 0 010 1.51l-.26.738c-.34.96.004 2.03.837 2.606l.626.434c.425.294.736.728.879 1.228l.21.738a2.225 2.225 0 002.205 1.62l.732-.023a2.208 2.208 0 011.436.474l.578.455c.402.317.884.475 1.367.475M14.5 9.5l-5 5M9.5 14.5l2.938-2.938c.76-.76 2.062-.222 2.062.855v0"
                  ></path>
                  <path
                    stroke="#0095da"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9.5 14.5l2.938-2.938c.76-.76.222-2.062-.855-2.062v0"
                  ></path>
                  <path
                    stroke="#0095da"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.334 9.5H14.5v4.167"
                  ></path>
                </svg>
              </div>

              <p className="text-[11px] text-[#C7D1D8] flex justify-center items-center">
                {t("mainPage.tashvigi")}
              </p>

              <div className="bg-[#ff4f00] w-[40px] h-[25px] rounded-[10px] text-[10px] flex justify-center items-center absolute right-[30px] top-[-10px]">
                {t("mainPage.iphone")}
              </div>
            </div>

            <div className="w-[40px] h-[64px flex flex-col gap-[5px]">
              <div className="w-[40px] h-[40px] bg-[#4f5052] rounded-[5px] flex justify-center items-center">
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
                  <circle
                    cx="7"
                    cy="19"
                    r="2"
                    stroke="#ff4f00"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    transform="rotate(-90 7 19)"
                  ></circle>
                  <circle
                    cx="15.5"
                    cy="2.5"
                    r="1.5"
                    stroke="#ff4f00"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    transform="rotate(-90 15.5 2.5)"
                  ></circle>
                  <path
                    stroke="#0095da"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M2.424 16.094c-.612-.708-.56-1.625.148-2.617.707-.993 2.034-2.01 3.788-2.905 1.753-.894 3.843-1.619 5.965-2.07 2.123-.45 4.168-.603 5.84-.436 1.672.167 2.884.645 3.46 1.365.576.72.486 1.645-.256 2.64-.742.995-2.099 2.01-3.873 2.896-1.635.816-3.546 1.485-5.496 1.925"
                  ></path>
                  <path
                    stroke="#0095da"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M11.798 13.776c-.466.1-.921.167-1.34.196-.417.029-.79.02-1.097-.027-.307-.046-.541-.13-.69-.244-.148-.116-.208-.26-.176-.426.032-.167.155-.35.363-.543a4.16 4.16 0 01.848-.576 8.751 8.751 0 011.203-.522c.443-.156.91-.288 1.376-.389.466-.1.921-.167 1.34-.196.417-.029.79-.02 1.097.027.307.046.541.13.69.245.148.115.209.26.177.426-.033.166-.156.35-.364.542a4.163 4.163 0 01-.848.576 8.757 8.757 0 01-1.203.522c-.443.156-.91.288-1.376.389h0z"
                  ></path>
                </svg>
              </div>

              <p className="text-[11px] text-[#C7D1D8] flex justify-center items-center">
                {t("mainPage.pishnahadi")}
              </p>
            </div>

            <div className="w-[40px] h-[64px flex flex-col gap-[5px]">
              <div className="w-[40px] h-[40px] bg-[#4f5052] rounded-[5px] flex justify-center items-center">
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
                    d="M10.5 9v6L8 13"
                  ></path>
                  <path
                    stroke="#ff4f00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.5 9v3.503c0 1.006-1.164 1.566-1.95.937L8 13M13.5 15V9l2.5 2"
                  ></path>
                  <path
                    stroke="#ff4f00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13.5 15v-3.503c0-1.006 1.164-1.566 1.95-.937L16 11"
                  ></path>
                  <path
                    stroke="#0095da"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9.572 3.349a5 5 0 014.856 0l4 2.222A5 5 0 0121 9.942v4.116a5 5 0 01-2.572 4.37l-4 2.223a5 5 0 01-4.856 0l-4-2.222A5 5 0 013 14.058V9.942a5 5 0 012.572-4.37l4-2.223z"
                  ></path>
                </svg>
              </div>

              <p className="text-[11px] text-[#C7D1D8] flex justify-center items-center">
                {t("mainPage.Internet")}
              </p>
            </div>

            <div className="w-[40px] h-[64px flex flex-col gap-[5px] relative">
              <div className="w-[40px] h-[40px] bg-[#4f5052] rounded-[5px] flex justify-center items-center">
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

              <p className="text-[11px] text-[#C7D1D8] flex justify-center items-center">
                {t("mainPage.tabdile")}
              </p>

              <div className="bg-[#ff4f00] w-[40px] h-[25px] rounded-[10px] text-[10px] flex justify-center items-center absolute right-[30px] top-[-10px]">
                {t("mainPage.vighe")}
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-[394px] h-[130px] bg-[#22272B]  rounded-[10px] flex justify-around items-center gap-[10px]"
          dir="rtl"
        >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper h-full"
          >
            <SwiperSlide>
              <div className="w-full h-full rounded-[10px]">
                <img
                  className="w-[100%]  h-[100%] rounded-[10px]"
                  src="https://assets-prod-newmy.mci.ir/assets/banners/f155e296589b333c9aadaa5fdab52619.jpg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full rounded-[10px]">
                <img
                  className="w-[100%]  h-[100%] rounded-[10px]"
                  src="https://assets-prod-newmy.mci.ir/assets/banners/4842c6cfb163975ad2fcff729dd0e94a.jpg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full rounded-[10px]">
                <img
                  className="w-[100%]  h-[100%] rounded-[10px]"
                  src="https://assets-prod-newmy.mci.ir/assets/banners/102e9183fb966f8c014a41959e973e4a.jpg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full rounded-[10px]">
                <img
                  className="w-[100%]  h-[100%] rounded-[10px]"
                  src="https://assets-prod-newmy.mci.ir/assets/banners/2eaeecceaa58d59bd6e7d705d5214c38.jpg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full rounded-[10px]">
                <img
                  className="w-[100%]  h-[100%] rounded-[10px]"
                  src="https://assets-prod-newmy.mci.ir/assets/banners/7d2449948609018286f324551c1b029f.jpg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full rounded-[10px]">
                <img
                  className="w-[100%]  h-[100%] rounded-[10px]"
                  src="https://assets-prod-newmy.mci.ir/assets/banners/fd708da5d9ff4595815b8b0148e2ec24.jpg"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MainContent;
