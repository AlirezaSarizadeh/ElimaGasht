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
import React, { useState } from "react";

const Suggest = ({ onSwitch }) => {
    const [activeTab, setActiveTab] = useState(0);
  
  return (
    <>
      <div className="w h-[750px] overflow-hidden pt-[40px] min-[800px]:pr-[70px] max-[800px]:pr-[20px]  min-[800px]:pl-[70px] max-[800px]:pl-[20px]  flex justify-start ro flex-col items-center bg-[url('/public/image/tour-background-Copy.png')]     bg-no-repeat  bg-cover ">
        <div className=" w h-[50px]  text-black font-bold max-[2000px]:text-[44px] max-[1000px]:text-[30px] max-[500px]:text-[25px] ">
          از هر نقطه ایران همسفر الیما باشید
        </div>
        <div className=" w h-[100px] flex max-[2000px]:justify-center max-[600px]:justify-start max-[2000px]:flex-row max-[600px]:flex-col text-black font-bold text-[44px] ">
          <div className="h w-[50%] flex justify-start flex-row items-center">
            <span className="max-[2000px]:text-[35px] max-[1000px]:text-[25px] max-[500px]:text-[20px] font-light">
              برای اطلاع از دیگر پرواز های ما...
            </span>
          </div>
          <div className="h w-[50%] ">
            <button
              onClick={onSwitch}
              className="h w flex max-[2000px]:justify-end max-[600px]:justify-start flex-row items-center"
            >
              <span className="max-[2000px]:text-[25px] max-[1000px]:text-[20px] max-[500px]:text-[15px] font-light">
                مشاهده پرواز های پرطرفدار الیماگشت
              </span>
              <img
                src="./public/image/arrow-tour.png"
                className="w-[25px]"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="  w  flex max-[2000px]:justify-start max-[950px]:justify-center items-start      ">
          <div className="w-full ">
            {/* Tabs Header */}
            <div className=" f w-[640px] h-[55px] mt-[20px] text-sm font-medium    text-center rounded-[15px]  f border-[1px]  border-black">
              <button
                className={` text-center h-[55px] w rounded-r-[15px]  de:text-[20px]  mo:text-[10px] !text-black ${
                  activeTab === 0
                    ? "border-b-4 border-[#F0421A] h-[55px] !text-[#F0421A]"
                    : " !hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(0)}
              >
                تورهای پرطرفدار{" "}
              </button>
              <button
                className={` text-center h-[55px] w  rounded-l-[15px] de:text-[20px]  mo:text-[10px] !text-black ${
                  activeTab === 1
                    ? "border-b-4  border-[#F0421A] h-[55px] !text-[#F0421A]"
                    : " !hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(1)}
              >
                تورهای لحظه آخری{" "}
              </button>
            </div>

            {/* Tabs Content */}
            <div className="py-4 mt-[50px]">
              {activeTab === 0 && (
                <div className="  w-[100vw] h !f">
                  <div className=" w-[92%] h-[100%] ">
                    <Swiper
                      className="rounded-[15px] 
            "
                      modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        Autoplay,
                      ]}
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
              )}
              {activeTab === 1 && (
                <div className="  w-[100vw] h !f">
                  <div className=" w-[92%] h-[100%] ">
                    <Swiper
                      className="rounded-[15px] 
            "
                      modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        Autoplay,
                      ]}
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
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suggest;
