import { useState, useEffect, useRef } from "react";
import Footer from "../footer/Footer";
import MenuDesk from "../Header/MenuDesk";
import TopLogo from "../Header/TopLogo";
import Question from "../question/question";
import { motion } from "framer-motion";
import SelectWithOptions from "../flight/SelectWithOptions";
import { Drawer } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const Insurance = () => {
  const steps = [
    { id: 1, title: "۱. ثبت اطلاعات سفر", desc: "اول اطلاعات سفرت مثل کشور مقصد، مدت زمان سفر و تعداد مسافرها و سنشون رو توی چند مرحله و گام‌به‌گام وارد کن." },
    { id: 2, title: "۲. مقایسه و سفارش", desc: "اول اطلاعات سفرت مثل کشور مقصد، مدت زمان سفر و تعداد مسافرها و سنشون رو توی چند مرحله و گام‌به‌گام وارد کن." },
    { id: 3, title: "۳. تکمیل اطلاعات", desc: "اول اطلاعات سفرت مثل کشور مقصد، مدت زمان سفر و تعداد مسافرها و سنشون رو توی چند مرحله و گام‌به‌گام وارد کن." },
    { id: 4, title: "۴. انتخاب روش ارسال", desc: "اول اطلاعات سفرت مثل کشور مقصد، مدت زمان سفر و تعداد مسافرها و سنشون رو توی چند مرحله و گام‌به‌گام وارد کن."  },
    { id: 5, title: "۵. پرداخت و خرید", desc: "اول اطلاعات سفرت مثل کشور مقصد، مدت زمان سفر و تعداد مسافرها و سنشون رو توی چند مرحله و گام‌به‌گام وارد کن."  }
  ];
  const navigate = useNavigate();

  const handleSubmit = (selectedOption) => {
    if ( selectedWay1 && selectedWay3 && inputValue) {
      navigate(
        `/insurance-list?&way1=${selectedWay1}&way2=${selectedWay3}&passenger=${inputValue}&time=${selectedWay2}`
      );
    }
  };
  const [activeInput, setActiveInput] = useState(null); // Track which input was clicked
  const [openTop, setOpenTop] = useState(false);
  const openDrawerTop = (inputType) => {
    setActiveInput(inputType); // Set which input was clicked
    document.body.style.overflow = "hidden";
    setOpenTop(true);
  };

  const closeDrawerTop = () => {
    setOpenTop(false);
    setActiveInput(null); // Reset active input when closing
  };
  const [selectedWay1, setSelectedWay1] = useState(""); // State for selected value
  const [selectedWay2, setSelectedWay2] = useState(""); // State for selected value
  const [selectedWay3, setSelectedWay3] = useState(""); // State for selected value
  const [counts, setCounts] = useState(Array(6).fill(0));

  const increment = (index) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? count + 1 : count))
    );
  };

  const decrement = (index) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) =>
        i === index ? Math.max(0, count - 1) : count
      )
    );
  };
  const totalCount = counts.reduce((acc, val) => acc + val, 0);

  // Determine input display text
  const inputValue = totalCount === 0 ? "تعداد مسافران" : `${totalCount} مسافر`;

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const confirmButtonRef = useRef(null);

  // Toggle dropdown on parent div click
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside, except for the dropdown itself unless clicking confirm button
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        (!confirmButtonRef.current ||
          !confirmButtonRef.current.contains(event.target))
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const options1 = [
    { label: "تک مقصد", value: "تک مقصد" },
    { label: "چند مقصد", value: "چند مقصد" },
  ];
  const options2 = [
    { label: "کانادا", value: "کانادا" },
    { label: "یونان", value: "یونان" },
    { label: "آلمان", value: "آلمان" },
    { label: "هلند", value: "هلند" },
    { label: "اسپانیا", value: "اسپانیا" },
    { label: "سوئد", value: "سوئد" },
  ];
  const options3 = [
    { label: "۱ تا ۴ روز", value: "۱ تا ۴ روز" },
    { label: "۵ تا ۸ روز", value: "۵ تا ۸ روز" },
    { label: "۹ تا ۱۰ روز", value: "۹ تا ۱۰ روز" },
    { label: "۱۱ تا ۱۵ روز", value: "۱۱ تا ۱۵ روز" },
    { label: "۱۶ تا ۲۱ روز", value: "۱۶ تا ۲۱ روز" },
    { label: "۲۲ تا ۲۳ روز", value: "۲۲ تا ۲۳ روز" },
    { label: "۲۴ تا ۳۱ روز", value: "۲۴ تا ۳۱ روز" },
    { label: "۳۲ تا ۴۵ روز", value: "۳۲ تا ۴۵ روز" },
    { label: "۴۶ تا ۶۲ روز", value: "۴۶ تا ۶۲ روز" },
    { label: "۳ ماه", value: "۳ ماه" },
    { label: "۶ ماه", value: "۶ ماه" },
    { label: "۱ سال", value: "۱ سال" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="  wraper flex  justify-start items-center flex-col  w h m-[0] p-[0]">
        <div className="w h-[1069px]  top-0 bg-cover bg-[url('/public/image/insurance-elima-back.jpg')]    bg-no-repeat bg-center ">
          <TopLogo />
          <MenuDesk />
          <div className="header flex flex-col justify-start items-center   top-[0px] w h cancel ">
            <div
              className="w de:h-[625px] mo:h-[85%] flex mo:justify-center
        items-center de:justify-start flex-col  "
            >
              <div
                className="w-[85%] mo:h-[100%] de:h-[200px] de:flex de:gap-[20px] mo:hidden  de:flex-col de:justify-center  
              de:border-[1px]  de:border-solid de:rounded-b-[15px] de:border-t-0 mo:border-none    "
              >
                <div className="w-full h-full flex justify-center gap-[70px] items-end">
                  <div className="w-[20%] h-[40px] gap-[20px] flex justify-center items-center ">
                    <SelectWithOptions
                      label="تعداد مقصد"
                      name="way1"
                      options={options1}
                      selectedValue={selectedWay1} // Bind state
                      onSelect={setSelectedWay1} // Handle selection
                    />

                    <SelectWithOptions
                      label="کشور مقصد"
                      name="way2"
                      options={options2}
                      selectedValue={selectedWay3} // Bind state
                      onSelect={setSelectedWay3} // Handle selection
                    />
                  </div>
                  <div className="w-[20%] h-[40px] text-white rounded-xl backdrop-blur-3xl   backdrop-brightness-200 cursor-pointer ">
                    <SelectWithOptions
                      label="مدت سفر"
                      name="time"
                      options={options3}
                      selectedValue={selectedWay2} // Bind state
                      onSelect={setSelectedWay2} // Handle selection

                    />
                  </div>
                  <div
                    ref={dropdownRef}
                    onClick={handleToggle}
                    className="w-[20%] h-[40px] f text-white rounded-xl group relative  backdrop-blur-3xl border-[1px] border-solid transition-all duration-200  focus-within:border-[#F0421A]   "
                  >
                    <input
                      type="text"
                      name=""
                      autocomplete="off"
                      value={inputValue}
                      placeholder="تعداد مسافران"
                      className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="group-focus-within:fill-[#F0421A] fill-zinc-200/80 transition-all duration-200 absolute -z-10 left-2"
                    >
                      <path d="M18.5 20.25H14.5C14.09 20.25 13.75 19.91 13.75 19.5C13.75 19.09 14.09 18.75 14.5 18.75H18.5C18.91 18.75 19.25 19.09 19.25 19.5C19.25 19.91 18.91 20.25 18.5 20.25Z" />
                      <path d="M16.5 22.25C16.09 22.25 15.75 21.91 15.75 21.5V17.5C15.75 17.09 16.09 16.75 16.5 16.75C16.91 16.75 17.25 17.09 17.25 17.5V21.5C17.25 21.91 16.91 22.25 16.5 22.25Z" />
                      <path d="M12.16 11.62C12.13 11.62 12.11 11.62 12.08 11.62C12.03 11.61 11.96 11.61 11.9 11.62C8.99995 11.53 6.80995 9.25 6.80995 6.44C6.79995 5.06 7.33995 3.76 8.31995 2.78C9.29995 1.8 10.6 1.25 11.99 1.25C14.85 1.25 17.18 3.58 17.18 6.44C17.18 9.25 14.99 11.52 12.19 11.62C12.18 11.62 12.17 11.62 12.16 11.62ZM11.99 2.75C11 2.75 10.08 3.14 9.37995 3.83C8.68995 4.53 8.30995 5.45 8.30995 6.43C8.30995 8.43 9.86995 10.05 11.86 10.11C11.92 10.1 12.05 10.1 12.18 10.11C14.15 10.02 15.68 8.41 15.68 6.43C15.68 4.41 14.02 2.75 11.99 2.75Z" />
                      <path d="M11.9899 22.56C9.94991 22.56 8.01991 22.03 6.55991 21.05C5.16991 20.12 4.40991 18.85 4.40991 17.48C4.40991 16.11 5.17991 14.85 6.55991 13.93C9.54991 11.93 14.4099 11.93 17.3999 13.93C17.7399 14.16 17.8399 14.63 17.6099 14.97C17.3799 15.32 16.9099 15.41 16.5699 15.18C14.0799 13.52 9.87991 13.52 7.38991 15.18C6.42991 15.82 5.90991 16.63 5.90991 17.48C5.90991 18.33 6.42991 19.16 7.38991 19.8C8.59991 20.61 10.2299 21.05 11.9799 21.05C12.3899 21.05 12.7299 21.39 12.7299 21.8C12.7299 22.21 12.3999 22.56 11.9899 22.56Z" />
                    </svg>
                    {isOpen && (
                      <div className="w h-[200px] border border-white bg-black/40 rounded-md flex-col backdrop-blur-3xl absolute top-[50px]">
                        <div
                          onClick={() => setIsOpen(false)}
                          className="w h-[75%] flex justify-center items-start py-4 overflow-scroll scrollbar-hide"
                        >
                          <div className="flex justify-center gap-3   items-start pr-7 w flex-col ">
                            <span className="text-[12px] font-thin">
                              بازه سنی
                            </span>
                            <span>تا ۱۲ سال</span>
                            <span>۱۳ تا ۶۵ سال</span>
                            <span>۶۶ تا ۷۰ سال</span>
                            <span>۷۱ تا ۷۵ سال</span>
                            <span>۷۶ تا ۸۰ سال</span>
                            <span>۸۱ سال به بالا</span>
                          </div>
                          <div className="w f gap-3 flex-col">
                            <span className="text-[12px] font-thin">
                              تعداد نفرات
                            </span>
                            {counts.map((count, index) => (
                              <div key={index} className="f flex-row-reverse">
                                <button
                                  onClick={() => decrement(index)}
                                  className="border border-[#F0421A] rounded-full f w-[20px] h-[20px] text-[#F0421A] disabled:opacity-50"
                                  disabled={count === 0}
                                >
                                  -
                                </button>
                                <motion.div
                                  key={count}
                                  initial={{ y: 10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  exit={{ y: -20, opacity: 0 }}
                                  transition={{
                                    duration: 0.01,
                                    type: "spring",
                                    stiffness: 200,
                                  }}
                                  className="w-[50px] f"
                                >
                                  {count}
                                </motion.div>
                                <button
                                  onClick={() => increment(index)}
                                  className="border border-[#F0421A] rounded-full f w-[20px] h-[20px] text-[#F0421A]"
                                >
                                  +
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                        <button
                          ref={confirmButtonRef}
                          className="w h-[25%] hover:text-[18px] border-white border-t transition-all duration-100"
                        >
                          تایید
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full h-full px-[50px] flex justify-end items-center ">
                <button
                    onClick={handleSubmit}
                    disabled={
                      !selectedWay1 ||
                      !selectedWay3 ||
                      !inputValue
                    }
                    className="border-[1px] border-white text-[#414A53] text-[13px] flex  px-[7px] justify-between items-center hover:border-orange-500 transition-all duration-500  border-solid rounded-full backdrop-blur-3xl  w-[80px] cursor-pointer h-[30px] group shadow-md hover:shadow-lg shadow-black/40 hover:shadow-black/40"
                  >
                    جستجو
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      className="group-hover:fill-orange-500 fill-[#414A53]  transition-all duration-600"
                    >
                      <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" />
                      <path d="M21.9999 22.75C21.8099 22.75 21.6199 22.68 21.4699 22.53L19.4699 20.53C19.1799 20.24 19.1799 19.76 19.4699 19.47C19.7599 19.18 20.2399 19.18 20.5299 19.47L22.5299 21.47C22.8199 21.76 22.8199 22.24 22.5299 22.53C22.3799 22.68 22.1899 22.75 21.9999 22.75Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className=" justify-start items-center h-[80%]  w-[90%] gap-[30px] max-w-[70%] de:hidden mo:flex flex-col ">
                <div className="w flex justify-start items-center  ">
                  <div
                    onmousedown="return false;"
                    onselectstart="return false;"
                    className="w-[40%] cursor-default flex justify-center items-center text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-100  "
                  >
                    بیمه
                  </div>
                </div>

                <div className="w gap-[20px] flex justify-between items-center  ">
                  <div className="w flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  cursor-pointer">
                    <input
                      type="text"
                      name=""
                      autocomplete="off"
                      value={selectedWay1} // Bind to same state
                      onClick={() => openDrawerTop("way1")} // Pass identifier
                      readOnly
                      placeholder="تعداد مقصد"
                      className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                    />
                  </div>
                  <div className="w-full flex justify-center gap-[20px] items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl  backdrop-brightness-90 backdrop-blur-3xl  cursor-pointer">
                    <input
                      type="text"
                      name=""
                      autocomplete="off"
                      value={selectedWay3} // Bind to same state
                      onClick={() => openDrawerTop("way2")} // Pass identifier
                      readOnly
                      placeholder="کشور مقصد"
                      className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                    />
                  </div>
                </div>
                <div className="w gap-[20px] flex justify-between items-center  ">
                  <div className="w flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-150 cursor-pointer">
                    <input
                      type="text"
                      name=""
                      autocomplete="off"
                      value={selectedWay3} // Bind to same state
                      onClick={() => openDrawerTop("way3")} // Pass identifier
                      readOnly
                      placeholder="مدت سفر"
                      className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                    />
                  </div>
                  <div className="w-full flex justify-center gap-[20px] items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-150 cursor-pointer">
                    <input
                      type="text"
                      name=""
                      autocomplete="off"
                      onClick={() => openDrawerTop("way4")} // Pass identifier
                      readOnly
                      value={inputValue}
                      placeholder="تعداد مسافران"
                      className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                    />
                  </div>
                </div>
                <div className="w flex justify-end items-center">
                  <div className="border-[1px] border-white text-zinc-200 text-[13px] flex  px-[7px] justify-between items-center  transition-all duration-500  border-solid rounded-full backdrop-blur-3xl  w-[80px] cursor-pointer h-[30px]  shadow-md hover:shadow-lg ">
                    جستجو
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      className=" fill-zinc-200  transition-all duration-600"
                    >
                      <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" />
                      <path d="M21.9999 22.75C21.8099 22.75 21.6199 22.68 21.4699 22.53L19.4699 20.53C19.1799 20.24 19.1799 19.76 19.4699 19.47C19.7599 19.18 20.2399 19.18 20.5299 19.47L22.5299 21.47C22.8199 21.76 22.8199 22.24 22.5299 22.53C22.3799 22.68 22.1899 22.75 21.9999 22.75Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <Drawer
                className="px-[90px] py-[40px] z-[100000000000]  bg-black/40   mo:flex justify-center  de:hidden "
                placement="top"
                open={openTop}
                onClose={closeDrawerTop}
              >
                <button
                  type="button"
                  onClick={closeDrawerTop}
                  className="text-gray-400 border-white border rounded-xl h-[40px] px-5 hover:text-gray-100 transition-all duration-200 bg-transparent text-sm  absolute top-10 right-4 inline-flex items-center justify-center "
                >
                  تایید
                </button>
                {activeInput === "way1" && (
                  <SelectWithOptions
                    label="تعداد مقصد"
                    name="way1"
                    options={options1}
                    selectedValue={selectedWay1}
                    onSelect={setSelectedWay1}
                  />
                )}

                {activeInput === "way2" && (
                  <SelectWithOptions
                    label="کشور مقصد"
                    name="way2"
                    options={options2}
                    selectedValue={selectedWay2}
                    onSelect={setSelectedWay2}
                  />
                )}
                {activeInput === "way3" && (
                  <SelectWithOptions
                    label="مدت سفر"
                    name="way3"
                    options={options3}
                    selectedValue={selectedWay3}
                    onSelect={setSelectedWay3}
                  />
                )}
                {activeInput === "way4" && (
                  <div
                    ref={dropdownRef}
                    onClick={handleToggle}
                    className="w h-[40px] f text-white rounded-xl group relative  backdrop-blur-3xl border-[1px] border-solid transition-all duration-200  focus-within:border-[#F0421A]   "
                  >
                    <input
                      type="text"
                      name=""
                      autocomplete="off"
                      value={inputValue}
                      placeholder="تعداد مسافران"
                      className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="group-focus-within:fill-[#F0421A] fill-zinc-200/80 transition-all duration-200 absolute -z-10 left-2"
                    >
                      <path d="M18.5 20.25H14.5C14.09 20.25 13.75 19.91 13.75 19.5C13.75 19.09 14.09 18.75 14.5 18.75H18.5C18.91 18.75 19.25 19.09 19.25 19.5C19.25 19.91 18.91 20.25 18.5 20.25Z" />
                      <path d="M16.5 22.25C16.09 22.25 15.75 21.91 15.75 21.5V17.5C15.75 17.09 16.09 16.75 16.5 16.75C16.91 16.75 17.25 17.09 17.25 17.5V21.5C17.25 21.91 16.91 22.25 16.5 22.25Z" />
                      <path d="M12.16 11.62C12.13 11.62 12.11 11.62 12.08 11.62C12.03 11.61 11.96 11.61 11.9 11.62C8.99995 11.53 6.80995 9.25 6.80995 6.44C6.79995 5.06 7.33995 3.76 8.31995 2.78C9.29995 1.8 10.6 1.25 11.99 1.25C14.85 1.25 17.18 3.58 17.18 6.44C17.18 9.25 14.99 11.52 12.19 11.62C12.18 11.62 12.17 11.62 12.16 11.62ZM11.99 2.75C11 2.75 10.08 3.14 9.37995 3.83C8.68995 4.53 8.30995 5.45 8.30995 6.43C8.30995 8.43 9.86995 10.05 11.86 10.11C11.92 10.1 12.05 10.1 12.18 10.11C14.15 10.02 15.68 8.41 15.68 6.43C15.68 4.41 14.02 2.75 11.99 2.75Z" />
                      <path d="M11.9899 22.56C9.94991 22.56 8.01991 22.03 6.55991 21.05C5.16991 20.12 4.40991 18.85 4.40991 17.48C4.40991 16.11 5.17991 14.85 6.55991 13.93C9.54991 11.93 14.4099 11.93 17.3999 13.93C17.7399 14.16 17.8399 14.63 17.6099 14.97C17.3799 15.32 16.9099 15.41 16.5699 15.18C14.0799 13.52 9.87991 13.52 7.38991 15.18C6.42991 15.82 5.90991 16.63 5.90991 17.48C5.90991 18.33 6.42991 19.16 7.38991 19.8C8.59991 20.61 10.2299 21.05 11.9799 21.05C12.3899 21.05 12.7299 21.39 12.7299 21.8C12.7299 22.21 12.3999 22.56 11.9899 22.56Z" />
                    </svg>
                    {isOpen && (
                      <div className="w h-[200px] border border-white bg-black/40 rounded-md flex-col backdrop-blur-3xl absolute top-[50px]">
                        <div
                          onClick={() => setIsOpen(false)}
                          className="w h flex justify-center items-start py-4 overflow-scroll scrollbar-hide"
                        >
                          <div className="flex justify-center gap-3   items-start pr-7 w flex-col ">
                            <span className="text-[12px] font-thin">
                              بازه سنی
                            </span>
                            <span>تا ۱۲ سال</span>
                            <span>۱۳ تا ۶۵ سال</span>
                            <span>۶۶ تا ۷۰ سال</span>
                            <span>۷۱ تا ۷۵ سال</span>
                            <span>۷۶ تا ۸۰ سال</span>
                            <span>۸۱ سال به بالا</span>
                          </div>
                          <div className="w f gap-3 flex-col">
                            <span className="text-[12px] font-thin">
                              تعداد نفرات
                            </span>
                            {counts.map((count, index) => (
                              <div key={index} className="f flex-row-reverse">
                                <button
                                  onClick={() => decrement(index)}
                                  className="border border-[#F0421A] rounded-full f w-[20px] h-[20px] text-[#F0421A] disabled:opacity-50"
                                  disabled={count === 0}
                                >
                                  -
                                </button>
                                <motion.div
                                  key={count}
                                  initial={{ y: 10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  exit={{ y: -20, opacity: 0 }}
                                  transition={{
                                    duration: 0.01,
                                    type: "spring",
                                    stiffness: 200,
                                  }}
                                  className="w-[50px] f"
                                >
                                  {count}
                                </motion.div>
                                <button
                                  onClick={() => increment(index)}
                                  className="border border-[#F0421A] rounded-full f w-[20px] h-[20px] text-[#F0421A]"
                                >
                                  +
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </Drawer>
            </div>

            <div className="w  h-[20%] mo:flex justify-center   items-end de:hidden">
              <div className="w-[80%] mb-[50px] p-[15px] flex justify-around  items-center backdrop-blur-2xl  rounded-[15px] b">
                <a href="" className="text-white">
                  خانه
                </a>
                <span className="w-[1px] h-[25px] bg-[#F0421A]"></span>
                <a href="" className="text-white">
                  جستجو
                </a>
                <span className="w-[1px] h-[25px] bg-[#F0421A]"></span>
                <a href="" className="text-white">
                  سفر های من
                </a>
                <span className="w-[1px] h-[25px] bg-[#F0421A]"></span>
                <a href="" className="text-white">
                  پشتیبانی
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w min-h-[900px] h-auto overflow-hidden pt-[40px] min-[800px]:pr-[70px] relative max-[800px]:pr-[20px] min-[1000px]:gap-[75px] min-[800px]:pl-[70px] max-[800px]:pl-[20px]  flex justify-start ro flex-col items-start bg-no-repeat  bg-cover bg-[url('/public/image/visa-back-canada.png')]  ">
        <img
          src="/public/image/question-elima-pic-1.png"
          alt=""
          className="absolute left-0"
        />
        <div class=" w h-[50px]  text-black font-bold max-[2000px]:text-[44px] max-[1000px]:text-[30px] max-[600px]:text-[25px] max-[500px]:text-[19px] ">
          بیمه مسافرتی سامان، همراه همسفران علی‌بابا
        </div>
        <div className="w-[60%] text-wrap text-[30px] ">
          بیمه مسافرتی (Travel Insurance) یک نوع بیمه است که برای پوشش هزینه‌ها
          و خسارات مرتبط با سفرهای بین‌المللی یا داخلی ارائه می‌شود. این بیمه
          معمولاً توسط شرکت‌های بیمه عرضه می‌شود و شامل تعدادی پوشش است که
          می‌تواند شامل پوشش هزینه‌های پزشکی اضطراری، پوشش لغو سفر، پوشش بیمه
          مسافرتی برای خسارت اموال، مسئولیت مدنی و پوشش تأخیرات و لغو پرواز
          باشد. یکی از اصلی‌ترین پوشش‌های بیمه مسافرتی پوشش هزینه‌های پزشکی است.
          اگر در سفر به بیماری یا حادثه‌ای برخورد کنید و نیاز به درمان داشته
          باشید، بیمه مسافرتی ممکن است هزینه‌های مرتبط با ویزیت پزشک، بستری در
          بیمارستان، داروها و معالجه‌های دیگر را پوشش دهد
        </div>
        <div className="w flex flex-grow flex-col justify-center gap-[50px] text-[34px] font-bold items-start">
          خدمات بیمه سامان
          <div className="w-full flex justify-around items-center gap-[100px]">
            <div className="w-full flex justify-center gap-[20px] items-center">
              <img src="/public/image/earth-insurance.png" alt="" />
              <div className="flex flex-grow flex-col font-bold text-[32px] ">
                پوشش جهانی خدمات درمانی
                <p className="text-wrap text-[30px] font-normal">
                  قرارداد با بیش از ۵۵ هزار مرکز درمانی در سراسر دنیا
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center gap-[20px] items-center">
              <img src="/public/image/earth-insurance.png" alt="" />
              <div className="flex flex-grow flex-col font-bold text-[32px] ">
                پوشش جهانی خدمات درمانی
                <p className="text-wrap text-[30px] font-normal">
                  قرارداد با بیش از ۵۵ هزار مرکز درمانی در سراسر دنیا
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center gap-[20px] items-center">
              <img src="/public/image/earth-insurance.png" alt="" />
              <div className="flex flex-grow flex-col font-bold text-[32px] ">
                پوشش جهانی خدمات درمانی
                <p className="text-wrap text-[30px] font-normal">
                  قرارداد با بیش از ۵۵ هزار مرکز درمانی در سراسر دنیا
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w min-h-[900px] h-auto overflow-hidden pt-[40px] min-[800px]:pr-[70px] relative max-[800px]:pr-[20px] min-[1000px]:gap-[75px] min-[800px]:pl-[70px] max-[800px]:pl-[20px]  flex justify-start ro flex-col items-start bg-no-repeat  bg-cover bg-[url('/public/image/visa-back-canada-copy.png')]  ">
        <img
          src="/public/image/question-elima-pic-2.png"
          alt=""
          className="absolute left-0"
        />
        <div class=" w h-[50px]  text-black font-bold max-[2000px]:text-[44px] max-[1000px]:text-[30px] max-[600px]:text-[25px] max-[500px]:text-[19px] ">
          خرید بیمه سامان
        </div>
        <div className="w-[60%] text-wrap text-[30px] ">
          خرید بیمه مسافرتی برای بسیاری از سفرها اجباری نیست و این حق انتخاب
          برای مسافر وجود دارد که در سفرهایش بیمه بگیرد یا خیر؛ اما نکته‌ای که
          مسافران سفرهای خارجی باید در نظر داشته باشند این است که گرفتن بیمه
          مسافرتی برای بسیاری از کشورهای خارجی (گرفتن ویزا، مخصوصا شینگن) ضروری
          است که حتما باید آن بیمه را از یک شرکت معتبر بیمه مسافرتی دریافت کرده
          باشید. برای خرید بیمه مسافرتی، لازم است
        </div>
        <div className="w flex flex-grow flex-col justify-center gap-[50px] text-[34px] font-bold items-start">
          قیمت بیمه مسافرتی
          <div className="w-full flex justify-around items-center gap-[100px]">
            <div className="w-full flex justify-center gap-[20px] items-center">
              <img src="/public/image/earth-insurance.png" alt="" />
              <div className="flex flex-grow flex-col font-bold text-[32px] ">
                سن مسافر
                <p className="text-wrap text-[30px] font-normal">
                  به این معنا که هر چه مسافر سن بیشتری داشته باشد، قیمت بیمه
                  مسافرتی او بیشتر می‌شود.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center gap-[20px] items-center">
              <img src="/public/image/earth-insurance.png" alt="" />
              <div className="flex flex-grow flex-col font-bold text-[32px] ">
                مدت سفر
                <p className="text-wrap text-[30px] font-normal">
                  یعنی اگر مسافر مدت بیشتری در مقصد اقامت کند، باید هزینه بیشتری
                  پرداخت کند.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center gap-[20px] items-center">
              <img src="/public/image/earth-insurance.png" alt="" />
              <div className="flex flex-grow flex-col font-bold text-[32px] ">
                مقصد سفر
                <p className="text-wrap text-[30px] font-normal">
                  یعنی اگر مسافر مدت بیشتری در مقصد اقامت کند، باید هزینه بیشتری
                  پرداخت کند.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w min-h-[1000px] h-auto   pt-[40px] min-[800px]:pr-[70px]  max-[800px]:pr-[20px] min-[1000px]:gap-[75px] min-[800px]:pl-[70px] max-[800px]:pl-[20px]  flex justify-start ro flex-col items-center bg-no-repeat  bg-cover bg-[url('/public/image/visa-back-canada.png')]  ">

        <div class=" w h-[50px]  text-black font-bold max-[2000px]:text-[44px] max-[1000px]:text-[30px] max-[600px]:text-[25px] max-[500px]:text-[19px] ">
          مراحل خرید بیمه سفرها با الیماگشت
        </div>
        <div className="max-w-[900px] relative w-[80%] max-h-[500px] h-[60vw] mt-[100px] bg-[url('/public/image/chat-bubble-2.png')] bg-no-repeat bg-contain bg-center mo:hidden de:flex justify-center items-start t">
        <img
          src="/public/image/tour-small-elima-pic.png"
          alt=""
          className="absolute bottom-[-400px] left-[-300px] w-[1000px] mo:hidden  de:inline"
        />
        <Swiper
        dir="ltr"
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        className="w-[90%] overflow-hidden h-full "
      >
        {steps.map((step) => (
          <SwiperSlide key={step.id} className="flex justify-center  items-start">
            <div className="w-[80%] h-[70%]  flex flex-col items-center justify-between p-[50px]  bg-no-repeat bg-contain bg-center">
              <span className="text-[30px] font-bold">{step.title}</span>
              <p className="text-[25px] text-center text-wrap">{step.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
      </div>
      <div class="w max-h-[900px] h-auto p-[100px] min-[800px]:pr-[70px] relative max-[800px]:pr-[20px] min-[1000px]:gap-[75px] min-[800px]:pl-[70px] max-[800px]:pl-[20px]  flex justify-start ro flex-col items-center bg-no-repeat  bg-cover bg-[url('/public/image/visa-back-canada-copy.png')]  ">
        <div class=" w h-[50px]  text-black font-bold max-[2000px]:text-[44px] max-[1000px]:text-[30px] max-[600px]:text-[25px] max-[500px]:text-[19px] ">
          نحوه محاسبه مبلغ بیمه مسافرتی
        </div>
        <div className="w-[90%] h-[400px] de:bg-red-400/60 mo:bg-[#e8f4fa] de:p-[50px] mo:p-0  pl-0 rounded-xl f mo:flex-col de:flex-row mt-[100px]">
          <div className="w flex h border-solid border-[1px] flex-col border-sky-300 ">
            <div className="w h flex border-b bg-[#d2e9f5] border-sky-300 ">
              <div className="h w-1/3 h max-[2000px]:text-[30px] max-[1650px]:text-[20px] max-[1300px]:text-[15px] text-wrap text-center t flex justify-center border-l border-sky-300 items-center">
                عوامل موثر در تعیین قیمت
              </div>
              <div className="w-2/3 h h max-[2000px]:text-[30px] max-[1650px]:text-[20px] max-[1300px]:text-[15px] t flex justify-center  items-center">
                نحوه محاسبه در فرمول تعیین حق بیمه
              </div>
            </div>
            <div className="w h flex border-b border-sky-300 bg-[#e8f4fa]">
              <div className="w-1/3 h flex justify-center items-center  border-l border-sky-300 max-[2000px]:text-[30px] t max-[1650px]:text-[20px] max-[1300px]:text-[15px] text-wrap text-center">
                سن مسافر
              </div>
              <div className="w-2/3 h flex justify-center items-center  px-[20px]  max-[2000px]:text-[20px] t max-[1650px]:text-[15px] max-[1300px]:text-[12px] text-wrap text-center">
                تا ۱۲ سال/ ۱۳ تا ۶۵ سال/ 66 تا 70 سال/ ۷۱ تا ۷۵ سال/ ۷۶ تا ۸۰
                سال
              </div>
            </div>
            <div className="w h flex border-b border-sky-300 bg-[#e8f4fa]">
              <div className="w-1/3 h flex justify-center items-center  border-l border-sky-300 max-[2000px]:text-[30px] t max-[1650px]:text-[20px] max-[1300px]:text-[15px] text-wrap text-center">
                مقصد سفر
              </div>
              <div className="w-2/3 h flex justify-center items-center   px-[20px]  max-[2000px]:text-[20px] t max-[1650px]:text-[15px] max-[1300px]:text-[12px] text-wrap text-center">
                ۱ تا ۷ روز/ ۸ تا ۱۵ روز/ ۱۶ تا ۲۳ روز/ ۲۴ تا ۳۱ روز/ ۳۲ تا ۴۵
                روز/ ۶۳ تا ۹۲ روز/ ۶ ماهه/ ۱ ساله
              </div>
            </div>
            <div className="w h flex bg-[#e8f4fa]">
              <div className="w-1/3 h flex justify-center items-center border-l border-sky-300 max-[2000px]:text-[30px] t max-[1650px]:text-[20px] max-[1300px]:text-[15px] text-wrap text-center">
                مدت سفر
              </div>
              <div className="w-2/3 h flex justify-center items-center  px-[20px]  max-[2000px]:text-[20px] t max-[1650px]:text-[15px] max-[1300px]:text-[12px] text-wrap text-center">
                بر اساس مناطق جغرافیایی مختلف
              </div>
            </div>
          </div>
          <img
            src="/public/image/pass-plane.png"
            alt=""
            className="mo:mr-[100px] de:mr-0 mo:w-[245px]"
          />
        </div>
      </div>
      <div className="w max-[2000px]:h-[700px] max-[600px]:h-[400px]   flex justify-start flex-col items-center  relative  bg-[url('/public/image/visa-back-canada.png')]   bg-no-repeat  bg-cover bg-top ">
        <img
          src="./public/image/laptop.png"
          className="absolute max-[2000px]:w-[270px] max-[1300px]:w-[200px]    max-[1000px]:w-[170px] max-[800px]:w-[150px] max-[600px]:w-[130px] right-0 max-[2000px]:top-[160px]  max-[1300px]:top-[220px]  max-[1000px]:top-[280px] max-[800px]:top-[320px] max-[600px]:top-[140px] -z-20"
          alt=""
        />
        <img
          src="./public/image/airplane.png"
          className="absolute max-[2000px]:w-[120px] max-[800px]:w-[100px] max-[600px]:w-[50px] max-[2000px]:right-[30%] max-[1600px]:right-[25%] max-[1300px]:right-[17%] max-[1000px]:right-[10%] max-[2000px]:top-[10px] max-[800px]:top-[35px] max-[600px]:top-[20px] "
          alt=""
        />
        <img
          src="./public/image/flight.png"
          className="absolute w-[110px] max-[400px]:hidden max-[800px]:w-[90px] max-[600px]:w-[45px] max-[2000px]:right-[26%] max-[1600px]:right-[20%] max-[1300px]:right-[12%] max-[1000px]:right-[3%] top-[80px] max-[800px]:top-[100px] max-[600px]:top-[60px] "
          alt=""
        />
        <img
          src="./public/image/tour-small-elima-pic.png"
          className="absolute max-[2000px]:w-[140px] max-[600px]:w-[70px]  max-[2000px]:right-[60%] max-[1600px]:right-[65%] max-[1300px]:right-[70%] max-[1000px]:right-[75%] max-[800px]:right-[70%] max-[600px]:right-[73%] max-[2000px]:top-[10px] max-[800px]:top-[20px] "
          alt=""
        />
        <img
          src="./public/image/tour-small-elima-pic-2.png"
          className="absolute max-[400px]:hidden
         max-[2000px]:w-[160px] max-[600px]:w-[80px]  max-[2000px]:right-[66%] max-[1600px]:right-[70%] max-[1300px]:right-[75%] max-[1000px]:right-[82%] max-[800px]:right-[75%] max-[600px]:right-[82%]   max-[2000px]:top-[80px] max-[800px]:top-[100px] max-[600px]:top-[60px] "
          alt=""
        />
        <div className="w h-[15%] f ">
          <h1 className="max-[2000px]:text-[45px] max-[800px]:text-[35px] max-[600px]:text-[25px] font-bold mb-[-40px]">
            خدمات تور های ما !
          </h1>
        </div>
        <div className="w h-[30%] flex items-center flex-col justify-around ">
          <h1 className=" max-[2000px]:w-[550px] max-[800px]:w-[300px] text-wrap max-[2000px]:text-[20px] max-[800px]:text-[15px] max-[600px]:text-[10px] text-center">
            با الیماگشت، سفری به دنیایی از تجربه و هیجان خواهید داشت.از تورهای
            داخلی گرفته تا سفرهای خارجی، همراهی صفر تا صد اخذ ویزا تا بیمه
            مسافرتی با الیماگشت برای شما یک تجربه آسان و بی‌نظیر رقم می خورد
          </h1>
          <a
            href=""
            className="w-[120px] max-[600px]:w-[75px] h-[30px] max-[600px]:h-[23px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px] max-[600px]:text-[10px] hover:bg-[#024B74]/80   hover:text-white  transition-all duration-200"
          >
            بیشتر بخوانید...
          </a>
        </div>
        <div className="w h-[55%]  f  py-[20px]">
          <div className="w-[90%] max-[2000px]:h-[100%] max-[1300px]:h-[90%]  max-[1000px]:h-[70%] max-[800px]:h-[50%] max-[600px]:h-[80%]  border-[1px] flex flex-row justify-start  items-center overflow-hidden border-black rounded-[15px]">
            <img
              src="./public/image/tour-elima-pic.png"
              className=" h object-cover"
              alt=""
            />
            <div className="w h f ">
              <div className="bg-[#024B74]/75 w-[90%] max-[2000px]:h-[75%] max-[1000px]:h-[60%] flex justify-between items-center py-[10px] flex-col max-[2000px]:rounded-[15px] max-[1000px]:rounded-[10px] max-[2000px]:px-[30px] max-[1000px]:px-[20px] max-[800px]:px-[10px]">
                <div className="w flex items-center justify-normal text-white max-[2000px]:text-[40px] max-[1300px]:text-[35px] max-[1000px]:text-[30px] max-[800px]:text-[20px] max-[600px]:text-[15px] max-[400px]:text-[10px] gap-[10px] ">
                  <img
                    src="./public/image/24-hour.png"
                    className=" w-[4vw]"
                    alt=""
                  />
                  نیاز به مشاوره دارید؟
                </div>
                <div className="w text-right text-white max-[2000px]:text-[25px] max-[1300px]:text-[20px] max-[1000px]:text-[15px] max-[800px]:text-[10px] max-[600px]:text-[10px] max-[400px]:text-[6px] ">
                  7 روز هفته 24 ساعت
                </div>
                <div className="w text-right text-white text-wrap max-[2000px]:text-[20px] max-[1300px]:text-[15px] max-[1000px]:text-[10px] max-[800px]:text-[5px] max-[600px]:text-[5px] max-[400px]:text-[5px]">
                  تیم پشتیبانی مجرب الیماگشت همواره و در تمامی مراحل سفر برای
                  آسودگی خاطر و ارایه خدمات، همراه و یاور شماست.
                </div>
                <div className="w flex justify-end items-center ">
                  <a
                    href=""
                    className=" max-[2000px]:w-[125px] max-[1200px]:w-[100px]  max-[2000px]:h-[35px] max-[1000px]:w-[80px] max-[600px]:h-[17px] max-[600px]:text-[8px] max-[500px]:text-[5px] max-[500px]:w-[50px] max-[500px]:h-[15px] max-[600px]:w-[60px] max-[1000px]:h-[25px]  max-[1200px]:h-[30px] rounded-[25px] f  text-center border-[1px] bg-[#F64218] border-white font-light max-[2000px]:text-[15px] max-[1000px]:text-[10px]  max-[1200px]:text-[12px] text-white"
                  >
                    تماس بگیرید
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Question backgroundImage="/public/image/visa-back-canada-copy.png" />
      <Footer />
    </motion.div>
  );
};

export default Insurance;
