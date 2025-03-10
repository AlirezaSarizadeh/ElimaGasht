import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Popular = ({ onSwitch }) => {
  return (
    <>
      <div className="w h-[650px] overflow-hidden pt-[40px] min-[800px]:pr-[70px] max-[800px]:pr-[20px] min-[1000px]:gap-[35px] min-[800px]:pl-[70px] max-[800px]:pl-[20px]  flex justify-start ro flex-col items-center bg-[url('/public/image/tour-background-Copy.png')]     bg-no-repeat  bg-cover ">
        <div className=" w h-[50px]  text-black font-bold max-[2000px]:text-[44px] max-[1000px]:text-[30px] max-[500px]:text-[25px] ">
          از هر نقطه ایران همسفر الیما باشید
        </div>
        <div className=" w h-[100px] flex max-[2000px]:justify-center max-[600px]:justify-start max-[2000px]:flex-row max-[600px]:flex-col text-black font-bold text-[44px] ">
          <div className="h w-[50%] flex justify-start flex-row items-center">
            <span className="max-[2000px]:text-[35px] max-[1000px]:text-[25px] max-[500px]:text-[20px] font-light">
              مسیر های پرطرفدار الیماگشت
            </span>
          </div>
          <div className="h w-[50%] ">
            <button
              onClick={onSwitch}
              className="h w flex max-[2000px]:justify-end max-[600px]:justify-start flex-row items-center"
            >
              <span className="max-[2000px]:text-[25px] max-[1000px]:text-[20px] max-[500px]:text-[15px] font-light">
                مشاهده پیشنهادات الیماگشت
              </span>
              <img
                src="./public/image/arrow-tour.png"
                className="w-[25px]"
                alt=""
              />
            </button>
          </div>
        </div>

        <div  className="  w-[100vw] h  f">
          <div
            className=" w-[92%] h-[100%] f"
            id="tour-1"
            role="tabpanel"
            aria-labelledby="tour-tab-1"
          >
            <Swiper
              className="rounded-[15px] 
            "
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              slidesPerView={1}
              autoplay
              speed={20000} // Duration of the transition between slides (in milliseconds)
              style={{
                transitionTimingFunction: "linear", // Smooth easing for the transition
              }}
              loop={true}
              centeredSlides={true}
              breakpoints={{
                950: {
                  slidesPerView: 2, // Show 1 slide on small tablets
                },
                1390: {
                  slidesPerView: 3, // Show 2 slides on larger tablets
                },
                1850: {
                  slidesPerView: 3.8, // Show 3 slides on desktop
                },
              }}
            >
              <SwiperSlide className="f">
                <div className=" max-[600px]:h-[85%] max-[2000px]:h-[100%] w-[400px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                  <img
                    src="./public/image/flight-swiper.png"
                    className="h-[55%] object-cover w "
                    alt=""
                  />

                  <div className="w h-[45%] p-[15px] flex flex-col justify-between items-start">
                    <span className="text-[20px]">تور کیش</span>
                    <span>5 ستاره - دو شب</span>
                    <span>3.300.000 تومان</span>
                    <div className="w flex justify-end items-center ">
                      <a
                        href=""
                        className="w-[120px] h-[30px] hover:bg-orange-500 transition-all duration-300 hover:text-white rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                      >
                        جزییات و خرید
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="f">
                <div className=" max-[600px]:h-[85%] max-[2000px]:h-[100%] w-[400px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                  <img
                    src="./public/image/flight-swiper.png"
                    className="h-[55%] object-cover w "
                    alt=""
                  />

                  <div className="w h-[45%] p-[15px] flex flex-col justify-between items-start">
                    <span className="text-[20px]">تور کیش</span>
                    <span>5 ستاره - دو شب</span>
                    <span>3.300.000 تومان</span>
                    <div className="w flex justify-end items-center ">
                      <a
                        href=""
                        className="w-[120px] h-[30px] hover:bg-orange-500 transition-all duration-300 hover:text-white rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                      >
                        جزییات و خرید
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="f">
                <div className=" max-[600px]:h-[85%] max-[2000px]:h-[100%] w-[400px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                  <img
                    src="./public/image/flight-swiper.png"
                    className="h-[55%] object-cover w "
                    alt=""
                  />

                  <div className="w h-[45%] p-[15px] flex flex-col justify-between items-start">
                    <span className="text-[20px]">تور کیش</span>
                    <span>5 ستاره - دو شب</span>
                    <span>3.300.000 تومان</span>
                    <div className="w flex justify-end items-center ">
                      <a
                        href=""
                        className="w-[120px] h-[30px] hover:bg-orange-500 transition-all duration-300 hover:text-white rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                      >
                        جزییات و خرید
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="f">
                <div className=" max-[600px]:h-[85%] max-[2000px]:h-[100%] w-[400px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                  <img
                    src="./public/image/flight-swiper.png"
                    className="h-[55%] object-cover w "
                    alt=""
                  />

                  <div className="w h-[45%] p-[15px] flex flex-col justify-between items-start">
                    <span className="text-[20px]">تور کیش</span>
                    <span>5 ستاره - دو شب</span>
                    <span>3.300.000 تومان</span>
                    <div className="w flex justify-end items-center ">
                      <a
                        href=""
                        className="w-[120px] h-[30px] hover:bg-orange-500 transition-all duration-300 hover:text-white rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                      >
                        جزییات و خرید
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="f">
                <div className=" max-[600px]:h-[85%] max-[2000px]:h-[100%] w-[400px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                  <img
                    src="./public/image/flight-swiper.png"
                    className="h-[55%] object-cover w "
                    alt=""
                  />

                  <div className="w h-[45%] p-[15px] flex flex-col justify-between items-start">
                    <span className="text-[20px]">تور کیش</span>
                    <span>5 ستاره - دو شب</span>
                    <span>3.300.000 تومان</span>
                    <div className="w flex justify-end items-center ">
                      <a
                        href=""
                        className="w-[120px] h-[30px] hover:bg-orange-500 transition-all duration-300 hover:text-white rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                      >
                        جزییات و خرید
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="f">
                <div className=" max-[600px]:h-[85%] max-[2000px]:h-[100%] w-[400px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                  <img
                    src="./public/image/flight-swiper.png"
                    className="h-[55%] object-cover w "
                    alt=""
                  />

                  <div className="w h-[45%] p-[15px] flex flex-col justify-between items-start">
                    <span className="text-[20px]">تور کیش</span>
                    <span>5 ستاره - دو شب</span>
                    <span>3.300.000 تومان</span>
                    <div className="w flex justify-end items-center ">
                      <a
                        href=""
                        className="w-[120px] h-[30px] hover:bg-orange-500 transition-all duration-300 hover:text-white rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                      >
                        جزییات و خرید
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="f">
                <div className=" max-[600px]:h-[85%] max-[2000px]:h-[100%] w-[400px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                  <img
                    src="./public/image/flight-swiper.png"
                    className="h-[55%] object-cover w "
                    alt=""
                  />

                  <div className="w h-[45%] p-[15px] flex flex-col justify-between items-start">
                    <span className="text-[20px]">تور کیش</span>
                    <span>5 ستاره - دو شب</span>
                    <span>3.300.000 تومان</span>
                    <div className="w flex justify-end items-center ">
                      <a
                        href=""
                        className="w-[120px] h-[30px] hover:bg-orange-500 transition-all duration-300 hover:text-white rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                      >
                        جزییات و خرید
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="f">
                <div className=" max-[600px]:h-[85%] max-[2000px]:h-[100%] w-[400px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                  <img
                    src="./public/image/flight-swiper.png"
                    className="h-[55%] object-cover w "
                    alt=""
                  />

                  <div className="w h-[45%] p-[15px] flex flex-col justify-between items-start">
                    <span className="text-[20px]">تور کیش</span>
                    <span>5 ستاره - دو شب</span>
                    <span>3.300.000 تومان</span>
                    <div className="w flex justify-end items-center ">
                      <a
                        href=""
                        className="w-[120px] h-[30px] hover:bg-orange-500 transition-all duration-300 hover:text-white rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                      >
                        جزییات و خرید
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="f">
                <div className=" max-[600px]:h-[85%] max-[2000px]:h-[100%] w-[400px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                  <img
                    src="./public/image/flight-swiper.png"
                    className="h-[55%] object-cover w "
                    alt=""
                  />

                  <div className="w h-[45%] p-[15px] flex flex-col justify-between items-start">
                    <span className="text-[20px]">تور کیش</span>
                    <span>5 ستاره - دو شب</span>
                    <span>3.300.000 تومان</span>
                    <div className="w flex justify-end items-center ">
                      <a
                        href=""
                        className="w-[120px] h-[30px] hover:bg-orange-500 transition-all duration-300 hover:text-white rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                      >
                        جزییات و خرید
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
