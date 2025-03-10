import TopLogo from "../Header/TopLogo";
import MenuDesk from "../Header/MenuDesk";
import React, { useEffect, useState, useRef } from "react";
import Footer from "../footer/Footer";
import Question from "../question/question";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
const VisaCanada = () => {
   const [progress, setProgress] = useState(0);
   const targetRef = useRef(null);
   const pathRef = useRef(null);
   const [pathLength, setPathLength] = useState(0);

   useEffect(() => {
     if (pathRef.current) {
       setPathLength(pathRef.current.getTotalLength());
     }

     const handleScroll = () => {
       if (!targetRef.current) return;

       const rect = targetRef.current.getBoundingClientRect();
       const windowHeight = window.innerHeight;

       const targetMiddle = rect.top + rect.height / 2;
       const viewportMiddle = windowHeight / 2;

       const totalDistance = targetMiddle - viewportMiddle;
       const startFilling = windowHeight / 2;
       const endFilling = 0;

       const scrollProgress = Math.min(
         100,
         Math.max(0, ((startFilling - totalDistance) / startFilling) * 100)
       );

       setProgress(scrollProgress);
     };

     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
  return (
    <>
      <div className="w h-[1069px]  top-0 bg-cover de:bg-[url('/public/image/canada-elima.jpg')] mo:bg-[url('/public/image/tour-elima-mobile-background.png')]   bg-no-repeat bg-center ">
        <TopLogo />

        <MenuDesk />

        <div
          className="w de:h-[625px] mo:h-[85%]  flex mo:justify-center
        items-center de:justify-start flex-col  "
        >
          <div
            className="w-[85%] mo:h-[100%] de:h-[200px] de:flex de:gap-[20px] mo:hidden  de:flex-col de:justify-center  
              de:border-[1px]  de:border-solid de:rounded-b-[15px] de:border-t-0 mo:border-none    "
          >
            <div className="w-full h-full flex justify-center gap-[70px] items-end">
              <div
                onClick="countryList()"
                className="w-[20%]  flex justify-center items-center text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-150 cursor-pointer  "
              >
                <input
                  type="text"
                  name=""
                  autocomplete="off"
                  id="countryInput"
                  placeholder="کشور"
                  className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl outline-none !ring-0 bg-transparent focus:border-none"
                />

                <div
                  id="country-list"
                  className="w-full absolute  h-auto  flex-col  bg-black/40 justify-start overflow-hidden items-center top-[50px] left-0 backdrop-blur-3xl rounded-md border-[1px] border-solid backdrop-brightness-150 cursor-pointer"
                >
                  <label
                    for="canada"
                    className="w-full cursor-pointer  hover:bg-[#F0421A]  flex justify-center items-center text-white h-[40px] border-b-[1px] border-solid"
                  >
                    کانادا
                    <input
                      type="radio"
                      onClick="countryList()"
                      value="کانادا"
                      name="country"
                      id="canada"
                      className="absolute countryRadio opacity-0"
                    />
                  </label>
                  <label
                    for="dubai"
                    className="w-full cursor-pointer  hover:bg-[#F0421A] flex justify-center items-center text-white h-[40px] "
                  >
                    دبی
                    <input
                      type="radio"
                      name="country"
                      onClick="countryList()"
                      value="دبی"
                      id="dubai"
                      className="absolute countryRadio opacity-0 "
                    />
                  </label>
                </div>
              </div>

              <div
                onClick="enterList()"
                className="w-[20%] h-[40px] rounded-xl relative text-white backdrop-blur-3xl border-[1px] border-solid backdrop-brightness-150 cursor-pointer "
              >
                <input
                  type="text"
                  name=""
                  autocomplete="off"
                  id="enterInput"
                  placeholder="نوع ورود"
                  className="t border-none text-center w-full h-full placeholder:text-zinc-100/80 rounded-xl bg-black/20 outline-none !ring-0  focus:border-none"
                />
                <div
                  id="enter-list"
                  className="w-full absolute  h-auto  flex-col hidden justify-start overflow-hidden items-center top-[50px] left-0 !backdrop-blur-3xl rounded-md border-[1px] border-solid backdrop-brightness-150 cursor-pointer bg-black/40"
                >
                  <label
                    for="once"
                    className="w-full cursor-pointer  hover:bg-[#F0421A]  flex justify-center items-center text-white h-[40px] border-b-[1px] border-solid"
                  >
                    یکبار
                    <input
                      type="radio"
                      onClick="enterList()"
                      value="یکبار"
                      name="enter"
                      id="once"
                      className="absolute enterRadio opacity-0"
                    />
                  </label>
                  <label
                    for="multi"
                    className="w-full cursor-pointer  hover:bg-[#F0421A] flex justify-center items-center text-white h-[40px]  border-b-[1px] border-solid"
                  >
                    چندبار
                    <input
                      type="radio"
                      name="enter"
                      onClick="enterList()"
                      value="چندبار"
                      id="multi"
                      className="absolute enterRadio opacity-0 "
                    />
                  </label>
                  <label
                    for="group"
                    className="w-full cursor-pointer  hover:bg-[#F0421A]  flex justify-center items-center text-white h-[40px]  "
                  >
                    گروهی
                    <input
                      type="radio"
                      name="enter"
                      onClick="enterList()"
                      value="گروهی"
                      id="group"
                      className="absolute enterRadio opacity-0 "
                    />
                  </label>
                </div>
              </div>
              <div
                onClick="typeList()"
                className="w-[20%] h-[40px] text-white rounded-xl backdrop-blur-3xl border-[1px] border-solid  cursor-pointer "
              >
                <input
                  type="text"
                  name=""
                  autocomplete="off"
                  id="typeInput"
                  placeholder="نوع ویزا"
                  className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 outline-none rounded-xl !ring-0 bg-transparent focus:border-none"
                />
                <div
                  id="type-list"
                  className="w-full absolute  h-auto  flex-col hidden bg-black/40 justify-start overflow-hidden items-center top-[50px] left-0 backdrop-blur-3xl rounded-md border-[1px] border-solid backdrop-brightness-150 cursor-pointer"
                >
                  <label
                    for="tourist"
                    className="w-full cursor-pointer  hover:bg-[#F0421A]  flex justify-center items-center text-white h-[40px] border-b-[1px] border-solid"
                  >
                    توریستی
                    <input
                      type="radio"
                      onClick="typeList()"
                      value="توریستی"
                      name="type"
                      id="tourist"
                      className="absolute typeRadio opacity-0"
                    />
                  </label>
                  <label
                    for="educate"
                    className="w-full cursor-pointer  hover:bg-[#F0421A] flex justify-center items-center text-white h-[40px] "
                  >
                    تحصیلی
                    <input
                      type="radio"
                      name="type"
                      onClick="typeList()"
                      value="تحصیلی"
                      id="educate"
                      className="absolute typeRadio opacity-0 "
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full h-full px-[50px] flex justify-end items-center ">
              <div className="border-[1px] text-zinc-300 text-[13px] flex  justify-center items-center border-solid rounded-full backdrop-blur-3xl  backdrop-brightness-150 w-[80px] cursor-pointer h-[30px] ">
                جستجو
              </div>
            </div>
          </div>
          <div className=" justify-start items-center h-[80%]  w-[90%] gap-[30px] max-w-[70%] de:hidden mo:flex flex-col ">
            <div className="w flex justify-start items-center  ">
              <div
                onmousedown="return false;"
                onselectstart="return false;"
                className="w-[40%] cursor-default flex justify-center items-center text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-100  "
              >
                ویزا
              </div>
            </div>
            <div
              data-drawer-target="drawer-top-example"
              data-drawer-show="drawer-top-example"
              data-drawer-placement="top"
              aria-controls="drawer-top-example"
              className="w flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-150 cursor-pointer"
            >
              <input
                type="text"
                name=""
                autocomplete="off"
                id="moBackCountryInput"
                placeholder="کشور"
                className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
              />
            </div>
            <div className="w gap-[20px] flex justify-between items-center  ">
              <div
                data-drawer-target="drawer-top-enter"
                data-drawer-show="drawer-top-enter"
                data-drawer-placement="top"
                aria-controls="drawer-top-example"
                className="w-full flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-150 cursor-pointer"
              >
                <input
                  type="text"
                  name=""
                  autocomplete="off"
                  id="moBackEnterInput"
                  placeholder="نوع ورود"
                  className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                />
              </div>
              <div
                data-drawer-target="drawer-top-type"
                data-drawer-show="drawer-top-type"
                data-drawer-placement="top"
                aria-controls="drawer-top-example"
                className="w-full flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-90 cursor-pointer"
              >
                <input
                  type="text"
                  name=""
                  autocomplete="off"
                  id="moBackTypeInput"
                  placeholder="نوع ویزا"
                  className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                />
              </div>
            </div>
            <div className="w flex justify-end items-center">
              <div className="w-[15%] min-w-[75px] flex justify-center items-center   text-white  h-[30px] border-[1px] border-solid rounded-full   backdrop-blur-3xl  backdrop-brightness-150 cursor-pointer">
                جستجو
              </div>
            </div>
          </div>
          <div
            id="drawer-top-example"
            className="fixed top-0 left-0 right-0 z-40 w-full h-[40%] p-4 flex justify-center items-start transition-transform -translate-y-full backdrop-blur-2xl "
            tabindex="-1"
            aria-labelledby="drawer-top-label"
          >
            <button
              type="button"
              data-drawer-hide="drawer-top-example"
              aria-controls="drawer-top-example"
              className="text-gray-400 hover:text-gray-100 transition-all duration-200 bg-transparent text-sm  absolute top-3 right-3 inline-flex items-center justify-center "
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <div className="w-[60%] mt-[50px] flex justify-center items-center text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-150 cursor-pointer  ">
              <input
                type="text"
                name=""
                autocomplete="off"
                id="moCountryInput"
                placeholder="کشور"
                className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
              />

              <div
                data-drawer-hide="drawer-top-example"
                aria-controls="drawer-top-example"
                className="w-full absolute  h-auto  flex-col  bg-black/40 justify-start overflow-hidden items-center top-[50px] left-0 backdrop-blur-3xl rounded-md border-[1px] border-solid backdrop-brightness-150 cursor-pointer"
              >
                <label
                  for="canada"
                  className="w-full cursor-pointer  hover:bg-[#F0421A]  flex justify-center items-center text-white h-[40px] border-b-[1px] border-solid"
                >
                  کانادا
                  <input
                    type="radio"
                    onClick="countryList()"
                    value="کانادا"
                    name="country"
                    id="canada"
                    className="absolute countryRadio opacity-0"
                  />
                </label>
                <label
                  for="dubai"
                  className="w-full cursor-pointer  hover:bg-[#F0421A] flex justify-center items-center text-white h-[40px] "
                >
                  دبی
                  <input
                    type="radio"
                    name="country"
                    onClick="countryList()"
                    value="دبی"
                    id="dubai"
                    className="absolute countryRadio opacity-0 "
                  />
                </label>
              </div>
            </div>
          </div>
          <div
            id="drawer-top-enter"
            className="fixed top-0  flex justify-center items-start left-0 right-0 z-40 w-full h-[40%] p-4 transition-transform -translate-y-full backdrop-blur-2xl "
            tabindex="-1"
          >
            <button
              type="button"
              data-drawer-hide="drawer-top-enter"
              aria-controls="drawer-top-enter"
              className="text-gray-400 hover:text-gray-100 transition-all duration-200 bg-transparent text-sm  absolute top-3 right-3 inline-flex items-center justify-center "
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <div className="w-[60%] h-[40px] mt-[50px] rounded-xl relative text-white backdrop-blur-3xl border-[1px] border-solid backdrop-brightness-150 cursor-pointer ">
              <input
                type="text"
                name=""
                autocomplete="off"
                id="moEnterInput"
                placeholder="نوع ورود"
                className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
              />
              <div
                data-drawer-hide="drawer-top-enter"
                aria-controls="drawer-top-enter"
                id="enter-list"
                className="w-full absolute  h-auto  flex-col  justify-start overflow-hidden items-center top-[50px] left-0 !backdrop-blur-3xl rounded-md border-[1px] border-solid backdrop-brightness-150 cursor-pointer bg-black/40"
              >
                <label
                  for="once"
                  className="w-full cursor-pointer  hover:bg-[#F0421A]  flex justify-center items-center text-white h-[40px] border-b-[1px] border-solid"
                >
                  یکبار
                  <input
                    type="radio"
                    onClick="enterList()"
                    value="یکبار"
                    name="enter"
                    id="once"
                    className="absolute enterRadio opacity-0"
                  />
                </label>
                <label
                  for="multi"
                  className="w-full cursor-pointer  hover:bg-[#F0421A] flex justify-center items-center text-white h-[40px]  border-b-[1px] border-solid"
                >
                  چندبار
                  <input
                    type="radio"
                    name="enter"
                    onClick="enterList()"
                    value="چندبار"
                    id="multi"
                    className="absolute enterRadio opacity-0 "
                  />
                </label>
                <label
                  for="group"
                  className="w-full cursor-pointer  hover:bg-[#F0421A]  flex justify-center items-center text-white h-[40px]  "
                >
                  گروهی
                  <input
                    type="radio"
                    name="enter"
                    onClick="enterList()"
                    value="گروهی"
                    id="group"
                    className="absolute enterRadio opacity-0 "
                  />
                </label>
              </div>
            </div>
          </div>
          <div
            id="drawer-top-type"
            className="fixed top-0 left-0 flex justify-center items-start right-0 z-40 w-full h-[40%] p-4 transition-transform -translate-y-full backdrop-blur-2xl "
            tabindex="-1"
          >
            <button
              type="button"
              data-drawer-hide="drawer-top-type"
              aria-controls="drawer-top-type"
              className="text-gray-400 hover:text-gray-100 transition-all duration-200 bg-transparent text-sm  absolute top-3 right-3 inline-flex items-center justify-center "
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <div className="w-[60%] h-[40px] text-white mt-[50px] rounded-xl backdrop-blur-3xl border-[1px] border-solid  cursor-pointer ">
              <input
                type="text"
                name=""
                autocomplete="off"
                id="moTypeInput"
                placeholder="نوع ویزا"
                className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
              />
              <div
                data-drawer-hide="drawer-top-type"
                aria-controls="drawer-top-type"
                id="type-list"
                className="w-full absolute  h-auto  flex-col  bg-black/40 justify-start overflow-hidden items-center top-[50px] left-0 backdrop-blur-3xl rounded-md border-[1px] border-solid backdrop-brightness-150 cursor-pointer"
              >
                <label
                  for="tourist"
                  className="w-full cursor-pointer  hover:bg-[#F0421A]  flex justify-center items-center text-white h-[40px] border-b-[1px] border-solid"
                >
                  توریستی
                  <input
                    type="radio"
                    onClick="typeList()"
                    value="توریستی"
                    name="type"
                    id="tourist"
                    className="absolute typeRadio opacity-0"
                  />
                </label>
                <label
                  for="educate"
                  className="w-full cursor-pointer  hover:bg-[#F0421A] flex justify-center items-center text-white h-[40px] "
                >
                  تحصیلی
                  <input
                    type="radio"
                    name="type"
                    onClick="typeList()"
                    value="تحصیلی"
                    id="educate"
                    className="absolute typeRadio opacity-0 "
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w min-h-[900px] bg-white h-auto overflow-hidden  py-[40px] min-[800px]:px-[70px] max-[800px]:px-[20px] min-[1000px]:gap-[40px] relative flex justify-start  flex-col items-center bg-[url('/public/image/visa-back-canada.png')]  bg-no-repeat  bg-cover ">
        <img
          src="./public/image/elima-canada-1.png"
          className="absolute right-0 bottom-0 w-[290px]"
          alt=""
        />
        <img
          src="./public/image/elima-canada-2.png"
          className="absolute left-0 bottom-0 w-[205px]"
          alt=""
        />
        <div className=" w h-[50px]  text-black font-bold max-[2000px]:text-[44px] max-[1000px]:text-[30px] max-[600px]:text-[25px] max-[500px]:text-[19px] ">
          تضمین بالاترین کیفیت در کمترین زمان ممکن{" "}
        </div>
        <div className="h w flex justify-start flex-row items-center">
          <span className="max-[2000px]:text-[35px] max-[1000px]:text-[25px] max-[500px]:text-[20px] font-medium text-black">
            قیمت ویزای توریستی کانادا
          </span>
        </div>
        <div className="max-w-[890px] w gap-[50px] flex max-[930px]:justify-center justify-between flex-wrap items-center h-auto ">
          <div className="w-[370px] h-[350px] hover:w-[380px] hover:h-[360px] backdrop-blur-2xl backdrop-brightness-105 rounded-xl border-[1px] border-solid border-zinc-100 hover:shadow-lg transition-all duration-200 shadow-black/40 ">
            <div className="w-full h-[45%] border-b-[1px] flex flex-col justify-around font-bold text-[25px] items-center border-solid border-zinc-100  ">
              <img
                src="./public/image/person-icon.png"
                alt=""
                className="w-[80px]"
              />
              بزرگسال
            </div>
            <div className="w-full h-[55%] flex px-[20px] flex-grow flex-col justify-around items-center ">
              <div className="w-full h-full flex justify-between items-center ">
                <span className="text-[15px] ">بدون دعوت نامه</span>
                <span className="font-semibold text-[17px]"> 500 دلار</span>
              </div>
              <div className="w-full h-full flex justify-between items-center ">
                <span className="text-[15px] ">بدون دعوت نامه</span>
                <span className="font-semibold text-[17px]"> 500 دلار</span>
              </div>
            </div>
          </div>
          <div className="w-[370px] h-[350px] hover:w-[380px] hover:h-[360px] backdrop-blur-2xl backdrop-brightness-105 rounded-xl border-[1px] border-solid border-zinc-100 hover:shadow-lg transition-all duration-200 shadow-black/40 ">
            <div className="w-full h-[45%] border-b-[1px] flex flex-col justify-around font-bold text-[25px] items-center border-solid border-zinc-100  ">
              <img
                src="./public/image/family-icon.png"
                alt=""
                className="w-[100px]"
              />
              کمتر از 14 سال
            </div>
            <div className="w-full h-[55%] flex px-[20px] flex-grow flex-col justify-around items-center ">
              <div className="w-full h-full flex justify-between items-center ">
                <span className="text-[15px] ">بدون دعوت نامه</span>
                <span className="font-semibold text-[17px]"> 500 دلار</span>
              </div>
              <div className="w-full h-full flex justify-between items-center ">
                <span className="text-[15px] ">بدون دعوت نامه</span>
                <span className="font-semibold text-[17px]"> 500 دلار</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w flex justify-center mt-[50px] items-center h-auto gap-[150px]">
          <div className="max-w-[890px] w h-[250px] max-[617px]:h-[370px]  p-[20px] backdrop-blur-2xl backdrop-brightness-105 rounded-xl flex flex-col  border-[1px] border-solid border-zinc-200/70 shadow-lg shadow-black/20">
            <div className="w-full h-full flex gap-[20px] flex-col  items-start  justify-center">
              <div className="flex min-[501px]:w-[70%] gap-[10px] w max-[500px]:flex-wrap  items-center h-full justify-between ">
                <span className="text-[25px] font-bold">نوع ویزا :</span>
                <div className="w flex justify-between items-center">
                  <input
                    type="radio"
                    id="invite"
                    name="type"
                    className="opacity-0 peer/invite"
                  />
                  <label
                    for="invite"
                    className=" hover:bg-[#F0421A]/30 w-[130px] cursor-pointer transition-all duration-200 h-[40px] rounded-full flex justify-center items-center border-[1px] border-solid border-zinc-800 peer-checked/invite:bg-[#F0421A] peer-checked/invite:text-white "
                  >
                    با دعوت نامه
                  </label>
                  <input
                    type="radio"
                    id="no-invite"
                    name="type"
                    className="opacity-0 peer/no-invite"
                  />
                  <label
                    for="no-invite"
                    className="w-[130px]  hover:bg-[#F0421A]/30 cursor-pointer transition-all duration-100 h-[40px] rounded-full flex justify-center items-center border-[1px] border-solid border-zinc-800  peer-checked/no-invite:bg-[#F0421A] peer-checked/no-invite:text-white"
                  >
                    بدون دعوت نامه
                  </label>
                </div>
              </div>
              <div className="flex h-full min-[501px]:w-[70%] gap-[10px] w max-[500px]:flex-wrap  items-center justify-between ">
                <span className="text-[25px] font-bold">سن فرد :</span>
                <div className="w flex justify-between items-center">
                  <input
                    type="radio"
                    id="adult"
                    name="age"
                    className="opacity-0 peer/adult"
                  />
                  <label
                    for="adult"
                    className=" w-[130px] cursor-pointer transition-all  hover:bg-[#F0421A]/30 duration-100 h-[40px] rounded-full flex justify-center items-center border-[1px] border-solid border-zinc-800  peer-checked/adult:bg-[#F0421A] peer-checked/adult:text-white"
                  >
                    {" "}
                    بزرگسال
                  </label>
                  <input
                    type="radio"
                    id="kid"
                    name="age"
                    className="opacity-0 peer/kid"
                  />
                  <label
                    for="kid"
                    className="w-[130px] cursor-pointer transition-all duration-100  hover:bg-[#F0421A]/30 h-[40px] rounded-full flex justify-center items-center border-[1px] border-solid border-zinc-800  peer-checked/kid:bg-[#F0421A] peer-checked/kid:text-white"
                  >
                    کمتر از 14 سال{" "}
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-wrap mb-[20px] items-center justify-between ">
              <div className="flex flex-col my-[10px]">
                <div className="flex  gap-[10px]">
                  زمان پردازش ویزا :
                  <span className="text-[18px] font-bold">59 روز کاری</span>
                </div>
                <div className="flex gap-[10px] ">
                  اعتبار ویزا از زمان صدور :
                  <span className="text-[18px] font-bold">
                    طبق اعتبار پاسپورت
                  </span>
                </div>
              </div>
              <div className="w-[190px] h-[60px] border-[1px] flex  justify-center items-center hover:bg-[#F0421A] hover:text-white transition-all duration-200 cursor-pointer text-[20px] border-zinc-800 border-solid rounded-xl">
                در خواست ویزا
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w h-auto bg-bottom  px-[30px] flex justify-start flex-col gap-[30px] py-[20px] items-center bg-no-repeat bg-white bg-[url('/public/image/visa-back-canada-copy.png')] bg-cover relative">
        <div className="h-[15%] w flex justify-start flex-row px-[70px] items-center">
          <span className="max-[2000px]:text-[35px] max-[1000px]:text-[25px] max-[500px]:text-[20px] font-medium text-black">
            انواع ویزای توریستی کانادا
          </span>
        </div>
        <div className="w h-[60%] flex-wrap flex gap-[20px] justify-around items-center  ">
          <div className="w-[370px] h-[350px] backdrop-blur-2xl backdrop-brightness-105 rounded-xl border-[1px] border-solid border-white/70 shadow-lg shadow-black/40">
            <div className="w-full h-[35%] flex flex-col justify-end gap-[10px] font-bold text-[25px] items-center  ">
              ویزای سینگل
              <span className="text-[20px] font-normal">
                یک بار اجازه ورود به مدت ۶ ماه
              </span>
            </div>
            <div className="w-full h-[65%] flex px-[20px] text-[15px]  text-wrap flex-col justify-around items-center ">
              با ویزای سینگل کانادا تنها یک بار اجازه ورود به این کشور را دارید.
              برای مثال، برای بازدید رسمی مقامات این کشور، شرکت در کنفرانس یا
              شرکت در رخداد خاصی در این کشور ویزای سینگل صادر می‌شود. پس از خروج
              از کانادا، در صورتی که قصد سفر دوباره به این کشور را داشته باشید
              لازم است مجددا برای ویزای جدید اقدام کنید. 
            </div>
          </div>
          <div className="w-[370px] h-[350px] backdrop-blur-2xl backdrop-brightness-105 rounded-xl border-[1px] border-solid border-white/70 shadow-lg shadow-black/40">
            <div className="w-full h-[35%] flex flex-col justify-end gap-[10px] font-bold text-[25px] items-center  ">
              ویزای سینگل
              <span className="text-[20px] font-normal">
                یک بار اجازه ورود به مدت ۶ ماه
              </span>
            </div>
            <div className="w-full h-[65%] flex px-[20px] text-[15px]  text-wrap flex-col justify-around items-center ">
              با ویزای سینگل کانادا تنها یک بار اجازه ورود به این کشور را دارید.
              برای مثال، برای بازدید رسمی مقامات این کشور، شرکت در کنفرانس یا
              شرکت در رخداد خاصی در این کشور ویزای سینگل صادر می‌شود. پس از خروج
              از کانادا، در صورتی که قصد سفر دوباره به این کشور را داشته باشید
              لازم است مجددا برای ویزای جدید اقدام کنید. 
            </div>
          </div>
          <div className="w-[370px] h-[350px] backdrop-blur-2xl backdrop-brightness-105 rounded-xl border-[1px] border-solid border-white/70 shadow-lg shadow-black/40">
            <div className="w-full h-[35%] flex flex-col justify-end gap-[10px] font-bold text-[25px] items-center  ">
              ویزای سینگل
              <span className="text-[20px] font-normal">
                یک بار اجازه ورود به مدت ۶ ماه
              </span>
            </div>
            <div className="w-full h-[65%] flex px-[20px] text-[15px]  text-wrap flex-col justify-around items-center ">
              با ویزای سینگل کانادا تنها یک بار اجازه ورود به این کشور را دارید.
              برای مثال، برای بازدید رسمی مقامات این کشور، شرکت در کنفرانس یا
              شرکت در رخداد خاصی در این کشور ویزای سینگل صادر می‌شود. پس از خروج
              از کانادا، در صورتی که قصد سفر دوباره به این کشور را داشته باشید
              لازم است مجددا برای ویزای جدید اقدام کنید. 
            </div>
          </div>
        </div>

        <div className="w flex h-[25%] justify-center text-[20px] items-center  ">
          <a
            href=""
            className="w-[410px] h-[80px] b rounded-xl flex justify-center items-center  backdrop-blur-2xl backdrop-brightness-105 hover:backdrop-brightness-110 hover:shadow-xl shadow-black/80 t"
          >
            شانس ویزای خود را امتحان کن
          </a>
        </div>
      </div>
      <div
        className="w min-h-[900px] bg-white h-auto overflow-hidden  py-[40px] min-[800px]:px-[70px] max-[800px]:px-[20px] min-[1000px]:gap-[40px] relative flex justify-start  flex-col items-center bg-[url('/public/image/visa-back-canada.png')]  bg-no-repeat  bg-cover "
        ref={targetRef}
      >
                <img
          src="./public/image/Squirrel cartoo b8f9ff00-df7d-478b-bf1d-07f36f39b8ce_prev_ui 1.png"
          class="absolute bottom-0 max-[900px]:left-0 left-[400px]"
          alt=""
        />
        <img
          src="./public/image/Squirrel cartoo 4e428bb8-9049-404e-9ca7-5852c594fcb2_prev_ui 1.png"
          class="absolute bottom-0 right-0 w-[170px]"
          alt=""
        />
        <div class="h-[15%] w flex justify-start flex-row  items-center">
          <span class="max-[2000px]:text-[35px] max-[1000px]:text-[25px] max-[500px]:text-[20px] font-medium text-black">
            چرا الیما انتخاب شماست..
          </span>
        </div>
        <svg
          className="absolute top-64 -left-40 w-full h-full rotate-90 scale-[2.2]"
          viewBox="0 0 400 1000"
          fill="none"
        >
          <path
            ref={pathRef}
            d="M 10 10 Q 200 100, 100 200 T 100 350 T 10 450 T 20 550 T 10 800 "
            stroke="gray"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 10 10 Q 200 100, 100 200 T 100 350 T 10 450 T 20 550 T 10 800  "
            stroke="#F64218"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength - (progress / 100) * pathLength}
            style={{ transition: "stroke-dashoffset 0.3s ease-out" }}
          />
        </svg>
        {/* Horizontal Progress Bar */}

        {/* Vertical Progress Bar */}
        <div className="rounded-full absolute top-0 right-0 h-full w-[5px] de:hidden bg-gray-200">
          <div
            className="rounded-full w-full bg-orange-500 transition-all"
            style={{ height: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div class="w h-[800px] bg-bottom max-[1000px]:h-[700px] max-[800px]:h-[600px] bg-white flex justify-start flex-col items-center bg-no-repeat  bg-cover relative bg-[url('/public/image/visa-back-canada-copy.png')]">
        <div class="h-[15%] w flex justify-start flex-row px-[70px] items-center">
          <span class="max-[2000px]:text-[35px] max-[1000px]:text-[25px] max-[500px]:text-[20px] font-medium text-black">
            چرا الیما انتخاب شماست..
          </span>
        </div>
        <div className=" w-[80%] h-[100%] ">
          <Swiper
            className="f"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={3}
            autoplay
            speed={500} // Duration of the transition between slides (in milliseconds)
            style={{
              transitionTimingFunction: "ease-out", // Smooth easing for the transition
            }}
            loop={true}
            centeredSlides={true}

          >
            <SwiperSlide className="f">
              <div class="flex flex-col gap-[10px] text-[20px] ">
                <img
                  src="./public/image/canada-choice-1.png"
                  class="w-[100px]"
                  alt=""
                />
                نیروی کیفی
              </div>
            </SwiperSlide>
            <SwiperSlide className="f">
              <div class="flex flex-col gap-[10px] text-[20px] ">
                <img
                  src="./public/image/canada-choice-2.png"
                  class="w-[100px]"
                  alt=""
                />
                نیروی کیفی
              </div>
            </SwiperSlide>
            <SwiperSlide className="f">
              <div class="flex flex-col gap-[10px] text-[20px] ">
                <img
                  src="./public/image/canada-choice-3.png"
                  class="w-[100px]"
                  alt=""
                />
                نیروی کیفی
              </div>
            </SwiperSlide>
            <SwiperSlide className="f">
              <div class="flex flex-col gap-[10px] text-[20px] ">
                <img
                  src="./public/image/canada-choice-4.png"
                  class="w-[100px]"
                  alt=""
                />
                نیروی کیفی
              </div>
            </SwiperSlide>
            <SwiperSlide className="f">
              <div class="flex flex-col gap-[10px] text-[20px] ">
                <img
                  src="./public/image/canada-choice-5.png"
                  class="w-[100px]"
                  alt=""
                />
                نیروی کیفی
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div class="w h-[500px]  max-[800px]:h-[400px] f  flex-col gap-[30px] py-[20px]">
          <div class="w  max-[2000px]:text-[44px] max-[1000px]:text-[30px] font-bold  max-[600px]:text-[25px] max-[500px]:text-[19px] min-[800px]:pr-[80px] max-[800px]:pr-[30px]">
            نیاز به مشاوره دارید؟!
          </div>
          <div class="w-[90%] max-[2000px]:h-[85%]   max-[1300px]:h-[90%]  max-[1000px]:h-[70%] max-[800px]:h-[50%] max-[600px]:h-[80%] flex-wrap border-[1px] max-[1350px]:hidden flex flex-row justify-evenly  items-center overflow-hidden border-black rounded-t-[70px]">
            <div class="flex mx-[10px] w-[400px] justify-between items-center  h flex-col p-[15px]">
              <div class="w flex justify-start items-center gap-[35px] pr-[10px] ">
                <img
                  src="./public/image/headphone.png"
                  class="w-[100px] h-[100px] "
                  alt=""
                />
                <h1 class="text-[30px] font-bold text-black">
                  مشاوره آنلاین ویزا
                </h1>
              </div>
              <div class="w-[400px] text-right text-wrap">
                کاهش حجم مراجعات حضوری و تماس‌های صورت گرفته با کارشناسان
                ویزالند، به منظور ارائه مشاوره دقیق‌تر به مشتریانی که قصد
                جدی‌تری برای اخذ ویزای کانادا داشته باشند.کاهش حجم مراجعات حضوری
                و تماس‌های صورت گرفته با کارشناسان ویزالند، به منظور ارائه
                مشاوره دقیق‌تر به مشتریانی که قصد جدی‌تری برای اخذ ویزای کانادا
                داشته باشند.
              </div>
              <div class=" cursor-pointer flex w justify-end items-center">
                <span class="text-[20px] font-medium">
                  مشاهده تمامی ویزا ها
                </span>
                <img
                  src="./public/image/arrow-tour.png"
                  class="w-[25px]"
                  alt=""
                />
              </div>
            </div>
            <img src="./public/image/backup.jpg" class="h-full" alt="" />
            <div class="flex mx-[10px] w-[400px] justify-between items-center  h flex-col p-[15px]">
              <div class="w flex justify-start items-center gap-[35px] pr-[10px] ">
                <img
                  src="./public/image/headphone-2.png"
                  class="w-[80px] h-[80px] "
                  alt=""
                />
                <h1 class="text-[30px] font-bold text-black">
                  تماس تلفنی با ما
                </h1>
              </div>
              <div class="w-[400px] text-right text-wrap">
                کاهش حجم مراجعات حضوری و تماس‌های صورت گرفته با کارشناسان
                ویزالند، به منظور ارائه مشاوره دقیق‌تر به مشتریانی که قصد
                جدی‌تری برای اخذ ویزای کانادا داشته باشند.کاهش حجم مراجعات حضوری
                و تماس‌های صورت گرفته با کارشناسان ویزالند، به منظور ارائه
                مشاوره دقیق‌تر به مشتریانی که قصد جدی‌تری برای اخذ ویزای کانادا
                داشته باشند.
              </div>
              <div class=" cursor-pointer flex w justify-end items-center">
                <span class="text-[20px] font-medium">تماس بگیرید</span>
                <img
                  src="./public/image/arrow-tour.png"
                  class="w-[25px]"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="w-[90%] min-[1350px]:hidden max-[2000px]:h-[100%] max-[1300px]:h-[90%]  max-[1000px]:h-[70%] max-[800px]:h-[50%] max-[600px]:h-[50%]  border-[1px] flex flex-row justify-start  items-center overflow-hidden border-black rounded-[15px]">
            <img
              src="./public/image/tour-elima-pic.png"
              class=" h object-cover"
              alt=""
            />
            <div class="w h f ">
              <div class="bg-[#024B74]/75 w-[90%] max-[2000px]:h-[75%] max-[1000px]:h-[60%] flex justify-between items-center py-[10px] flex-col max-[2000px]:rounded-[15px] max-[1000px]:rounded-[10px] max-[2000px]:px-[30px] max-[1000px]:px-[20px] max-[800px]:px-[10px]">
                <div class="w flex items-center justify-normal text-white max-[2000px]:text-[40px] max-[1300px]:text-[35px] max-[1000px]:text-[30px] max-[800px]:text-[20px] max-[600px]:text-[15px] max-[400px]:text-[10px] gap-[10px] ">
                  <img
                    src="./public/image/24-hour.png"
                    class=" w-[4vw]"
                    alt=""
                  />
                  نیاز به مشاوره دارید؟
                </div>
                <div class="w text-right text-white max-[2000px]:text-[25px] max-[1300px]:text-[20px] max-[1000px]:text-[15px] max-[800px]:text-[10px] max-[600px]:text-[10px] max-[400px]:text-[6px] ">
                  7 روز هفته 24 ساعت
                </div>
                <div class="w text-right text-white text-wrap max-[2000px]:text-[20px] max-[1300px]:text-[15px] max-[1000px]:text-[10px] max-[800px]:text-[5px] max-[600px]:text-[5px] max-[400px]:text-[5px]">
                  تیم پشتیبانی مجرب الیماگشت همواره و در تمامی مراحل سفر برای
                  آسودگی خاطر و ارایه خدمات، همراه و یاور شماست.
                </div>
                <div class="w flex justify-end items-center ">
                  <a
                    href=""
                    class=" max-[2000px]:w-[125px] max-[1200px]:w-[100px]  max-[2000px]:h-[35px] max-[1000px]:w-[80px] max-[600px]:h-[17px] max-[600px]:text-[8px] max-[500px]:text-[5px] max-[500px]:w-[50px] max-[500px]:h-[15px] max-[600px]:w-[60px] max-[1000px]:h-[25px]  max-[1200px]:h-[30px] rounded-[25px] f  text-center border-[1px] bg-[#F64218] border-white font-light max-[2000px]:text-[15px] max-[1000px]:text-[10px]  max-[1200px]:text-[12px] text-white"
                  >
                    تماس بگیرید{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Question backgroundImage="/public/image/visa-back-canada.png" />
      <Footer />
    </>
  );
};

export default VisaCanada;
