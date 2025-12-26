import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
    },
  },
  fa: {
    translation: {
      headerPage: {
        NumberHeader: "{{number}}",
      },
      Login: {
        SignUpSignIn: "ثبت نام | ورود",
        PleaseEnterYourMobileNumber:
          "سلام، لطفا شماره تلفن همراه خود را وارد کنید.",
        EnterYourNumber: "تلفن همراه",
        BadgNumber: "۹۸+",
        LoginWithPassword: "ورود با رمز عبور",
      },
      otpPage: {
        EnterCode: "کد تایید را وارد کنید",
        CodeSent: " کد 5 رقمی به شماره {{number}} ارسال شد. ",
      },
      mainPage: {
        SwiperStory1: "اعتبار همراهی",
        SwiperStory2: "آوای انتظار",
        SwiperStory3: "قرعه کشی",
        SwiperStory4: "اینترنت",
        SwiperStory5: "خدمت در محل",
        SwiperStory6: "شارژ",
        SwiperStory7: "باشگاه",
        Payamak: "پیامک",
        Internet: "اینترنت",
        Mokaleme: "مکالمه",
        thereIsNo: "بسته  ندارید",
        thereIs: "بسته  دارید",
        lastChar: "باقی مانده ی شارژ",
        baghiCharg: " : باقی‌مانده شارژ ",
        reaal: "ریال",
        buycharch: "خرید شارژ",
        mablaghCharg: "165,994",
        tabdile: "تبدیل",
        pishnahadi: "پیشنهادی",
        tashvigi: "تشویقی",
        iphone: "ایفون 17",
        vighe: "ویژه",
        home: "خانه",
        charg: "شارژ",
        basteha: "بسته ها",
        khadamat: "خدمات",
        kifpool: "کیف پول",
      },

      servicesPage: {
        services: "خدمات",
        usefulService: "خدمات پر کاربرد",
        simcardService: "خدمات سیم کارت",
        convertionService: "خدمات مکالمه",
        messageService: "خدمات پیامک",
        digicalService: "خدمات دیجیتال",
        elseService: "سایر خدمات",
        serviceInLocation: "خدمت در محل",
        becomeToForever: "تبدیل به دائمی",
        summeryPerformance: "خلاصه کارکرد",
        waitingForSong: "آوای انتظار",
        withCinama: "سینما همراه",
        billForOther: "قبض دیگران",
        VoLTEViLTE: "VoLTE/ViLTE",
        manageSimCard: "مدیریت سیم کارت",
        roming: "رومینگ",
        smallConvertion: "ریز مکالمات کامل",
        countFree: "تعرفه آزاد",
        blackList: "لیست سیاه",
        checkUsim: "استعلام یوسیم",
        takeCareOfLine: "حفظ خط اعتباری",
        bomino: "بومینو",
        voiceMail: "پیامگیر صوتی",
        convertionLimitation: "محدودیت مکالمه",
        convertionLimitationNatinal: "محدودیت مکالمه بین المللی",
        aLotOfMessage: "پیامک انبوه",
        callsUnsucces: "اعلام تماس های ناموفق",
        onlineMarket: "فروشگاه آنلاین",
        moneyService: "خدمات مالی",
        orderCode: "کد های دستوری",
        lookForPhone: "رد یابی گوشی",
        serviceOffice: "دفاتر خدمات",
        coverInternet: "پوشش اینترنت",
        backUp: "پشتیبانی",
        speed: "سرعت سنج",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fa", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
