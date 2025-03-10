import { motion, AnimatePresence } from "framer-motion";
import TopLogo from "../Header/TopLogo";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import axios from "axios";
// import jalaali from "jalaali-js";
import InsuranceCard from "./InsuranceCard";
const Modal = ({ isOpen, onClose }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = [
    "اطلاعات پرواز",
    "قوانین استرداد",
    "قوانین ویزا و مسیر",
    "بار مجاز",
  ];
  const content = [
    <div className="w h-[80%] f" key="1">
      <div className="w-[60%] h f flex-col">
        <div className="w h-[20%] flex justify-between items-center">
          <div className="w font-bold flex justify-start items-center">
            <img
              src="/public/image/gulf-air.png"
              className="w-[120px]"
              alt=""
            />
            Gulf Air
          </div>
          <div>مجموعا 19:00 ساعت</div>
        </div>
        <div className="w h-[20%] flex justify-start items-center gap-[20px]">
          <h1 className="text-[20px] font-bold">02:50</h1>
          <span>
            استانبول، فرودگاه استانبول دوشنبه 6 شهریور (شماره پرواز: 615)
          </span>
        </div>
        <div className="w-[95%] h-[40%] border-r-2 border-dashed f relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="w-[30px] absolute -right-[15px]"
          >
            <path
              d="M2.63313 8.91333L5.74646 10.2533L6.4398 10.5467C6.54646 10.6 6.6398 10.74 6.6398 10.86L6.6398 12.9C6.6398 13.54 7.11313 14.3 7.68646 14.5933C7.88646 14.6933 8.12646 14.6933 8.32646 14.5933C8.89313 14.3 9.36646 13.5333 9.36646 12.8933V10.8533C9.36646 10.7333 9.4598 10.5933 9.56646 10.54L13.3665 8.90667C13.7865 8.73333 14.1265 8.20667 14.1265 7.75333L14.1265 6.87334C14.1265 6.30667 13.6998 6.02667 13.1731 6.25333L9.83313 7.69334C9.57313 7.80667 9.3598 7.66667 9.3598 7.38V6.64V5.44C9.3598 5.28667 9.44646 5.06667 9.55313 4.96L11.0998 3.40667C11.2598 3.24667 11.3331 2.93334 11.2598 2.70667L10.9598 1.8C10.8398 1.40667 10.3931 1.22 10.0265 1.40667L8.4398 2.74C8.1998 2.94667 7.80646 2.94667 7.56646 2.74L5.9798 1.40667C5.61313 1.22667 5.16646 1.40667 5.03313 1.8L4.73313 2.70667C4.6598 2.92667 4.73313 3.24667 4.89313 3.40667L6.4398 4.96C6.55313 5.06667 6.6398 5.28667 6.6398 5.44V7.38C6.6398 7.66667 6.43313 7.8 6.16646 7.69334L2.82646 6.25333C2.2998 6.02667 1.87313 6.30667 1.87313 6.87334L1.87313 7.75333C1.87313 8.20667 2.21313 8.73334 2.63313 8.91333Z"
              fill="#1D91CC"
            />
          </svg>
        </div>
        <div className="w h-[20%] flex justify-start items-center gap-[20px]">
          <h1 className="text-[20px] font-bold">21:50</h1>
          <span> دبی، فرودگاه دبی دوشنبه 6 شهریور</span>
        </div>
      </div>
      <div className="w-[40%] h f flex-col ">
        <div className="w h flex justify-start items-center flex-col gap-[30px]">
          <div className="f gap-[20px] w ">
            <div className=" px-3 py-1 bg-red-100 rounded-xl   text-red-700">
              5 صندلی باقی مانده
            </div>
            <div className=" px-3 py-1 bg-red-100 rounded-xl   text-red-700">
              غیر قابل استرداد
            </div>
          </div>
          <div className="w  f gap-[20px]">
            <span className="p-1 px-2 rounded-md bg-sky-100 text-sky-400">
              اکونومی
            </span>
            <span className="p-1 px-2 rounded-md bg-sky-100 text-sky-400">
              سیستمی
            </span>
          </div>
        </div>
        <div className=" h flex justify-start items-center gap-[20px] flex-col">
          <div className="flex justify-between items-center w gap-[20px]">
            <span className="tracking-wider"> قیمت برای هر بزرگسال </span>
            <span className="tracking-wider"> 11,470,154 تومان </span>
          </div>
          <div className="flex justify-between items-center w gap-[20px]">
            <span className="tracking-wider"> قیمت برای هر کودک </span>
            <span className="tracking-wider"> 11,470,154 تومان </span>
          </div>
        </div>
      </div>
    </div>,
    <div className="w h-[80%] f flex-col" key="2">
      <div className="h-[55%] w border-b border-gray-300 flex justify-around items-start flex-col">
        <h1 className="text-[20px] font-semibold">قوانین استرداد</h1>
        <div className="f gap-[10px] tracking-wider">
          <span className="text-[18px] font-medium">70 درصد جریمه:</span>
          از ساعت 11:00 صبح 8 روز قبل از پرواز تا ساعت 11:00 صبح 3 روز قبل از
          پرواز.
        </div>
        <div className="f gap-[10px] tracking-wider">
          <span className="text-[18px] font-medium">55 درصد جریمه:</span>
          از زمان صدور بلیط تا ساعت 11:00 صبح 8 روز قبل از پرواز.
        </div>
        <div className="f gap-[10px] tracking-wider">
          <span className="text-[18px] font-medium">80 درصد جریمه:</span>
          از ساعت 11:00 صبح 3 روز قبل از پرواز تا ساعت 11:00 صبح 2 روز قبل از
          پرواز.
        </div>
        <div className="f gap-[10px] tracking-wider">
          <span className="text-[18px] font-medium">100 درصد جریمه:</span>
          از ساعت 11:00 صبح 2 روز قبل از پرواز به بعد
        </div>
      </div>
      <div className="h-[45%] w flex justify-start pt-[30px] gap-[50px] items-start flex-col">
        <h1 className="text-[20px] font-semibold">قوانین تغییرات بلیط</h1>
        <div className="flex w-[80%] justify-center gap-[10px] items-start flex-col tracking-wider">
          <span className="text-[17px] font-medium">
            تا 24 ساعت مانده به پرواز به مسافران جهت تغییر رزرو جریمه ای تعلق
            نمی‌گیرد
          </span>
          <span className="text-wrap">
            (هزینه تغییر کلاس نرخی دریافت می‌شود) از 24 ساعت مانده به پرواز به
            بعد به‌ازای هر مسافر در هر مسیر پروازی، جریمه تغییر رزرو معادل
            1٬300٬000 تومان ایران (باضافه هزینه تغییر کلاس نرخی) می‌باشد
          </span>
        </div>
      </div>
    </div>,
    <div
      className="w h-[80%] flex flex-col gap-[40px] justify-start items-start pt-[20px] "
      key="3"
    >
      <h1 className="text-[20px] font-semibold">قوانین عمومی سفر</h1>
      <div className="flex justify-center items-start gap-[10px] tracking-wider text-wrap">
        <span className="text-[18px] font-medium">ساعت الزامی حضور: </span>
        از 4 ساعت قبل پروزا حضور الزامی است و 1 ساعت قبل پرواز سیستمهای پذیرش
        مسافر بسته خواهند شد.
      </div>
      <div className="flex justify-center items-start gap-[10px] tracking-wider text-wrap">
        <span className="text-[18px] font-medium">
          مسافران سیستمی بیزینس کلاس:
        </span>
        مسافر که کلاس پروازی بیزینسی را انتخاب کردند می‌توانند به طور رایگان از
        سالن فرودگاه امام جهت پروازهای خروجی استفاده کنند
      </div>
    </div>,
    <div className="w h-[80%] f flex-col" key="4">
      <div className="h-[55%] w border-b border-gray-300 flex pb-[30px] justify-around items-start flex-col">
        <h1 className="text-[20px] font-semibold">قوانین بار</h1>
        <div className="f gap-[10px] tracking-wider">
          <span className="text-[18px] font-medium">حداکثر تعداد بسته: </span>
          به ازای هر مسافر برابر 2 بسته می باشد
        </div>
        <div className="f gap-[10px] tracking-wider">
          <span className="text-[18px] font-medium">میزان بار دستی مجاز:</span>5
          کیلوگرم.
        </div>
        <div className="f gap-[10px] tracking-wider">
          <span className="text-[18px] font-medium">
            میزان بار مجاز برای بزرگسال و کودک:
          </span>
          30 کیلوگرم
        </div>
        <div className="f gap-[10px] tracking-wider">
          <span className="text-[18px] font-medium">
            میزان بار مجاز برای نوزاد:
          </span>
          10 کیلوگرم
        </div>
      </div>
      <div className="h-[45%] w flex justify-start pt-[30px] gap-[50px] items-start flex-col">
        <h1 className="text-[20px] font-semibold">قوانین تغییرات بار</h1>
        <div className="flex w-[80%] justify-center gap-[10px] items-start flex-col tracking-wider">
          <span className="text-[17px] font-medium">
            هزینه بار اضافی در فرودگاه شهر مبدا برابر 200٬000 تومان ایران
            می‌باشد.
          </span>
        </div>
      </div>
    </div>,
  ];

  const handleNext = () => {
    if (currentTab < tabs.length - 1) {
      setCurrentTab((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentTab > 0) {
      setCurrentTab((prev) => prev - 1);
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 backdrop-blur-sm  flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white h-[80%] w-[70%] p-6 rounded-xl  shadow-lg   "
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            {/* Tab Header */}
            <div className="flex mb-4 space-x-4 border-b-2 pb-2">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 text-md ${
                    index === currentTab
                      ? "text-[#F0421A] font-bold"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </div>
              ))}
            </div>

            {/* Content */}
            {content[currentTab]}
            <div className="flex justify-between items-center w mt-4">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-xl"
                onClick={onClose}
              >
                تغییر بلیط
              </button>
              <div className="  w-[60%] flex justify-end gap-4">
                <div className="f gap-[10px] text-sky-400">
                  <span className="tracking-wider"> مجموع پرداختی شما</span>
                  <span className="tracking-wider"> 11,470,154 تومان </span>
                </div>
                {currentTab > 0 && (
                  <button
                    className="w-[20%] py-2 bg-gray-400 text-white rounded-lg"
                    onClick={handlePrev}
                  >
                    برگشت
                  </button>
                )}
                {currentTab < tabs.length - 1 ? (
                  <button
                    className="w-[35%] py-2 bg-[#F0421A] text-white rounded-lg"
                    onClick={handleNext}
                  >
                    ادامه
                  </button>
                ) : (
                  <button
                    onClick={handleBuyTicket}
                    className="w-[35%] py-2 bg-sky-400 text-white rounded-xl text-center"
                  >
                    ادامه
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const convertToJalali = (isoDateString) => {
  const date = new Date(isoDateString);
  const { jy, jm, jd } = jalaali.toJalaali(date);
  return `${jy}/${jm}/${jd}`;
};

const InsuranceList = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const formData = new FormData();
        formData.append("Airport1", "IKA");
        formData.append("Airport2", "AYT");
        formData.append("Date1", "14031216");
        formData.append("CustomerId", "7d8d42e0-09c2-4a7c-aea5-7e59da31e233");

        const response = await axios.post("https://elimagasht.net/api/flights", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        setFlights(response.data);
      } catch (error) {
        console.error("خطا در دریافت پروازها:", error);
      }
    };

    fetchFlights();
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const time = params.get("time");
  const way1 = params.get("way1");
  const way2 = params.get("way2");
  const passenger = params.get("passenger");
  const handleBuyTicket = () => {
    navigate(
      `/ticket?time=${time}&way1=${way1}&way2=${way2}&passenger=${passenger}`
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="h w flex flex-col justify-start overflow-y-hidden items-center gap-[20px] bg-[url('/public/image/flight-pattern.png')] bg-right bg-no-repeat   ">
        <TopLogo />
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <div className="w-[85%] h-[80px] border border-gray-400 flex justify-around items-center rounded-2xl mt-[50px]">
          <div className="f gap-[10px] text-[25px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              className="w-[30px] -rotate-90 fill-[#F0421A]"
              version="1.1"
              id="_x32_"
              viewBox="0 0 512 512"
              xml:space="preserve"
            >
              <style type="text/css"></style>
              <g>
                <path
                  class="st0"
                  d="M511.06,286.261c-0.387-10.849-7.42-20.615-18.226-25.356l-193.947-74.094   C298.658,78.15,285.367,3.228,256.001,3.228c-29.366,0-42.657,74.922-42.885,183.583L19.167,260.904   C8.345,265.646,1.33,275.412,0.941,286.261L0.008,311.97c-0.142,3.886,1.657,7.623,4.917,10.188   c3.261,2.564,7.597,3.684,11.845,3.049c0,0,151.678-22.359,198.037-29.559c1.85,82.016,4.019,127.626,4.019,127.626l-51.312,24.166   c-6.046,2.38-10.012,8.206-10.012,14.701v9.465c0,4.346,1.781,8.505,4.954,11.493c3.155,2.987,7.403,4.539,11.74,4.292l64.83-3.667   c2.08,14.436,8.884,25.048,16.975,25.048c8.091,0,14.877-10.612,16.975-25.048l64.832,3.667c4.336,0.246,8.584-1.305,11.738-4.292   c3.174-2.988,4.954-7.148,4.954-11.493v-9.465c0-6.495-3.966-12.321-10.012-14.701l-51.329-24.166c0,0,2.186-45.61,4.037-127.626   c46.358,7.2,198.036,29.559,198.036,29.559c4.248,0.635,8.602-0.485,11.845-3.049c3.261-2.565,5.041-6.302,4.918-10.188   L511.06,286.261z"
                />
              </g>
            </svg>
            {way1}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              className="w-[35px] fill-[#F0421A]"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 512 512"
              xml:space="preserve"
            >
              <path d="M488.727,232.727H79.458l18.454-18.454c9.089-9.089,9.089-23.824,0-32.912  c-9.087-9.089-23.824-9.089-32.912,0L6.82,239.54c-0.545,0.545-1.06,1.116-1.547,1.711c-0.213,0.259-0.397,0.534-0.597,0.799  c-0.256,0.341-0.52,0.675-0.757,1.03c-0.217,0.324-0.405,0.661-0.604,0.995c-0.191,0.318-0.391,0.63-0.566,0.959  c-0.183,0.34-0.337,0.69-0.5,1.038c-0.163,0.341-0.332,0.676-0.478,1.027c-0.14,0.338-0.251,0.683-0.375,1.026  c-0.133,0.374-0.278,0.742-0.393,1.123c-0.102,0.343-0.178,0.692-0.267,1.04c-0.098,0.389-0.208,0.774-0.285,1.17  c-0.079,0.397-0.124,0.799-0.183,1.199c-0.051,0.351-0.116,0.695-0.152,1.05c-0.073,0.739-0.11,1.482-0.113,2.225  C0.003,255.955,0,255.976,0,256s0.003,0.045,0.003,0.068c0.003,0.743,0.04,1.486,0.113,2.225c0.036,0.355,0.101,0.7,0.152,1.05  c0.059,0.4,0.104,0.802,0.183,1.199c0.078,0.396,0.188,0.78,0.285,1.17c0.088,0.348,0.164,0.697,0.267,1.04  c0.116,0.382,0.259,0.749,0.393,1.123c0.124,0.343,0.236,0.687,0.375,1.026c0.146,0.351,0.315,0.686,0.478,1.027  c0.163,0.348,0.318,0.698,0.5,1.038c0.175,0.329,0.375,0.641,0.566,0.959c0.199,0.332,0.386,0.67,0.604,0.995  c0.237,0.355,0.501,0.689,0.757,1.03c0.2,0.265,0.385,0.54,0.597,0.799c0.489,0.596,1.004,1.167,1.547,1.711l58.179,58.179  c4.544,4.544,10.501,6.817,16.455,6.817c5.956,0,11.913-2.271,16.455-6.817c9.089-9.089,9.089-23.823,0-32.912l-18.452-18.454  h409.27C501.58,279.272,512,268.852,512,256C512,243.147,501.58,232.727,488.727,232.727z" />
            </svg>
            {way2}
          </div>
          <div className="f gap-[10px] text-[25px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[30px] fill-[#F0421A]"
            >
              <path d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z" />
              <path d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z" />
              <path d="M8.5 14.5C8.37 14.5 8.24 14.47 8.12 14.42C7.99 14.37 7.89 14.3 7.79 14.21C7.61 14.02 7.5 13.77 7.5 13.5C7.5 13.37 7.53 13.24 7.58 13.12C7.63 13 7.7 12.89 7.79 12.79C7.89 12.7 7.99 12.63 8.12 12.58C8.48 12.43 8.93 12.51 9.21 12.79C9.39 12.98 9.5 13.24 9.5 13.5C9.5 13.56 9.49 13.63 9.48 13.7C9.47 13.76 9.45 13.82 9.42 13.88C9.4 13.94 9.37 14 9.33 14.06C9.3 14.11 9.25 14.16 9.21 14.21C9.02 14.39 8.76 14.5 8.5 14.5Z" />
              <path d="M12 14.5C11.87 14.5 11.74 14.47 11.62 14.42C11.49 14.37 11.39 14.3 11.29 14.21C11.11 14.02 11 13.77 11 13.5C11 13.37 11.03 13.24 11.08 13.12C11.13 13 11.2 12.89 11.29 12.79C11.39 12.7 11.49 12.63 11.62 12.58C11.98 12.42 12.43 12.51 12.71 12.79C12.89 12.98 13 13.24 13 13.5C13 13.56 12.99 13.63 12.98 13.7C12.97 13.76 12.95 13.82 12.92 13.88C12.9 13.94 12.87 14 12.83 14.06C12.8 14.11 12.75 14.16 12.71 14.21C12.52 14.39 12.26 14.5 12 14.5Z" />
              <path d="M15.5 14.5C15.37 14.5 15.24 14.47 15.12 14.42C14.99 14.37 14.89 14.3 14.79 14.21C14.75 14.16 14.71 14.11 14.67 14.06C14.63 14 14.6 13.94 14.58 13.88C14.55 13.82 14.53 13.76 14.52 13.7C14.51 13.63 14.5 13.56 14.5 13.5C14.5 13.24 14.61 12.98 14.79 12.79C14.89 12.7 14.99 12.63 15.12 12.58C15.49 12.42 15.93 12.51 16.21 12.79C16.39 12.98 16.5 13.24 16.5 13.5C16.5 13.56 16.49 13.63 16.48 13.7C16.47 13.76 16.45 13.82 16.42 13.88C16.4 13.94 16.37 14 16.33 14.06C16.3 14.11 16.25 14.16 16.21 14.21C16.02 14.39 15.76 14.5 15.5 14.5Z" />
              <path d="M8.5 18C8.37 18 8.24 17.97 8.12 17.92C8 17.87 7.89 17.8 7.79 17.71C7.61 17.52 7.5 17.26 7.5 17C7.5 16.87 7.53 16.74 7.58 16.62C7.63 16.49 7.7 16.38 7.79 16.29C8.16 15.92 8.84 15.92 9.21 16.29C9.39 16.48 9.5 16.74 9.5 17C9.5 17.26 9.39 17.52 9.21 17.71C9.02 17.89 8.76 18 8.5 18Z" />
              <path d="M12 18C11.74 18 11.48 17.89 11.29 17.71C11.11 17.52 11 17.26 11 17C11 16.87 11.03 16.74 11.08 16.62C11.13 16.49 11.2 16.38 11.29 16.29C11.66 15.92 12.34 15.92 12.71 16.29C12.8 16.38 12.87 16.49 12.92 16.62C12.97 16.74 13 16.87 13 17C13 17.26 12.89 17.52 12.71 17.71C12.52 17.89 12.26 18 12 18Z" />
              <path d="M15.5 18C15.24 18 14.98 17.89 14.79 17.71C14.7 17.62 14.63 17.51 14.58 17.38C14.53 17.26 14.5 17.13 14.5 17C14.5 16.87 14.53 16.74 14.58 16.62C14.63 16.49 14.7 16.38 14.79 16.29C15.02 16.06 15.37 15.95 15.69 16.02C15.76 16.03 15.82 16.05 15.88 16.08C15.94 16.1 16 16.13 16.06 16.17C16.11 16.2 16.16 16.25 16.21 16.29C16.39 16.48 16.5 16.74 16.5 17C16.5 17.26 16.39 17.52 16.21 17.71C16.02 17.89 15.76 18 15.5 18Z" />
              <path d="M20.5 9.83997H3.5C3.09 9.83997 2.75 9.49997 2.75 9.08997C2.75 8.67997 3.09 8.33997 3.5 8.33997H20.5C20.91 8.33997 21.25 8.67997 21.25 9.08997C21.25 9.49997 20.91 9.83997 20.5 9.83997Z" />
              <path d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V17C21.75 20.65 19.65 22.75 16 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z" />
            </svg>
            {time}
          </div>
          <div className="f gap-[10px] text-[25px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-[#F0421A] w-[32px]"
            >
              <path d="M18.5 20.25H14.5C14.09 20.25 13.75 19.91 13.75 19.5C13.75 19.09 14.09 18.75 14.5 18.75H18.5C18.91 18.75 19.25 19.09 19.25 19.5C19.25 19.91 18.91 20.25 18.5 20.25Z" />
              <path d="M16.5 22.25C16.09 22.25 15.75 21.91 15.75 21.5V17.5C15.75 17.09 16.09 16.75 16.5 16.75C16.91 16.75 17.25 17.09 17.25 17.5V21.5C17.25 21.91 16.91 22.25 16.5 22.25Z" />
              <path d="M12.16 11.62C12.13 11.62 12.11 11.62 12.08 11.62C12.03 11.61 11.96 11.61 11.9 11.62C8.99995 11.53 6.80995 9.25 6.80995 6.44C6.79995 5.06 7.33995 3.76 8.31995 2.78C9.29995 1.8 10.6 1.25 11.99 1.25C14.85 1.25 17.18 3.58 17.18 6.44C17.18 9.25 14.99 11.52 12.19 11.62C12.18 11.62 12.17 11.62 12.16 11.62ZM11.99 2.75C11 2.75 10.08 3.14 9.37995 3.83C8.68995 4.53 8.30995 5.45 8.30995 6.43C8.30995 8.43 9.86995 10.05 11.86 10.11C11.92 10.1 12.05 10.1 12.18 10.11C14.15 10.02 15.68 8.41 15.68 6.43C15.68 4.41 14.02 2.75 11.99 2.75Z" />
              <path d="M11.9899 22.56C9.94991 22.56 8.01991 22.03 6.55991 21.05C5.16991 20.12 4.40991 18.85 4.40991 17.48C4.40991 16.11 5.17991 14.85 6.55991 13.93C9.54991 11.93 14.4099 11.93 17.3999 13.93C17.7399 14.16 17.8399 14.63 17.6099 14.97C17.3799 15.32 16.9099 15.41 16.5699 15.18C14.0799 13.52 9.87991 13.52 7.38991 15.18C6.42991 15.82 5.90991 16.63 5.90991 17.48C5.90991 18.33 6.42991 19.16 7.38991 19.8C8.59991 20.61 10.2299 21.05 11.9799 21.05C12.3899 21.05 12.7299 21.39 12.7299 21.8C12.7299 22.21 12.3999 22.56 11.9899 22.56Z" />
            </svg>
            {passenger}
          </div>
          <Link
            to="/insurance"
            className="w-[140px] h-[40px] hover:scale-[1.02] hover:shadow-lg hover:shadow-black/40 t bg-[#F0421A] text-white rounded-full f text-[20px]"
          >
            تغییر
          </Link>
        </div>

        <div className="w-[90%]  h-[3000px]  pb-[20px] gap-[20px] f">
          <div className="w-[30%] h rounded-2xl border-gray-400 flex-col flex justify-start items-centerim border relative">
            <img
              src="/public/image/flight-list-elima.png"
              alt=""
              className="absolute bottom-0"
            />
            <div className="w h-[60px] border-b border-gray-400 f">
              مرتب سازی بر اساس:
            </div>
          </div>
          <div className="w-[70%]   h overflow-scroll scrollbar-hide flex flex-col justify-start  items-center  ">
              {flights.length === 0 ? (
                <p>در حال دریافت اطلاعات...</p>
              ) : 
                <div className="w flex-col f gap-[20px]">
                  {flights.map((flight) => (
                    <InsuranceCard key={flight.ParvazId} flight={flight} />
                  ))}
                </div>
              }
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InsuranceList;
