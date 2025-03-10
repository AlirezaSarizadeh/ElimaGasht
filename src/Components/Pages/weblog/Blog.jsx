import { Link } from "react-router-dom";
import MenuDesk from "../Header/MenuDesk";
import TopLogo from "../Header/TopLogo";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import * as React from "react";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180 text-orange-500" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  const sections = [
    { id: "intro", title: "مقدمه" },
    { id: "chapter1", title: "سفر به پاریس" },
    { id: "chapter2", title: "فصل دوم" },
    { id: "conclusion", title: "نتیجه‌گیری" },
  ];
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w h pb-[100px] flex justify-start items-center flex-col bg-zinc-300">
        <TopLogo />
        <MenuDesk />
        <div
          className="w-[85%] flex h-[1000px]  justify-center rounded-b-2xl   bg-[url('/public/image/blog-poster.jpg')] bg-cover bg-top bg-no-repeat  bg-zinc-100 shadow-2xl p-[30px] shadow-black/40 items-end"
          id="intro"
        >
          <div className="w h-[30%] backdrop-blur-xl backdrop-brightness-125 px-[40px] border flex flex-col justify-center items-start border-white rounded-2xl">
            <div className="  h flex flex-col  justify-center items-start">
              <div className=" w h-[40%] f">
                <div className="w-[25%]  h text-white border-b border-orange-500 flex text-[50px] justify-start items-center">
                  سفر به پاریس
                </div>
                <div className="w-[75%] h flex text-white gap-[20px] justify-start text-[13px] items-center ">
                  31 خرداد 1403
                  <div className=" text-[13px] text-white gap-[5px] items-center flex">
                    <img
                      src="/public/image/time-2.png"
                      className="mb-[5px] w-[15px] invert"
                      alt=""
                    />
                    30 دقیقه
                  </div>
                  <div className=" text-[13px] text-white gap-[5px] items-center flex">
                    <img
                      src="/public/image/eye.png"
                      className="mb-[5px] w-[15px] "
                      alt=""
                    />
                    200 بازدید
                  </div>
                  <div className=" text-[13px] text-white gap-[5px] items-center flex">
                    <img
                      src="/public/image/chat.png"
                      className="mb-[5px] w-[15px] "
                      alt=""
                    />
                    2 عدد
                  </div>
                </div>
              </div>
              <div className="h-[60%] w text-white flex items-center font-light justify-center text-wrap text-[15px]">
                برج جذاب ترکیه یکی از بزرگترین و زیباترین برج های ترکیه واقع در
                استانبول می باشد که شما می توانید با خرید یک بلیط چارتری مشاهده
                نمایید برج جذاب ترکیه یکی از بزرگترین و زیباترین برج های ترکیه
                واقع در استانبول می باشد که شما می توانید با خرید یک بلیط چارتری
                مشاهده نمایید برج جذاب ترکیه یکی از بزرگترین و زیباترین برج های
                ترکیه واقع در استانبول می باشد که شما می توانید با خرید یک بلیط
                چارتری مشاهده نمایید برج جذاب ترکیه یکی از بزرگترین و زیباترین
                برج های ترکیه واقع در استانبول می باشد که شما می توانید با خرید
                یک بلیط چارتری مشاهده نمایید برج جذاب ترکیه یکی از بزرگترین و
                زیباترین برج های ترکیه واقع در استانبول می باشد که شما می توانید
                با خرید یک بلیط چارتری مشاهده نمایید برج جذاب ترکیه یکی از
                بزرگترین و زیباترین برج های ترکیه واقع در استانبول می باشد که
                شما می توانید با خرید یک بلیط چارتری مشاهده نمایید برج جذاب
                ترکیه یکی از بزرگترین و زیباترین برج های ترکیه واقع در استانبول
                می باشد که شما می توانید با خرید یک بلیط چارتری مشاهده نمایید
                برج جذاب ترکیه یکی از بزرگترین و زیباترین برج های ترکیه واقع در
                استانبول می باشد که شما می توانید با خرید یک بلیط چارتری مشاهده
                نمایید
              </div>
            </div>
          </div>
        </div>
        <div className="w-[85%] mt-[50px] f gap-[20px]">
          <button
            className="f w-[30%] relative bg-zinc-100 border border-orange-500 rounded-xl h-[60px]"
            onClick={() => setIsOpen(!isOpen)}
            ref={dropdownRef}
          >
            فهرست مطالب
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 absolute left-5"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </motion.svg>
            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }} // انیمیشن بسته شدن
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute   w top-[60px] bg-zinc-100 border border-gray-200 rounded-xl shadow-lg z-10"
                >
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                        onClick={() => setIsOpen(false)} // بستن منو بعد از کلیک
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </button>

          <div className="f w-[40%] ">
            <div className="w-[90%] h-[60px]  hover:w-full  border f border-zinc-400 hover:shadow-lg transition-all duration-300   rounded-xl relative">
              <input
                type="search"
                placeholder="موضوع وبلاگ راجستجو کنید..."
                className="w h rounded-xl focus:outline-none  text-zinc-500 text-center"
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
          <div className="flex justify-between items-center w-[30%] pr-[50px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[50px] fill-orange-500"
            >
              <path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
            </svg>
            <svg
              className="w-[50px] fill-orange-500"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              />
              <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
              />
            </svg>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 308 308"
              xml:space="preserve"
              className="w-[50px] fill-orange-500"
            >
              <g id="XMLID_468_">
                <path
                  id="XMLID_469_"
                  d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z"
                />
                <path
                  id="XMLID_470_"
                  d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z"
                />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              mirror-in-rtl="true"
              className="w-[50px] fill-orange-500"
            >
              <path d="M18 15a3 3 0 0 1-6 0 2.308 2.308 0 0 1 .03-.37l-6.95-3.47a3 3 0 1 1 0-4.32l6.95-3.47A2.308 2.308 0 0 1 12 3a3 3 0 1 1 .92 2.16L5.97 8.63a2.3 2.3 0 0 1 0 .74l6.95 3.47A3 3 0 0 1 18 15z" />
            </svg>
          </div>
        </div>

        <div className="w-[85%] flex  mt-[300px] flex-col justify-start  rounded-b-2xl  relative rounded-2xl bg-cover bg-top bg-no-repeat  bg-zinc-100 shadow-2xl p-[50px] shadow-black/40 items-center">
          <div className="text-wrap text-justify leading-9">
            متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
            می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد.
          </div>
          <div className="text-wrap text-justify leading-9">
            متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
            می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد.
          </div>
          <div className="text-wrap text-justify leading-9">
            متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
            می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد.
          </div>
          <div className="text-wrap text-justify leading-9">
            متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
            می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد.
          </div>
          <div className="text-wrap text-justify leading-9">
            متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
            می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد.
          </div>
          <div className="w-[20px] h-[20px]  absolute top-[-20px] right-[300px] z-[99999]  bg-zinc-100">
            <div className="w h rounded-es-full bg-zinc-300"></div>
          </div>
          <div
            className="w-[300px] h-[110px] text-[35px] font-semibold flex justify-center items-start  pt-[20px] bg-inherit absolute rounded-t-xl right-0 top-[-90px]"
            id="chapter1"
          >
            سفر به پاریس
          </div>
        </div>
        <div className="w-[85%] gap-[20px] bg-orange-50 h-[250px] flex  mt-[100px]  justify-center  rounded-b-2xl  relative rounded-2xl bg-cover bg-top bg-no-repeat  border border-orange-500   shadow-2xl  shadow-black/40 items-center">
          <div className="w-[25%] h f p-[20px]">
            <img
              src="/public/image/blog-dubaii.jpg"
              alt=""
              className="h w rounded-xl"
            />
          </div>
          <div className="w-[60%]  h flex flex-col  justify-center items-start">
            <div className=" w h-[40%] f">
              <div className="w-[40%]  h font-semibold border-b border-orange-500 flex text-[50px] justify-start items-center">
                پیشنهاد ویژه
              </div>
              <div className="w-[60%] h flex gap-[20px] justify-start text-[13px] items-center ">
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
            <div className="h-[60%] w-[80%] flex items-center justify-start text-wrap text-[17px]">
              علی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
              کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
              شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
              بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی،
            </div>
          </div>
          <div className="w-[15%] h flex justify-end items-end px-[50px] p-[20px]">
            مطالعه بیشتر
            <img
              src="/public/image/arrow-tour.png"
              className="w-[25px] "
              alt=""
            />
          </div>
        </div>
        <div
          className="w-[85%] flex  mt-[100px] flex-col justify-start  rounded-b-2xl  relative rounded-2xl bg-cover bg-top bg-no-repeat  bg-zinc-100 shadow-2xl p-[50px] shadow-black/40 items-center"
          id="chapter2"
        >
          <div className="text-wrap text-justify leading-9">
            متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
            می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد.
          </div>
          <div className="text-wrap text-justify leading-9">
            متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
            می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد.
          </div>
        </div>
        <div className="w-[85%] flex justify-between gap-[40px] items-center mt-[80px] ">
          <div className="w h-[450px] rounded-xl flex  flex-col justify-start items-start shadow-2xl p-[20px]  shadow-black/40 bg-[#bcd6e3] ">
            <div className=" flex justify-start items-center w">
              <div className="text-[35px] z-10 p-[10px] font-semibold border-b border-orange-500 ">
                سفر به پاریس
              </div>
              <div className="flex gap-[20px] items-center justify-center  mr-[10px] z-10">
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
            </div>

            <div className="text-wrap text-[14px]  z-10  px-[10px] overflow-auto mt-[20px]">
              برج جذاب ترکیه یکی از بزرگترین و زیباترین برج های ترکیه واقع در
              استانبول می باشد که شما می توانید با خرید یک بلیط چارتری مشاهده
              نمایید
            </div>
          </div>
          <div className="w h-[450px] rounded-xl flex  flex-col justify-start items-center shadow-2xl p-[20px]  shadow-black/40 bg-[#dbf1ac] ">
            <div className=" flex justify-start items-center w">
              <div className="text-[35px] z-10 p-[10px] font-semibold border-b border-orange-500 ">
                با الیما آشنا شو
              </div>
              <div className="flex gap-[20px] items-center justify-center  mr-[10px] z-10">
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
            </div>

            <div className="text-wrap text-[14px]  z-10  px-[10px] overflow-auto mt-[20px]">
              برج جذاب ترکیه یکی از بزرگترین و زیباترین برج های ترکیه واقع در
              استانبول می باشد که شما می توانید با خرید یک بلیط چارتری مشاهده
              نمایید برج جذاب ترکیه یکی از بزرگترین و زیباترین برج های ترکیه
              واقع در استانبول می باشد که شما می توانید با خرید یک بلیط چارتری
              مشاهده نمایید برج جذاب ترکیه یکی از بزرگترین و زیباترین برج های
              ترکیه واقع در استانبول می باشد که شما می توانید با خرید یک بلیط
              چارتری مشاهده نمایید برج جذاب ترکیه یکی از بزرگترین و زیباترین برج
              های ترکیه واقع در استانبول می باشد که شما می توانید با خرید یک
              بلیط چارتری مشاهده نمایید
            </div>
          </div>
          <div className="w h-[450px] rounded-xl flex  flex-col justify-start items-center shadow-2xl p-[20px] shadow-black/40 bg-[#d8a7f1] ">
            <div className=" flex justify-start items-center w">
              <div className="text-[35px] z-10 p-[10px] font-semibold border-b border-orange-500 ">
                سفر به پاریس
              </div>
              <div className="flex gap-[20px] items-center justify-center  mr-[10px] z-10">
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
            </div>

            <div className="text-wrap text-[14px]  z-10  px-[10px] overflow-auto mt-[20px]">
              برج جذاب ترکیه یکی از بزرگترین و زیباترین برج های ترکیه واقع در
              استانبول می باشد که شما می توانید با خرید یک بلیط چارتری مشاهده
              نمایید
            </div>
          </div>
        </div>
        <div className=" w-[85%] bg-zinc-100 justify-self-center rounded-2xl px-[20px] mt-[80px] border-[1px] border-white ">
          <Accordion
            open={open === 1}
            animate={CUSTOM_ANIMATION}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(1)}>
              <div
                className={`group relative gap-[20px] flex w-full items-center rounded-t-lg p-2 text-left text-base transition ${
                  open === 1 ? "text-[#F64218] " : "text-neutral-800"
                }`}
              >
                <div className="w-[30px] h-[30px] bg-[#F64218]/20 brightness-110 rounded-[100px] text-[#F64218] text-[20px] f pt-[2px]">
                  ?
                </div>
                چند روز قبل پرواز ، بلیط هواپیما را بخریم؟
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="  p-2   text-wrap backdrop-blur-2xl">
                با الیماگشت، سفری به دنیایی از تجربه و هیجان خواهید داشت.از
                تورهای داخلی گرفته تا سفرهای خارجی، همراهی صفر تا صد اخذ ویزا تا
                بیمه مسافرتی با الیماگشت برای شما یک تجربه آسان و بی‌نظیر رقم می
                خورد
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            animate={CUSTOM_ANIMATION}
            icon={<Icon id={4} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(4)}>
              <div
                className={`group relative gap-[20px] flex w-full items-center rounded-t-lg p-2 text-left text-base transition ${
                  open === 4 ? "text-[#F64218] " : "text-neutral-800"
                }`}
              >
                <div className="w-[30px] h-[30px] bg-[#F64218]/20 brightness-110 rounded-[100px] text-[#F64218] text-[20px] f pt-[2px]">
                  ?
                </div>
                چند روز قبل پرواز ، بلیط هواپیما را بخریم؟
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="  p-2   text-wrap backdrop-blur-2xl">
                با الیماگشت، سفری به دنیایی از تجربه و هیجان خواهید داشت.از
                تورهای داخلی گرفته تا سفرهای خارجی، همراهی صفر تا صد اخذ ویزا تا
                بیمه مسافرتی با الیماگشت برای شما یک تجربه آسان و بی‌نظیر رقم می
                خورد
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 5}
            animate={CUSTOM_ANIMATION}
            icon={<Icon id={5} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(5)}>
              <div
                className={`group relative gap-[20px] flex w-full items-center rounded-t-lg p-2 text-left text-base transition ${
                  open === 5 ? "text-[#F64218] " : "text-neutral-800"
                }`}
              >
                <div className="w-[30px] h-[30px] bg-[#F64218]/20 brightness-110 rounded-[100px] text-[#F64218] text-[20px] f pt-[2px]">
                  ?
                </div>
                چند روز قبل پرواز ، بلیط هواپیما را بخریم؟
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="  p-2   text-wrap backdrop-blur-2xl">
                با الیماگشت، سفری به دنیایی از تجربه و هیجان خواهید داشت.از
                تورهای داخلی گرفته تا سفرهای خارجی، همراهی صفر تا صد اخذ ویزا تا
                بیمه مسافرتی با الیماگشت برای شما یک تجربه آسان و بی‌نظیر رقم می
                خورد
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 6}
            animate={CUSTOM_ANIMATION}
            icon={<Icon id={6} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(6)}>
              <div
                className={`group relative gap-[20px] flex w-full items-center rounded-t-lg p-2 text-left text-base transition ${
                  open === 6 ? "text-[#F64218] " : "text-neutral-800"
                }`}
              >
                <div className="w-[30px] h-[30px] bg-[#F64218]/20 brightness-110 rounded-[100px] text-[#F64218] text-[20px] f pt-[2px]">
                  ?
                </div>
                چند روز قبل پرواز ، بلیط هواپیما را بخریم؟
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="  p-2   text-wrap backdrop-blur-2xl">
                با الیماگشت، سفری به دنیایی از تجربه و هیجان خواهید داشت.از
                تورهای داخلی گرفته تا سفرهای خارجی، همراهی صفر تا صد اخذ ویزا تا
                بیمه مسافرتی با الیماگشت برای شما یک تجربه آسان و بی‌نظیر رقم می
                خورد
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            animate={CUSTOM_ANIMATION}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(2)}>
              <div
                className={`group relative gap-[20px] flex w-full items-center rounded-t-lg p-2 text-left text-base transition ${
                  open === 2 ? "text-[#F64218] " : "text-neutral-800"
                }`}
              >
                <div className="w-[30px] h-[30px] bg-[#F64218]/20 brightness-110 rounded-[100px] text-[#F64218] text-[20px] f pt-[2px]">
                  ?
                </div>
                چند روز قبل پرواز ، بلیط هواپیما را بخریم؟
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="  p-2   text-wrap backdrop-blur-2xl">
                با الیماگشت، سفری به دنیایی از تجربه و هیجان خواهید داشت.از
                تورهای داخلی گرفته تا سفرهای خارجی، همراهی صفر تا صد اخذ ویزا تا
                بیمه مسافرتی با الیماگشت برای شما یک تجربه آسان و بی‌نظیر رقم می
                خورد
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            animate={CUSTOM_ANIMATION}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(3)}>
              <div
                className={`group relative gap-[20px] flex w-full items-center rounded-t-lg p-2 text-left text-base transition ${
                  open === 3 ? "text-[#F64218] " : "text-neutral-800"
                }`}
              >
                <div className="w-[30px] h-[30px] bg-[#F64218]/20 brightness-110 rounded-[100px] text-[#F64218] text-[20px] f pt-[2px]">
                  ?
                </div>
                چند روز قبل پرواز ، بلیط هواپیما را بخریم؟
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="  p-2   text-wrap backdrop-blur-2xl">
                با الیماگشت، سفری به دنیایی از تجربه و هیجان خواهید داشت.از
                تورهای داخلی گرفته تا سفرهای خارجی، همراهی صفر تا صد اخذ ویزا تا
                بیمه مسافرتی با الیماگشت برای شما یک تجربه آسان و بی‌نظیر رقم می
                خورد
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
