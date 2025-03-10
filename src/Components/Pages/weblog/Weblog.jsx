import { Link } from "react-router-dom";
import MenuDesk from "../Header/MenuDesk";
import TopLogo from "../Header/TopLogo";
import { motion } from "framer-motion";

const Weblog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-[100vw] h-[100vh] flex justify-start items-center flex-col bg-zinc-300">
        <TopLogo />
        <MenuDesk />
        <div className="w-[85%] flex h-[65%] flex-col justify-between rounded-2xl mt-[35px]  bg-zinc-100 shadow-2xl p-[30px] shadow-black/40 items-center">
          <div className="flex justify-center items-start h-[15%] ">
            <div className="w-[400px] h-[50px] hover:w-[410px]  border f border-zinc-400 hover:shadow-lg transition-all duration-300   rounded-xl relative">
              <input
                type="search"
                placeholder="موضوع وبلاگ راجستجو کنید..."
                className="w h rounded-xl focus:outline-none text-zinc-500 text-center"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="absolute right-3"
              >
                <path
                  d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                  fill="#414A53"
                />
                <path
                  d="M21.9999 22.75C21.8099 22.75 21.6199 22.68 21.4699 22.53L19.4699 20.53C19.1799 20.24 19.1799 19.76 19.4699 19.47C19.7599 19.18 20.2399 19.18 20.5299 19.47L22.5299 21.47C22.8199 21.76 22.8199 22.24 22.5299 22.53C22.3799 22.68 22.1899 22.75 21.9999 22.75Z"
                  fill="#414A53"
                />
              </svg>
            </div>
          </div>
          <div className="w flex h-[85%] justify-center items-center gap-[20px]">
            <div className="w-[20%]  h rounded-xl bg-[url('/public/image/eiffel.jpg')] bg-cover bg-bottom  flex flex-col justify-start items-start bg-no-repeat  relative">
              <div className="text-[35px] z-10 p-[10px] font-semibold ">سفر به پاریس</div>
              <div className="flex gap-[20px] border-b border-orange-500 items-center justify-center pb-[10px] mr-[10px] z-10">
                <div className="text-[13px]">31 خرداد 1403</div>
                <div className=" text-[13px] gap-[5px] items-center flex">
                  <img
                    src="/public/image/time-2.png"
                    className="mb-[5px] w-[15px]"
                    alt=""
                  />
                  30 دقیقه
                </div>
              </div>
              <div className="text-wrap text-[14px]  z-10  px-[10px] overflow-auto mt-[20px]">
                برج جذاب ترکیه یکی از بزرگترین و زیباترین برج های ترکیه واقع در
                استانبول می باشد که شما می توانید با خرید یک بلیط چارتری مشاهده
                نمایید
              </div>
              <Link
                className="h-[90px] w-[90px] absolute  rounded-full stroke-5 flex justify-center items-center bottom-[-10px] left-[-10px]  bg-zinc-100"
                to="/blog"
              >
                <div className="h-[55px] w-[55px] f hover:scale-[1.1] z-[10] transition-all duration-200 bg-[#A18DB2] rounded-full cursor-pointer">
                  <img
                    src="/public/image/arrow-blog.png"
                    className="rotate-[135deg] w-[30px]"
                    alt=""
                  />
                </div>
              </Link>
              <div className="h w absolute bg-gradient-to-b from-zinc-100/70 via-transparent to-transparent"></div>
            </div>
            <div className="w-[50%] h rounded-xl flex flex-col justify-start items-end bg-[#dbf1ac] relative">
              <div className="h-[15%] f w-[85%]  z-10">
                <div className="w h flex font-semibold border-b border-orange-500 justify-start text-[35px] items-end">
                  با الیماگشت آشنا شو
                </div>
                <div className="w h flex gap-[20px] justify-start text-[13px] items-center ">
                  31 خرداد 1403
                  <div className=" text-[13px] gap-[5px] items-center flex">
                    <img
                      src="/public/image/time-2.png"
                      className="mb-[5px] w-[15px]"
                      alt=""
                    />
                    30 دقیقه
                  </div>
                </div>
              </div>
              <div className="w-[85%] h-[30%] text-wrap text-[14px] mt-[10px] pl-[20px] z-10  overflow-auto">
                برج جذاب ترکیه یکی از بزرگترین و زیباترین برج های ترکیه واقع در
                استانبول می باشد که شما می توانید با خرید یک بلیط چارتری مشاهده
                نمایید برج جذاب ترکیه یکی از بزرگترین و زیباترین برج های ترکیه
                واقع در استانبول می باشد که شما می توانید با خرید یک بلیط چارتری
                مشاهده نمایید برج جذاب ترکیه یکی از بزرگترین و زیباترین برج های
                ترکیه واقع در استانبول می باشد که شما می توانید با خرید یک بلیط
                چارتری مشاهده نمایید برج جذاب ترکیه یکی از بزرگترین و زیباترین
                برج های ترکیه واقع در استانبول می باشد که شما می توانید با خرید
                یک بلیط چارتری مشاهده نمایید
              </div>

              <div className="h-[90px] z-[10] w-[90px] absolute  rounded-full stroke-5 flex justify-center items-center top-[-10px] right-[-10px]  bg-zinc-100">
                <div className="h-[55px] w-[55px] hover:scale-[1.1] transition-all duration-200 f bg-[#dbf1ac] rounded-full cursor-pointer">
                  <img
                    src="/public/image/arrow-blog.png"
                    className="-rotate-45 w-[30px]"
                    alt=""
                  />
                </div>
              </div>
              <img
                src="./public/image/quastion-pic-2.png"
                className="w-[400px] absolute bottom-0 right-0"
                alt=""
              />
              <div className="h w absolute bg-gradient-to-br from-zinc-100/70 via-transparent to-transparent"></div>
            </div>
            <div className="w-[30%] flex justify-center items-center flex-col gap-[20px] h   ">
              <div className="w h rounded-xl scrollbar-hide flex-wrap p-[20px] overflow-auto  f bg-gradient-to-br from-purple-300 to-purple-500 gap-[10px]">
                <div className="h-[50px] px-[50px] font-semibold  rounded-md  shadow-lg text-zinc-500 hover:h-[53px] hover:px-[55px] transition-all duration-200 cursor-pointer shadow-black/40 f backdrop-brightness-150">
                  سفر به پاریس
                </div>
                <div className="h-[50px] px-[50px] font-semibold  rounded-md  shadow-lg text-zinc-500 hover:h-[53px] hover:px-[55px] transition-all duration-200 cursor-pointer shadow-black/40 f backdrop-brightness-150">
                  پاریس
                </div>
                <div className="h-[50px] px-[50px] font-semibold  rounded-md  shadow-lg text-zinc-500 hover:h-[53px] hover:px-[55px] transition-all duration-200 cursor-pointer shadow-black/40 f backdrop-brightness-150">
                  سفر به
                </div>
                <div className="h-[50px] px-[50px] font-semibold  rounded-md  shadow-lg text-zinc-500 hover:h-[53px] hover:px-[55px] transition-all duration-200 cursor-pointer shadow-black/40 f backdrop-brightness-150">
                  سفر به پاریس
                </div>
                <div className="h-[50px] px-[50px] font-semibold  rounded-md  shadow-lg text-zinc-500 hover:h-[53px] hover:px-[55px] transition-all duration-200 cursor-pointer shadow-black/40 f backdrop-brightness-150">
                  پاریس
                </div>
                <div className="h-[50px] px-[50px] font-semibold  rounded-md  shadow-lg text-zinc-500 hover:h-[53px] hover:px-[55px] transition-all duration-200 cursor-pointer shadow-black/40 f backdrop-brightness-150">
                  سفر به پاریس
                </div>
              </div>
              <div className="w h rounded-xl bg-zinc-800  bg-[url('/public/image/dubai-pic.png')] bg-cover bg-no-repeat bg-center  f relative">
                <div className="h-[80px] w-[80px] absolute  rounded-full stroke-5 flex justify-center items-center bottom-[-45px]   bg-zinc-100">
                  <div className="h-[55px] w-[55px] f hover:scale-[1.1] transition-all duration-200  bg-zinc-800 rounded-full cursor-pointer">
                    <img
                      src="/public/image/arrow-blog.png"
                      className=" w-[30px] invert"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Weblog;
