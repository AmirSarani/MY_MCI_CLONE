import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const TransferCredit = () => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phoneNumber: "",
    },
  });
  return (
    <div className="flex flex-col gap-2 pt-2 pb-60">
      <div className="flex flex-col gap-2 bg-[#161A1D] p-4 rounded-md">
        <p className="text-[14px]">
          {t("chargePage.pleaseEnterYourPhoneNumber")}
          <span className="text-red-500">*</span>
        </p>
        <div className="flex flex-col gap-2">
          <input
            className="w-full text-left placeholder:text-gray-400 placeholder:text-right text-[15px] outline-none border border-gray-300 px-4 py-2 rounded-md"
            placeholder={t("chargePage.realPhone")}
            {...register("phoneNumber", {
              minLength: 11,
              required: true,
            })}
            type="text"
          />
          <p className="text-[14px] text-red-400 ">
            {errors.phoneNumber && (
              <span>{t("chargePage.youMustWriteRealPhoneNumber")} </span>
            )}
          </p>
        </div>
      </div>
      <div className="flex flex-col p-2 bg-[#161A1D] gap-2 rounded-md">
        <div className="flex flex-col p-2 gap-4">
          <p className="text-[14px]">{t("chargePage.pleaseChoseYourAmount")}</p>
          <p className="text-[14px]">
            {t("chargePage.amount")} <span className="text-red-500">*</span>
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 px-2 gap-4 *:rounded-md *:text-gray-500">
          <div className="py-2 px-2 bg-[#22272B] flex justify-center items-center">
            {t("chargePage.amount1")}
          </div>
          <div className="py-2 px-2 bg-[#22272B] flex justify-center items-center">
            {t("chargePage.amount2")}
          </div>
          <div className="py-2 px-2 bg-[#22272B] flex justify-center items-center">
            {t("chargePage.amount3")}
          </div>
          <div className="py-2 px-2 bg-[#22272B] flex justify-center items-center">
            {t("chargePage.amount4")}
          </div>
          <div className="py-2 px-2 bg-[#22272B] flex justify-center items-center">
            {t("chargePage.amount5")}
          </div>
          <div className="py-2 px-2 bg-[#22272B] flex justify-center items-center">
            {t("chargePage.amount6")}
          </div>
        </div>
      </div>
      <div className="bg-[#161A1D] py-4 flex justify-center fixed bottom-20  left-0 right-0">
        <button className="text-center bg-[#ff4f00] px-40 py-2 rounded-lg text-white">
          {t("chargePage.transfer")}
        </button>
      </div>
    </div>
  );
};

export default TransferCredit;
