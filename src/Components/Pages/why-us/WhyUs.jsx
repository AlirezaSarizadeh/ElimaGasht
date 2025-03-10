import { motion } from "framer-motion";
import TopLogo from "../Header/TopLogo";

const WhyUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w h-[100vh]  z-20 flex flex-col justify-start items-start overflow-hidden bg-zinc-200 relative">
        <TopLogo />
        <div className="w-[25%] h bg-[#e1735b] absolute -z-10 left-0"></div>
        <img
          src="/public/image/login-new.png"
          alt=""
          className="w-[60%] absolute -z-10 -left-[150px] -bottom-[100px]"
        />
        <div className="text-[45px] p-[50px] flex flex-col text-[#DF6951] ">
          چرا الیماگشت
          <span className="text-[25px] text-black font-bold">
            از هر نقطه ایران همسفر الیما باشید
          </span>
        </div>
        <div className="flex flex-col pr-[70px] w gap-[70px] text-[20px]">
          <div className="flex justify-start text-wrap gap-[10px] w ">
            <span className="w-[20px] h-[20px] bg-blue-500 rounded-full  "></span>
            <p className="text-wrap w-[50%]">
              از هر نقطه ایران همسفر الیما باشیداز هر نقطه ایران همسفر الیما
              باشیداز هر نقطه ایران همسفر الیما باشیداز هر نقطه ایران همسفر
              الیما باشید
            </p>
          </div>
          <div className="flex justify-start text-wrap gap-[10px] w ">
            <span className="w-[20px] h-[20px] bg-blue-500 rounded-full  "></span>
            <p className="text-wrap w-[50%]">
              از هر نقطه ایران همسفر الیما باشیداز هر نقطه ایران همسفر الیما
              باشیداز هر نقطه ایران همسفر الیما باشیداز هر نقطه ایران همسفر
              الیما باشید
            </p>
          </div>
          <div className="flex justify-start text-wrap gap-[10px] w ">
            <span className="w-[20px] h-[20px] bg-blue-500 rounded-full  "></span>
            <p className="text-wrap w-[45%]">
              از هر نقطه ایران همسفر الیما باشیداز هر نقطه ایران همسفر الیما
              باشیداز هر نقطه ایران همسفر الیما باشیداز هر نقطه ایران همسفر
              الیما باشید
            </p>
          </div>
          <div className="flex justify-start text-wrap gap-[10px] w ">
            <span className="w-[20px] h-[20px] bg-blue-500 rounded-full  "></span>
            <p className="text-wrap w-[40%]">
              از هر نقطه ایران همسفر الیما باشیداز هر نقطه ایران همسفر الیما
              باشیداز هر نقطه ایران همسفر الیما باشیداز هر نقطه ایران همسفر
              الیما باشید
            </p>
          </div>
        </div>
        <div className="w h px-[50px] py-[20px]  flex justify-between gap-[40px] items-center">
          <div className="w-[20%]   shadow-xl shadow-black/40 h bg-[url('/public/image/why-us-1.jpg')] bg-cover bg-bottom "></div>
          <div className="w-[20%]   shadow-xl shadow-black/40 h bg-[url('/public/image/blog-dubaii.jpg')] bg-cover bg-bottom "></div>

          <div className="w-[40%] h bg-zinc-100 shadow-xl font-semibold shadow-black/40 flex flex-col text-wrap text-[20px] p-[20px] items-start justify-center">
            <h1 className="text-[#DF6951] text-[35px] font-normal">تنها کسی هستیم که</h1>
            دارنده ی تور کشتی کروز هستیم و افتخار می کنیم که با کمترین مبلغ عرضه
            می کنیم
          </div>
          <div className="w-[20%]   shadow-xl shadow-black/40 h bg-[url('/public/image/dubai-pic.png')] bg-cover bg-bottom "></div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyUs;
