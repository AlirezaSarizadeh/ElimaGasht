import { motion, AnimatePresence } from "framer-motion";
// import jalaali from "jalaali-js";
import { useEffect, useState } from "react";
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

const FlightCard = ({ flight }) => {
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
  const handleBuyTicket = () => {
    navigate(
      `/ticket?date=${date}&way1=${way1}&way2=${way2}&passenger=${passenger}`
    );
  };
  return (
    <div className="w h-[250px] flex flex-col justify-center items-center rounded-xl border bg-white/70 border-gray-400">
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <div className="w h-[30%] f px-[20px]">
        <div className="w h flex justify-around gap-[20px] items-center">
          <button className="px-3 py-1 bg-red-100 rounded-xl hover:bg-red-200 text-red-700">
            مشاهده اطلاعات
          </button>
          <button className="px-3 py-1 bg-red-100 rounded-xl hover:bg-red-200 text-red-700">
            مشاهده قوانین
          </button>
          <span className="text-[13px] font-semibold text-[#F0421A]">
            {flight.CapLast} صندلی باقی مانده
          </span>
          <span className="text-[13px] font-semibold text-[#F0421A]">
            {flight.Special ? "ویژه" : "غیر قابل استرداد"}
          </span>
        </div>
        <div className="w h flex justify-end items-center gap-[20px]">
          <span className="p-1 px-2 rounded-md bg-sky-100 text-sky-400">
            اکونومی
          </span>
          <span className="p-1 px-2 rounded-md bg-sky-100 text-sky-400">
            سیستمی
          </span>
        </div>
      </div>
      <div className="w h-[70%] f">
        <div className="w h f gap-[20px] pr-[20px]">
          <div className="f flex-col font-medium text-gray-400 text-[10px]">
            <img src="/public/image/gulf-air.png" alt="" className="w-[80px]" />
            {flight.AirlineCode}
          </div>
          <div className="f flex-col">
            <h1 className="font-semibold text-[20px]">{flight.FlightTime}</h1>
            <span className="text-gray-500">{flight.IataCodSource} </span>
          </div>
          <div className="f flex-col h w-[200px]">
            <div className="w h border-b f relative border-gray-400 border-dashed">
              <div className="f gap-[5px] text-[15px] text-gray-500">
                تاریخ: {convertToJalali(flight.FlightDateM)}
              </div>
            </div>
          </div>
          <div className="f flex-col">
            <h1 className="font-semibold text-[20px]">{flight.ArrivalTime || "نامشخص"}</h1>
            <span className="text-gray-500">{flight.IataCodDestinate}</span>
          </div>
        </div>
        <div className="w h p-[20px] flex justify-end items-end">
          <div className="f text-sky-400 gap-[20px]">
            تومان {flight.PriceView.toLocaleString()}
            <button className="w-[200px] h-[40px] bg-[#F0421A] rounded-xl text-white" onClick={() => setIsOpen(true)}>
              جزئیات بلیط
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;