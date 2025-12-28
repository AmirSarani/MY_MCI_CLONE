import { useTranslation } from "react-i18next";
import Chart from "react-apexcharts";

const InternetC = () => {
  const { t } = useTranslation();
  const options1: ApexCharts.ApexOptions = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%", // اندازه فضای خالی وسط
        },
        track: {
          strokeWidth: "100%",
          background: "#000000",
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
  const options2: ApexCharts.ApexOptions = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%", // اندازه فضای خالی وسط
        },
        track: {
          strokeWidth: "100%",
          background: "#ffffff",
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
  const series1 = [30]; // مقدار درصدی که نمایش داده میشه
  const series2 = [100]; // مقدار درصدی که نمایش داده میشه
  return (
    <div className="flex flex-col gap-4 pb-30 mb-[20px]">
      <div className="flex flex-col p-4  bg-[#161A1D] rounded-md">
        <div className="flex  gap-4">
          <p className="text-[12px]  text-white">{t("internetPage.packege")}</p>
        </div>
        <div className="flex  justify-between items-center">
          <div className="flex flex-col gap-1 items-start">
            <div className="flex justify-center items-center gap-2">
              <span className=" w-3 h-3 bg-[#00aecd] rounded-full"></span>
              <p className="text-[12px]  text-white">
                {t("internetPage.normalMeg")}
              </p>
            </div>
            <p className="text-[12px]  text-white">
              {t("internetPage.insideTraficMeg")}
            </p>
            <p className="text-[12px]  text-white">
              {t("internetPage.insideMessageMeg")}
            </p>
          </div>
          <div className="flex flex-col">
            <Chart
              options={options1}
              series={series1}
              type="radialBar"
              height={130}
              width={120}
            />
          </div>
        </div>
        <div className="flex  gap-6 items-center">
          <div className="flex flex-col gap-1 items-start">
            <div className="flex gap-1 justify-center *:text-[12px]  text-white">
              <p>{t("internetPage.startData")}</p>
              <p>{t("internetPage.startDataNumber")}</p>
            </div>
            <div className="flex gap-1 justify-center  *:text-[12px]  text-white">
              <p>{t("internetPage.endData")}</p>
              <p>{t("internetPage.endDataNumber")}</p>
            </div>
          </div>
          <div>
            <p className="text-[12px]  text-white">
              {t("internetPage.lostDay")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2  items-center">
        <div className="h-2 w-2 rounded-full bg-[#ff4f00]"></div>
        <p className="text-white text-[14px]">
          {t("internetPage.reservedPackege")}
        </p>
      </div>
      <div className="flex flex-col gap-4 p-4  bg-[#161A1D] rounded-md">
        <p className="text-[12px]  text-white">{t("internetPage.packege")}</p>
        <div className="flex justify-between items-center ">
          <div className="flex justify-center items-center gap-2">
            <span className=" w-3 h-3 bg-[#00aecd] rounded-full"></span>
            <p className="text-[12px]  text-white">
              {t("internetPage.normalGIG")}
            </p>
          </div>
          <div>
            <Chart
              options={options2}
              series={series2}
              type="radialBar"
              height={130}
              width={120}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternetC;
