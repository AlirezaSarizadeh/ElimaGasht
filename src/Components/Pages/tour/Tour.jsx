import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useState, useRef, useEffect } from "react";
import TopLogo from "../Header/TopLogo";
import MenuDesk from "../Header/MenuDesk";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import opacity from "react-element-popper/animations/opacity";
import { Drawer } from "@material-tailwind/react";
import axios from "axios";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Footer from "../footer/Footer";
import Question from "../question/question";
import { motion } from "framer-motion";
import MiniMenu from "../Header/MiniMenu";
import { Link, useNavigate } from "react-router-dom";
import SelectWithOptions from "../flight/SelectWithOptions";

const Tour = () => {
  const [countChiled, setCountChiled] = useState(0);
  const [count, setCount] = useState(0);
  const [countForeign, setCountForeign] = useState(0);
  const [countForeignChiled, setCountForeignChiled] = useState(0);
  const inputValue =
    [
      count > 0 ? `   ${count}  ${"بزرگسال"}` : "",
      countChiled > 0 ? `  ${countChiled}  ${"کودک"}` : "",
    ]
      .filter(Boolean)
      .join("    و    ") || "";
  const ForeignInputValue =
    [
      countForeign > 0 ? `  ${countForeign}  ${"بزرگسال"}` : "",
      countForeignChiled > 0 ? ` ${countForeignChiled}  ${"کودک"} ` : "",
    ]
      .filter(Boolean)
      .join("    و    ") || "";
  const [selectedDate, setSelectedDate] = useState(""); // Store selected date
  const [selectedDate2, setSelectedDate2] = useState(""); // Store selected date
  const [selectedWay1, setSelectedWay1] = useState(""); // State for selected value
  const [selectedWay3, setSelectedWay3] = useState(""); // State for selected value
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selectedDate && selectedDate2 && selectedWay1 && selectedWay3 && inputValue) {
      const formattedDate = selectedDate.format("dddd   DD   MMMM");
      const formattedDate2 = selectedDate2.format("dddd   DD   MMMM");
      navigate(
        `/tour-list?date2=${formattedDate2}&date=${formattedDate}&way1=${selectedWay1}&way2=${selectedWay3}&passenger=${inputValue}`
      );
    }
  };
  const [selectedReturnDate, setSelectedReturnDate] = useState(""); // Store second selected date (برگشت)
  const [activeInput, setActiveInput] = useState(null); // Track which input was clicked
  const [selectedWay4, setSelectedWay4] = useState(null);
  const [selectedWay5, setSelectedWay5] = useState(null);
  const [options3, setOptions3] = useState([]);
  const [options4, setOptions4] = useState([]);
  const [options1, setOptions1] = useState([]);
  const [options2, setOptions2] = useState([]);
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
  const handleDateSelection = (date) => {
    if (activeInput === "departure") {
      setSelectedDate(date.format()); // Store the selected date for "رفت"
    } else if (activeInput === "return") {
      setSelectedReturnDate(date.format()); // Store the selected date for "برگشت"
    }
  };

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
  useEffect(() => {
    // Request for foreigner type
    let dataForeign = new FormData();
    dataForeign.append("type", "foreigner"); // Append 'foreigner' type for external airports

    axios
      .post("https://elimagasht.net/api/airports", dataForeign)
      .then((response) => {
        if (Array.isArray(response.data)) {
          const airportOptions = response.data
            .filter((airport) => airport.status === 1)
            .map((airport) => ({
              label: `${airport.city.trim()} (${airport.symbol})`, // Example: "تهران (IKA)"
              value: `${airport.city.trim()} (${airport.symbol})`,
            }));

          setOptions3(airportOptions);
          setOptions4(airportOptions);
        }
      })
      .catch((error) =>
        console.error("Error fetching foreigner airports:", error)
      );

    // Request for internal type
    let dataInternal = new FormData();
    dataInternal.append("type", "internal"); // Append 'internal' type for internal airports

    axios
      .post("https://elimagasht.net/api/airports", dataInternal)
      .then((response) => {
        if (Array.isArray(response.data)) {
          const airportOptions = response.data
            .filter((airport) => airport.status === 1)
            .map((airport) => ({
              label: `${airport.city.trim()} (${airport.symbol})`, // Example: "تهران (IKA)"
              value: `${airport.city.trim()} (${airport.symbol})`,
            }));

          setOptions1(airportOptions);
          setOptions2(airportOptions);
        }
      })
      .catch((error) =>
        console.error("Error fetching internal airports:", error)
      );
  }, []);

  const [activeTab, setActiveTab] = useState(0);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="  wraper flex  justify-start items-center flex-col  w h m-[0] p-[0]">
        <div className="w h-[1069px]  top-0 bg-cover de:bg-[url('/public/image/tour-elima-background.jpg')] mo:bg-[url('/public/image/tour-elima-mobile-background.png')]     bg-no-repeat bg-center ">
          <TopLogo />
          <MenuDesk />
          <div className="header flex flex-col justify-start items-center   top-[0px] w h cancel ">
            <div
              className="w de:h-[625px]  mo:h-[85%] flex mo:justify-center
        items-center de:justify-start flex-col  "
            >
              <div
                className="w-[85%] mo:h-[100%]  de:h-[200px] de:flex  mo:hidden  de:flex-col de:justify-center  
              de:border-[1px]  de:border-solid de:rounded-b-[15px] de:border-t-0 mo:border-none    "
              >
                <div className="w flex justify-start items-end pr-[60px] h">
                  <div className=" f w-[15%]  h-[45px]  text-sm font-normal    text-center rounded-[15px]   border-[1px] border-solid">
                    <button
                      className={` text-center h-[45px] w rounded-r-[15px]  de:text-[15px]   !text-gray-200 ${
                        activeTab === 0
                          ? "border-b-4 border-sky-500 h-[45px] transition-all duration-100 "
                          : " !hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab(0)}
                    >
                      داخلی
                    </button>
                    <button
                      className={` text-center h-[45px] w rounded-l-[15px]  de:text-[15px]   !text-gray-200 ${
                        activeTab === 1
                          ? "border-b-4  border-sky-500 h-[45px] transition-all duration-100 "
                          : " !hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab(1)}
                    >
                      خارجی
                    </button>
                  </div>
                </div>
                <div className="py-4 ">
                  {activeTab === 0 && (
                    <div className="w-full h-full flex justify-center gap-[70px] items-end">
                      <div className="w-[20%] h-[40px] gap-[20px] flex justify-center items-center ">
                        <SelectWithOptions
                          label="مبدا"
                          name="way1"
                          options={options1}
                          selectedValue={selectedWay1} // Bind state
                          onSelect={setSelectedWay1} // Handle selection
                        />
                        <SelectWithOptions
                          label="مقصد"
                          name="way2"
                          options={options2}
                          selectedValue={selectedWay3} // Bind state
                          onSelect={setSelectedWay3} // Handle selection
                        />
                      </div>

                      <div className="w-[20%] h-[40px] gap-[20px] flex justify-center items-center ">
                        <div className="w-full  flex justify-center items-center text-white relative  h-[40px] border-[1px] border-solid rounded-xl  transition-all duration-200   focus-within:border-[#F0421A]   backdrop-blur-3xl group    ">
                          <DatePicker
                            animations={[opacity()]}
                            format="DD    MMMM YYYY"
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="bottom-center"
                            inputClass="taghvim"
                            placeholder="رفت "
                            className="!placeholder:text-white !f !bg-black/40 !border-white !border absolute left-1/2 transform -translate-x-1/2  !shadow-none"
                            onChange={setSelectedDate}
                          />

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            className="absolute left-2 -z-10 group-focus-within:fill-[#F0421A] fill-zinc-200/80 transition-all duration-200"
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
                        </div>
                        <div className="w-full flex justify-center items-center text-white group h-[40px] border-[1px] border-solid rounded-xl transition-all duration-200   focus-within:border-[#F0421A]  relative  backdrop-blur-3xl  backdrop-brightness-150   ">
                          <DatePicker
                            animations={[opacity()]}
                            format="DD    MMMM YYYY"
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="bottom-center"
                            inputClass="taghvim"
                            placeholder="برگشت "
                            className="!placeholder:text-white !f !bg-black/40 !border-white !border absolute left-1/2 transform -translate-x-1/2  !shadow-none"
                            onChange={setSelectedDate2}

                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            className="absolute group-focus-within:fill-[#F0421A] fill-zinc-200/80 transition-all duration-200 left-2 -z-10"
                          >
                            <path d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z" />
                            <path d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z" />
                            <path d="M8.5 14.5C8.24 14.5 7.98 14.39 7.79 14.21C7.61 14.02 7.5 13.77 7.5 13.5C7.5 13.37 7.53 13.24 7.58 13.12C7.63 13 7.7 12.89 7.79 12.79C8.16 12.42 8.83 12.42 9.21 12.79C9.39 12.98 9.5 13.24 9.5 13.5C9.5 13.56 9.49 13.63 9.48 13.7C9.47 13.76 9.45 13.82 9.42 13.88C9.4 13.94 9.37 14 9.33 14.06C9.29 14.11 9.25 14.16 9.21 14.21C9.02 14.39 8.76 14.5 8.5 14.5Z" />
                            <path d="M12 14.5C11.87 14.5 11.74 14.47 11.62 14.42C11.49 14.37 11.39 14.3 11.29 14.21C11.11 14.02 11 13.77 11 13.5C11 13.37 11.03 13.24 11.08 13.12C11.13 13 11.2 12.89 11.29 12.79C11.39 12.7 11.49 12.63 11.62 12.58C11.99 12.43 12.43 12.51 12.71 12.79C12.89 12.98 13 13.24 13 13.5C13 13.56 12.99 13.63 12.98 13.7C12.97 13.76 12.95 13.82 12.92 13.88C12.9 13.94 12.87 14 12.83 14.06C12.8 14.11 12.75 14.16 12.71 14.21C12.52 14.39 12.26 14.5 12 14.5Z" />
                            <path d="M8.5 18C8.37 18 8.24 17.97 8.12 17.92C7.99 17.87 7.88 17.8 7.79 17.71C7.7 17.62 7.63 17.51 7.58 17.38C7.53 17.26 7.5 17.13 7.5 17C7.5 16.87 7.53 16.74 7.58 16.62C7.63 16.49 7.7 16.38 7.79 16.29C7.88 16.2 7.99 16.13 8.12 16.08C8.36 15.98 8.64 15.97 8.88 16.08C9.01 16.13 9.12 16.2 9.21 16.29C9.3 16.38 9.37 16.49 9.42 16.62C9.47 16.74 9.5 16.87 9.5 17C9.5 17.13 9.47 17.26 9.42 17.38C9.37 17.51 9.3 17.62 9.21 17.71C9.12 17.8 9.01 17.87 8.88 17.92C8.76 17.97 8.63 18 8.5 18Z" />
                            <path d="M20.5 9.83997H3.5C3.09 9.83997 2.75 9.49997 2.75 9.08997C2.75 8.67997 3.09 8.33997 3.5 8.33997H20.5C20.91 8.33997 21.25 8.67997 21.25 9.08997C21.25 9.49997 20.91 9.83997 20.5 9.83997Z" />
                            <path d="M18 23.75C16.83 23.75 15.72 23.33 14.87 22.56C14.51 22.26 14.19 21.88 13.93 21.44C13.49 20.72 13.25 19.87 13.25 19C13.25 16.38 15.38 14.25 18 14.25C19.36 14.25 20.66 14.84 21.56 15.86C22.33 16.74 22.75 17.85 22.75 19C22.75 19.87 22.51 20.72 22.06 21.45C21.22 22.87 19.66 23.75 18 23.75ZM18 15.75C16.21 15.75 14.75 17.21 14.75 19C14.75 19.59 14.91 20.17 15.22 20.67C15.39 20.97 15.61 21.22 15.85 21.43C16.45 21.97 17.2 22.25 18 22.25C19.15 22.25 20.19 21.66 20.78 20.68C21.09 20.17 21.25 19.6 21.25 19C21.25 18.22 20.96 17.46 20.44 16.85C19.82 16.15 18.93 15.75 18 15.75Z" />
                            <path d="M17.4299 20.74C17.2399 20.74 17.0499 20.67 16.8999 20.52L15.9099 19.53C15.6199 19.24 15.6199 18.76 15.9099 18.47C16.1999 18.18 16.6799 18.18 16.9699 18.47L17.4499 18.95L19.0499 17.47C19.3499 17.19 19.8299 17.21 20.1099 17.51C20.3899 17.81 20.3699 18.29 20.0699 18.57L17.9399 20.54C17.7899 20.67 17.6099 20.74 17.4299 20.74Z" />
                            <path d="M15.37 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V16.36C21.75 16.67 21.56 16.95 21.26 17.06C20.97 17.17 20.64 17.09 20.43 16.85C19.81 16.15 18.92 15.75 17.99 15.75C16.2 15.75 14.74 17.21 14.74 19C14.74 19.59 14.9 20.17 15.21 20.67C15.38 20.97 15.6 21.22 15.84 21.43C16.08 21.63 16.17 21.96 16.06 22.26C15.97 22.55 15.69 22.75 15.37 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H13.82C13.45 20.57 13.25 19.8 13.25 19C13.25 16.38 15.38 14.25 18 14.25C18.79 14.25 19.57 14.45 20.25 14.82V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z" />
                          </svg>
                        </div>
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
                          placeholder="مسافران "
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
                              className="w h-[75%] f"
                            >
                              <div className="flex justify-center gap-3 items-start pr-7 w flex-col ">
                                <div className="f gap-3 ">
                                  بزرگسال
                                  <span className="font-thin text-[12px]">
                                    (12 سال به بالا)
                                  </span>
                                </div>
                                <div className="f gap-3 ">
                                  کودک
                                  <span className="font-thin text-[12px]">
                                    (تا 12 سال)
                                  </span>
                                </div>
                              </div>
                              <div className="w f gap-3 flex-col">
                                <div className="f flex-row-reverse ">
                                  <button
                                    onClick={() =>
                                      setCount((prevCount) =>
                                        Math.max(0, prevCount - 1)
                                      )
                                    }
                                    className="  border border-[#F0421A] rounded-full f w-[20px] h-[20px] text-[#F0421A] disabled:opacity-50"
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
                                    onClick={() => setCount(count + 1)}
                                    className=" border border-[#F0421A] rounded-full f w-[20px] h-[20px] text-[#F0421A]"
                                  >
                                    +
                                  </button>
                                </div>
                                <div className="f flex-row-reverse ">
                                  <button
                                    onClick={() =>
                                      setCountChiled((prevCount) =>
                                        Math.max(0, prevCount - 1)
                                      )
                                    }
                                    className="  border border-[#F0421A] rounded-full f w-[20px] h-[20px] text-[#F0421A] disabled:opacity-50"
                                    disabled={countChiled === 0}
                                  >
                                    -
                                  </button>
                                  <motion.div
                                    key={countChiled}
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
                                    {countChiled}
                                  </motion.div>
                                  <button
                                    onClick={() =>
                                      setCountChiled(countChiled + 1)
                                    }
                                    className=" border border-[#F0421A] rounded-full f w-[20px] h-[20px] text-[#F0421A]"
                                  >
                                    +
                                  </button>
                                </div>
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
                  )}
                  {activeTab === 1 && (
                    <div className="w-full h-full flex   justify-center gap-[70px] items-end">
                      <div className="w-[20%] h-[40px] gap-[20px] flex justify-center items-center ">
                        <SelectWithOptions
                          label="مبدا"
                          name="way3"
                          options={options3}
                          selectedValue={selectedWay4} // Bind state
                          onSelect={setSelectedWay4} // Handle selection
                        />
                        <SelectWithOptions
                          label="مقصد"
                          name="way4"
                          options={options4}
                          selectedValue={selectedWay5} // Bind state
                          onSelect={setSelectedWay5} // Handle selection
                        />
                      </div>

                      <div className="w-[20%] h-[40px] gap-[20px] flex justify-center items-center ">
                        <div className="w-full  flex justify-center items-center text-white relative  h-[40px] border-[1px] border-solid rounded-xl  transition-all duration-200   focus-within:border-[#F0421A]   backdrop-blur-3xl group    ">
                          <DatePicker
                            animations={[opacity()]}
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="bottom-center"
                            inputClass="taghvim"
                            placeholder="رفت "
                            className="!placeholder:text-white !f !bg-black/40 !border-white !border absolute left-1/2 transform -translate-x-1/2  !shadow-none"
                          />

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            className="absolute left-2 -z-10 group-focus-within:fill-[#F0421A] fill-zinc-200/80 transition-all duration-200"
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
                        </div>
                        <div className="w-full flex justify-center items-center text-white group h-[40px] border-[1px] border-solid rounded-xl transition-all duration-200   focus-within:border-[#F0421A]  relative  backdrop-blur-3xl  backdrop-brightness-150   ">
                          <DatePicker
                            animations={[opacity()]}
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="bottom-center"
                            inputClass="taghvim"
                            placeholder="برگشت "
                            className="!placeholder:text-white !f !bg-black/40 !border-white !border absolute left-1/2 transform -translate-x-1/2  !shadow-none"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            className="absolute group-focus-within:fill-[#F0421A] fill-zinc-200/80 transition-all duration-200 left-2 -z-10"
                          >
                            <path d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z" />
                            <path d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z" />
                            <path d="M8.5 14.5C8.24 14.5 7.98 14.39 7.79 14.21C7.61 14.02 7.5 13.77 7.5 13.5C7.5 13.37 7.53 13.24 7.58 13.12C7.63 13 7.7 12.89 7.79 12.79C8.16 12.42 8.83 12.42 9.21 12.79C9.39 12.98 9.5 13.24 9.5 13.5C9.5 13.56 9.49 13.63 9.48 13.7C9.47 13.76 9.45 13.82 9.42 13.88C9.4 13.94 9.37 14 9.33 14.06C9.29 14.11 9.25 14.16 9.21 14.21C9.02 14.39 8.76 14.5 8.5 14.5Z" />
                            <path d="M12 14.5C11.87 14.5 11.74 14.47 11.62 14.42C11.49 14.37 11.39 14.3 11.29 14.21C11.11 14.02 11 13.77 11 13.5C11 13.37 11.03 13.24 11.08 13.12C11.13 13 11.2 12.89 11.29 12.79C11.39 12.7 11.49 12.63 11.62 12.58C11.99 12.43 12.43 12.51 12.71 12.79C12.89 12.98 13 13.24 13 13.5C13 13.56 12.99 13.63 12.98 13.7C12.97 13.76 12.95 13.82 12.92 13.88C12.9 13.94 12.87 14 12.83 14.06C12.8 14.11 12.75 14.16 12.71 14.21C12.52 14.39 12.26 14.5 12 14.5Z" />
                            <path d="M8.5 18C8.37 18 8.24 17.97 8.12 17.92C7.99 17.87 7.88 17.8 7.79 17.71C7.7 17.62 7.63 17.51 7.58 17.38C7.53 17.26 7.5 17.13 7.5 17C7.5 16.87 7.53 16.74 7.58 16.62C7.63 16.49 7.7 16.38 7.79 16.29C7.88 16.2 7.99 16.13 8.12 16.08C8.36 15.98 8.64 15.97 8.88 16.08C9.01 16.13 9.12 16.2 9.21 16.29C9.3 16.38 9.37 16.49 9.42 16.62C9.47 16.74 9.5 16.87 9.5 17C9.5 17.13 9.47 17.26 9.42 17.38C9.37 17.51 9.3 17.62 9.21 17.71C9.12 17.8 9.01 17.87 8.88 17.92C8.76 17.97 8.63 18 8.5 18Z" />
                            <path d="M20.5 9.83997H3.5C3.09 9.83997 2.75 9.49997 2.75 9.08997C2.75 8.67997 3.09 8.33997 3.5 8.33997H20.5C20.91 8.33997 21.25 8.67997 21.25 9.08997C21.25 9.49997 20.91 9.83997 20.5 9.83997Z" />
                            <path d="M18 23.75C16.83 23.75 15.72 23.33 14.87 22.56C14.51 22.26 14.19 21.88 13.93 21.44C13.49 20.72 13.25 19.87 13.25 19C13.25 16.38 15.38 14.25 18 14.25C19.36 14.25 20.66 14.84 21.56 15.86C22.33 16.74 22.75 17.85 22.75 19C22.75 19.87 22.51 20.72 22.06 21.45C21.22 22.87 19.66 23.75 18 23.75ZM18 15.75C16.21 15.75 14.75 17.21 14.75 19C14.75 19.59 14.91 20.17 15.22 20.67C15.39 20.97 15.61 21.22 15.85 21.43C16.45 21.97 17.2 22.25 18 22.25C19.15 22.25 20.19 21.66 20.78 20.68C21.09 20.17 21.25 19.6 21.25 19C21.25 18.22 20.96 17.46 20.44 16.85C19.82 16.15 18.93 15.75 18 15.75Z" />
                            <path d="M17.4299 20.74C17.2399 20.74 17.0499 20.67 16.8999 20.52L15.9099 19.53C15.6199 19.24 15.6199 18.76 15.9099 18.47C16.1999 18.18 16.6799 18.18 16.9699 18.47L17.4499 18.95L19.0499 17.47C19.3499 17.19 19.8299 17.21 20.1099 17.51C20.3899 17.81 20.3699 18.29 20.0699 18.57L17.9399 20.54C17.7899 20.67 17.6099 20.74 17.4299 20.74Z" />
                            <path d="M15.37 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V16.36C21.75 16.67 21.56 16.95 21.26 17.06C20.97 17.17 20.64 17.09 20.43 16.85C19.81 16.15 18.92 15.75 17.99 15.75C16.2 15.75 14.74 17.21 14.74 19C14.74 19.59 14.9 20.17 15.21 20.67C15.38 20.97 15.6 21.22 15.84 21.43C16.08 21.63 16.17 21.96 16.06 22.26C15.97 22.55 15.69 22.75 15.37 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H13.82C13.45 20.57 13.25 19.8 13.25 19C13.25 16.38 15.38 14.25 18 14.25C18.79 14.25 19.57 14.45 20.25 14.82V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z" />
                          </svg>
                        </div>
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
                          value={ForeignInputValue}
                          placeholder="مسافران "
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
                              className="w h-[75%] f"
                            >
                              <div className="flex justify-center gap-3 items-start pr-7 w flex-col ">
                                <div className="f gap-3 ">
                                  بزرگسال
                                  <span className="font-thin text-[12px]">
                                    (12 سال به بالا)
                                  </span>
                                </div>
                                <div className="f gap-3 ">
                                  کودک
                                  <span className="font-thin text-[12px]">
                                    (تا 12 سال)
                                  </span>
                                </div>
                              </div>
                              <div className="w f gap-3 flex-col">
                                <div className="f flex-row-reverse ">
                                  <button
                                    onClick={() =>
                                      setCountForeign((prevCount) =>
                                        Math.max(0, prevCount - 1)
                                      )
                                    }
                                    className="  border border-[#F0421A] rounded-full f w-[20px] h-[20px] text-[#F0421A] disabled:opacity-50"
                                    disabled={countForeign === 0}
                                  >
                                    -
                                  </button>
                                  <motion.div
                                    key={countForeign}
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
                                    {countForeign}
                                  </motion.div>
                                  <button
                                    onClick={() =>
                                      setCountForeign(countForeign + 1)
                                    }
                                    className=" border border-[#F0421A] rounded-full f w-[20px] h-[20px] text-[#F0421A]"
                                  >
                                    +
                                  </button>
                                </div>
                                <div className="f flex-row-reverse ">
                                  <button
                                    onClick={() =>
                                      setCountForeignChiled((prevCount) =>
                                        Math.max(0, prevCount - 1)
                                      )
                                    }
                                    className="  border border-[#F0421A] rounded-full f w-[20px] h-[20px] text-[#F0421A] disabled:opacity-50"
                                    disabled={countForeignChiled === 0}
                                  >
                                    -
                                  </button>
                                  <motion.div
                                    key={countForeignChiled}
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
                                    {countForeignChiled}
                                  </motion.div>
                                  <button
                                    onClick={() =>
                                      setCountForeignChiled(
                                        countForeignChiled + 1
                                      )
                                    }
                                    className=" border border-[#F0421A] rounded-full f w-[20px] h-[20px] text-[#F0421A]"
                                  >
                                    +
                                  </button>
                                </div>
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
                  )}
                </div>

                <div className="w-full h-full px-[50px] flex justify-end items-center ">
                  <button
                    onClick={handleSubmit}
                    disabled={
                      !selectedDate ||
                      !selectedDate2 ||
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
                    پرواز
                  </div>
                </div>
                <div className="w flex justify-start items-end ">
                  <div className=" f w  h-[45px]  text-sm font-normal  bad3xl  text-center rounded-[15px] backdrop-blur-xl  border-[1px] border-solid">
                    <button
                      className={` text-center h-[45px] w rounded-r-[15px]  text-[15px]   !text-gray-200 ${
                        activeTab === 0
                          ? "border-b-4 border-sky-500 h-[45px] transition-all duration-100 "
                          : " !hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab(0)}
                    >
                      داخلی
                    </button>
                    <button
                      className={` text-center h-[45px] w rounded-l-[15px]  text-[15px]   !text-gray-200 ${
                        activeTab === 1
                          ? "border-b-4  border-sky-500 h-[45px] transition-all duration-100 "
                          : " !hover:text-gray-700"
                      }`}
                      onClick={() => setActiveTab(1)}
                    >
                      خارجی
                    </button>
                  </div>
                </div>
                {activeTab === 0 && (
                  <div className="f flex-col gap-[30px] w">
                    <div className="w gap-[20px] flex justify-between items-center  ">
                      <div className="w flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl   cursor-pointer">
                        <input
                          type="text"
                          name=""
                          autocomplete="off"
                          value={selectedWay1} // Bind to same state
                          onClick={() => openDrawerTop("way1")}
                          readOnly
                          placeholder="مبدا"
                          className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                        />
                      </div>
                      <div className="w-full flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-150 cursor-pointer">
                        <input
                          type="text"
                          name=""
                          autocomplete="off"
                          value={selectedWay3} // Bind to same state
                          placeholder="مقصد"
                          onClick={() => openDrawerTop("way2")} // Pass identifier
                          readOnly
                          className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                        />
                      </div>
                    </div>
                    <div className="w gap-[20px] flex justify-between items-center  ">
                      <div className="w flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  cursor-pointer">
                        <input
                          type="text"
                          name=""
                          autocomplete="off"
                          value={selectedDate}
                          onClick={() => openDrawerTop("departure")} // Track "depature" input
                          readOnly
                          placeholder="رفت"
                          className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                        />
                      </div>
                      <div className="w-full flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-150 cursor-pointer">
                        <input
                          type="text"
                          name=""
                          autocomplete="off"
                          value={selectedReturnDate}
                          onClick={() => openDrawerTop("return")} // Track "return" input
                          readOnly
                          placeholder="برگشت"
                          className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                        />
                      </div>
                    </div>
                    <div className="w gap-[20px] flex justify-between items-center  ">
                      <div
                        className="w flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl   cursor-pointer"
                        onClick={() => openDrawerTop("passenger")} // Track "return" input
                        readOnly
                      >
                        <input
                          type="text"
                          name=""
                          autocomplete="off"
                          id="moBackbasetypeInput"
                          value={inputValue}
                          readOnly
                          placeholder="مسافران"
                          className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 1 && (
                  <div className="f flex-col gap-[30px] w">
                    <div className="w gap-[20px] flex justify-between items-center  ">
                      <div className="w flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl   cursor-pointer">
                        <input
                          type="text"
                          name=""
                          autocomplete="off"
                          id="moBackwayInput"
                          placeholder="مبدا"
                          className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                        />
                      </div>
                      <div className="w-full flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-150 cursor-pointer">
                        <input
                          type="text"
                          name=""
                          autocomplete="off"
                          id="moBackcertitypeInput"
                          placeholder="مقصد"
                          className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                        />
                      </div>
                    </div>
                    <div className="w gap-[20px] flex justify-between items-center  ">
                      <div className="w flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  cursor-pointer">
                        <input
                          type="text"
                          name=""
                          autocomplete="off"
                          id="moBackbasetypeInput"
                          placeholder="رفت"
                          className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                        />
                      </div>
                      <div className="w-full flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-150 cursor-pointer">
                        <input
                          type="text"
                          name=""
                          autocomplete="off"
                          id="moBackcertitypeInput"
                          placeholder="برگشت"
                          className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                        />
                      </div>
                    </div>
                    <div className="w gap-[20px] flex justify-between items-center  ">
                      <div className="w flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl   cursor-pointer">
                        <input
                          type="text"
                          name=""
                          autocomplete="off"
                          id="moBackbasetypeInput"
                          placeholder="مسافران"
                          className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                        />
                      </div>
                    </div>
                  </div>
                )}
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
                    label="مبدا"
                    name="way1"
                    options={options1}
                    selectedValue={selectedWay1}
                    onSelect={setSelectedWay1}
                  />
                )}

                {activeInput === "way2" && (
                  <SelectWithOptions
                    label="مقصد"
                    name="way2"
                    options={options2}
                    selectedValue={selectedWay3}
                    onSelect={setSelectedWay3}
                  />
                )}
                {activeInput === "departure" && (
                  <DatePicker
                    animations={[opacity()]}
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom-center"
                    inputClass="taghviMo"
                    placeholder="رفت"
                    className="!placeholder:text-white !f !bg-black/40 !border-white !border absolute left-1/2 transform -translate-x-1/2 !shadow-none"
                    onChange={handleDateSelection} // Handle date selection
                  />
                )}
                {activeInput === "return" && (
                  <DatePicker
                    animations={[opacity()]}
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom-center"
                    inputClass="taghviMo"
                    placeholder="برگشت"
                    className="!placeholder:text-white !f !bg-black/40 !border-white !border absolute left-1/2 transform -translate-x-1/2 !shadow-none"
                    onChange={handleDateSelection} // Handle date selection
                  />
                )}
                {activeInput === "passenger" && (
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
                      readOnly
                      placeholder="مسافران "
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
                      <div className="w h-[150px] border border-white  bg-black/40 rounded-md flex-col backdrop-blur-3xl absolute top-[70px]">
                        <div onClick={() => setIsOpen(false)} className="w h f">
                          <div className="flex justify-center gap-3 items-start pr-7 w flex-col ">
                            <div className="f gap-3 ">
                              بزرگسال
                              <span className="font-thin text-[12px]">
                                (12 سال به بالا)
                              </span>
                            </div>
                            <div className="f gap-3 ">
                              کودک
                              <span className="font-thin text-[12px]">
                                (تا 12 سال)
                              </span>
                            </div>
                          </div>
                          <div className="w f gap-3 flex-col">
                            <div className="f flex-row-reverse ">
                              <button
                                onClick={() =>
                                  setCount((prevCount) =>
                                    Math.max(0, prevCount - 1)
                                  )
                                }
                                className="  border border-[#F0421A] rounded-full f w-[20px] h-[20px] text-[#F0421A] disabled:opacity-50"
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
                                onClick={() => setCount(count + 1)}
                                className=" border border-[#F0421A] rounded-full f w-[20px] h-[20px] text-[#F0421A]"
                              >
                                +
                              </button>
                            </div>
                            <div className="f flex-row-reverse ">
                              <button
                                onClick={() =>
                                  setCountChiled((prevCount) =>
                                    Math.max(0, prevCount - 1)
                                  )
                                }
                                className="  border border-[#F0421A] rounded-full f w-[20px] h-[20px] text-[#F0421A] disabled:opacity-50"
                                disabled={countChiled === 0}
                              >
                                -
                              </button>
                              <motion.div
                                key={countChiled}
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
                                {countChiled}
                              </motion.div>
                              <button
                                onClick={() => setCountChiled(countChiled + 1)}
                                className=" border border-[#F0421A] rounded-full f w-[20px] h-[20px] text-[#F0421A]"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </Drawer>
            </div>

            <MiniMenu />
          </div>
        </div>
      </div>
      <div className="w h-[750px] overflow-hidden pt-[40px] min-[800px]:pr-[70px] max-[800px]:pr-[20px] min-[1000px]:gap-[35px] min-[800px]:pl-[70px] max-[800px]:pl-[20px]  flex justify-start ro flex-col items-center bg-[url('/public/image/tour-background-Copy.png')]     bg-no-repeat  bg-cover ">
        <div className=" w h-[50px]  text-black font-bold max-[2000px]:text-[44px] max-[1000px]:text-[30px] max-[500px]:text-[25px] ">
          از هر نقطه ایران همسفر الیما باشید
        </div>

        <div className=" w h-[100px] flex max-[2000px]:justify-center max-[600px]:justify-start max-[2000px]:flex-row max-[600px]:flex-col text-black font-bold text-[44px] ">
          <div className="h w-[50%] flex justify-start flex-row items-center">
            <span className="max-[2000px]:text-[35px] max-[1000px]:text-[25px] max-[500px]:text-[20px] font-medium">
              برای اطلاع از دیگر تور های ما....
            </span>
          </div>
          <div className="h w-[50%] ">
            <a
              href=""
              className="h w flex max-[2000px]:justify-end max-[600px]:justify-start flex-row items-center"
            >
              <span className="max-[2000px]:text-[25px] max-[1000px]:text-[20px] max-[500px]:text-[15px] font-medium">
                مشاهده تمامی تور ها
              </span>
              <img
                src="./public/image/arrow-tour.png"
                className="w-[25px]"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="  w  flex max-[2000px]:justify-start max-[950px]:justify-center items-start      ">
          <div className="w-full ">
            {/* Tabs Header */}
            <div className=" f w-[640px] h-[55px]  text-sm font-medium    text-center rounded-[15px]  f border-[1px]  border-black">
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
                className={` text-center h-[55px] w   de:text-[20px]  mo:text-[10px] !text-black ${
                  activeTab === 1
                    ? "border-b-4  border-[#F0421A] h-[55px] !text-[#F0421A]"
                    : " !hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(1)}
              >
                تورهای لحظه آخری{" "}
              </button>
              <button
                className={` text-center h-[55px] w   de:text-[20px]  mo:text-[10px] !text-black ${
                  activeTab === 2
                    ? "border-b-4 border-[#F0421A] h-[55px] !text-[#F0421A]"
                    : " !hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(2)}
              >
                تورهای اقساطی{" "}
              </button>
              <button
                className={` text-center h-[55px] w rounded-l-[15px]  de:text-[20px]  mo:text-[10px] !text-black ${
                  activeTab === 3
                    ? "border-b-4 border-[#F0421A] h-[55px] !text-[#F0421A]"
                    : " !hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(3)}
              >
                تورهای اروپایی{" "}
              </button>
            </div>

            {/* Tabs Content */}
            <div className="py-4 ">
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
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
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
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
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
              {activeTab === 2 && (
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
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
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
              {activeTab === 3 && (
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
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
                              >
                                جزییات و خرید
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="f">
                        <div className=" max-[600px]:h-[85%] max-[2000px]:h-[90%] w-[350px] border-[1px] f flex-col border-black rounded-[15px] overflow-hidden backdrop-blur-sm">
                          <img
                            src="./public/image/tour-pic.png"
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
                                className="w-[120px] h-[30px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px]"
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
      <div className="w max-[2000px]:h-[700px] max-[600px]:h-[400px] bg-bottom  flex justify-start flex-col items-center  relative  bg-[url('/public/image/tour-background.png')]   bg-no-repeat  bg-cover ">
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
      <Question backgroundImage="/public/image/tour-background-copy.png" />
      <Footer />
    </motion.div>
  );
};

export default Tour;
