import { useTranslation } from "react-i18next";

const Message = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center gap-4 items-center h-[400px] bg-[#161A1D] rounded-md">
      <svg
        fill="none"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        height="70"
        width="70"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <defs></defs>
        <path
          d="M13.334 50.667h-2.667a5.333 5.333 0 01-5.333-5.334v-2.666m16 8H24M42.667 24v-2.667m0-6.666v-1.334A5.333 5.333 0 0037.333 8h-2.666M5.334 22.667v12M20 8h6.667-1.778a5.333 5.333 0 00-5.333 5.333v3.734a5.333 5.333 0 01-5.334 5.333h-3.555a5.333 5.333 0 00-5.333 5.333V32m8.889-9.604h-8.89l14.223-14.4v9.067m-5.334 5.333a5.333 5.333 0 005.334-5.333m-5.334 5.333h-2.507c-2.367 0-3.56-2.856-1.897-4.54l5.174-5.24c1.675-1.695 4.564-.509 4.564 1.875v2.572M55.704 43.852C55.704 37.306 50.398 32 43.852 32S32 37.306 32 43.852s5.306 11.852 11.852 11.852c3.29 0 6.265-1.34 8.413-3.503a11.815 11.815 0 003.44-8.349zm0 0c0 1.648-.336 3.22-.944 4.646-.976 2.289-1.084 5.13.666 6.899l3.241 3.272m-14.815-2.957c1.652 0 3.225-.338 4.654-.949 2.316-.99 5.203-1.095 6.976.695l3.185 3.217m0-.008l-5.334-5.334"
          stroke="#374151"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        ></path>
      </svg>
      <p className="text-[16px] text-gray-500">
        {t("internetPage.thereIsNoPackege")}
      </p>
    </div>
  );
};

export default Message;
