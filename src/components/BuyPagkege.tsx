import { useTranslation } from "react-i18next";

const BuyPagkege = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#161A1D] py-4 flex justify-center fixed bottom-20  left-0 right-0">
      <button className="text-center bg-[#ff4f00] px-33 py-3 rounded-lg text-white">
        {t("internetPage.buyANewPackege")}
      </button>
    </div>
  );
};

export default BuyPagkege;
