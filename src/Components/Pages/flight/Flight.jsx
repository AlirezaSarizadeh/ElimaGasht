import Question from "../question/question";
import { Drawer } from "@material-tailwind/react";
import Footer from "../footer/Footer";
import TopLogo from "../Header/TopLogo";
import MenuDesk from "../Header/MenuDesk";
import FlightSwitcher from "./FlightSwitcher";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import SelectWithOptions from "./SelectWithOptions";
import DatePicker from "react-multi-date-picker";
import opacity from "react-element-popper/animations/opacity";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import MiniMenu from "../Header/MiniMenu";
const Flight = () => {
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
  const [selectedWay1, setSelectedWay1] = useState(""); // State for selected value
  const [selectedWay3, setSelectedWay3] = useState(""); // State for selected value
  

  const navigate = useNavigate();

  const handleSubmit = (selectedOption) => {
    const symbol = selectedOption.symbol;
    if (selectedDate && selectedWay1 && selectedWay3 && inputValue) {
      const formattedDate = selectedDate.format("dddd   DD   MMMM");
      navigate(
        `/flight-list?symbol=${symbol}&date=${formattedDate}&way1=${selectedWay1}&way2=${selectedWay3}&passenger=${inputValue}`
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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle mouse/touch start event
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  // Handle mouse/touch leave event
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Handle mouse/touch up event
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle mouse/touch move event
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - e.currentTarget.offsetLeft;
    const scroll = scrollLeft - (x - startX);
    e.currentTarget.scrollLeft = scroll;
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
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    // Request for foreigner type
    let dataForeign = new FormData();
    dataForeign.append('type', 'foreigner'); // Append 'foreigner' type for external airports

    axios.post("https://elimagasht.net/api/airports", dataForeign)
      .then(response => {
        if (Array.isArray(response.data)) {
          const airportOptions = response.data
            .filter(airport => airport.status === 1)
            .map(airport => ({
              label: `${airport.city.trim()}`, // Display city name
              value: `${airport.city.trim()}`, // Include both city name and symbol for filtering
              symbol: `${airport.symbol}`, // Store the symbol separately for filtering
            }));
          setOptions3(airportOptions);
          setOptions4(airportOptions);
        }
      })
      .catch(error => console.error("Error fetching foreigner airports:", error));

    // Request for internal type
    let dataInternal = new FormData();
    dataInternal.append('type', 'internal'); // Append 'internal' type for internal airports

    axios.post("https://elimagasht.net/api/airports", dataInternal)
      .then(response => {
        if (Array.isArray(response.data)) {
          const airportOptions = response.data
            .filter(airport => airport.status === 1)
            .map(airport => ({
              label: `${airport.city.trim()}`, // Display city name
              value: `${airport.city.trim()}`, // Include both city name and symbol for filtering
              symbol: `${airport.symbol}`, // Store the symbol separately for filtering
            }));
          setOptions1(airportOptions);
          setOptions2(airportOptions);
        }
      })
      .catch(error => console.error("Error fetching internal airports:", error));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="  wraper flex  justify-start items-center flex-col  w h m-[0] p-[0]">
        <div className="w h-[1069px]  top-0 bg-cover bg-[url('/public/image/flight-elima-back.jpg')]    bg-no-repeat bg-center ">
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
      <FlightSwitcher />
      <div className="w max-[2000px]:h-[700px] max-[600px]:h-[400px] bg-bottom  flex justify-start flex-col items-center  relative  bg-[url('/public/image/tour-background.png')]   bg-no-repeat  bg-cover ">
        <div className="w-[80%] flex h-[30%] items-center justify-center mo:gap-[5vw] de:gap-[100px]">
          <img
            src="/public/image/flight-logo.png"
            className="de:h-[156px] mo:h-[17vw]"
            alt=""
          />
          <img
            src="/public/image/flight-logo-2.png"
            className="de:h-[156px] mo:h-[17vw]"
            alt=""
          />
          <img
            src="/public/image/flight-logo-3.png"
            className="de:h-[156px] mo:h-[17vw]"
            alt=""
          />
          <img
            src="/public/image/flight-logo-4.png"
            className="de:h-[156px] mo:h-[17vw]"
            alt=""
          />
        </div>
        <div
          className="w h-[70%] user overflow-y-scroll flex justify-start scrollbar-hide items-center de:gap-[50px] mo:gap-[20px] de:px-[100px] mo:px-[50px] select-none"
          id="swiper-container"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleMouseMove}
        >
          <div className="h-[80%] w bg-[url('/public/image/flight-kish.jpg')] bg-no-repeat bg-cover rounded-xl">
            <div className="w text-white gap-[10px] h bg-gradient-to-l from-black/60 group   to-transparent  rounded-xl flex justify-end p-[30px] items-start flex-col">
              <h1 className=" text-[22px] font-semibold">بهترین فصل شنا</h1>
              <Link className=" border-white border-solid border p-[10px] group-hover:ring-[0.5px] transition-all group-hover:shadow-md group-hover:shadow-white/60 duration-200 ring-white rounded-xl font-light">
                خرید بلیط پرواز‌های کیش
              </Link>
            </div>
          </div>
          <div className="h-[80%] w bg-[url('/public/image/flight-turkey.jpg')] bg-no-repeat bg-cover   rounded-xl">
            <div className="w text-white gap-[10px] h bg-gradient-to-l from-black/60 group   to-transparent  rounded-xl flex justify-end p-[30px] items-start flex-col">
              <h1 className=" text-[22px] font-bold">سفر به ترکیه</h1>
              <Link className=" border-white font-light border-solid border p-[10px] group-hover:ring-[0.5px] transition-all group-hover:shadow-md group-hover:shadow-white/60 duration-200 ring-white rounded-xl ">
                خرید بلیط پرواز‌های ترکیه
              </Link>
            </div>
          </div>
          <div className="h-[80%] w  flex flex-col justify-center items-center de:gap-[50px] mo:gap-[20px] bg-no-repeat bg-cover rounded-xl">
            <div className="w h-[50%] bg-[url('/public/image/flight-shiraz.jpg')] bg-no-repeat bg-cover rounded-xl">
              <div className="w text-white gap-[10px] h bg-gradient-to-l from-black/60 group   to-transparent  rounded-xl flex justify-end p-[30px] items-start flex-col">
                <h1 className=" text-[22px] font-bold">
                  دنیایی از تاریخ و هنر
                </h1>
                <Link className=" border-white font-light border-solid border p-[10px] group-hover:ring-[0.5px] transition-all group-hover:shadow-md group-hover:shadow-white/60 duration-200 ring-white rounded-xl ">
                  خرید بلیط پرواز‌های شیراز
                </Link>
              </div>
            </div>
            <div className="w h-[50%] bg-[url('/public/image/flight-dubai.jpg')] bg-no-repeat bg-cover rounded-xl">
              <div className="w text-white gap-[10px] h bg-gradient-to-l from-black/60 group   to-transparent  rounded-xl flex justify-end p-[30px] items-start flex-col">
                <h1 className=" text-[22px] font-bold">شگفتی در صحرا</h1>
                <Link className=" border-white font-light border-solid border p-[10px] group-hover:ring-[0.5px] transition-all group-hover:shadow-md group-hover:shadow-white/60 duration-200 ring-white rounded-xl ">
                  خرید بلیط پرواز‌های دبی
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w  h-[1000px] bg-bottom   flex justify-start de:gap-[80px] mo:gap-0  flex-col items-center  relative  bg-[url('/public/image/tour-background.png')]   bg-no-repeat  bg-cover ">
        <div className=" w h-[200px] flex justify-start items-center text-black font-bold max-[2000px]:text-[44px] max-[1000px]:text-[30px] max-[500px]:text-[25px]">
          مراحل خرید آنلاین بلیط هواپیما
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="704"
          viewBox="0 0 40 704"
          fill="none"
          className="absolute right-[4%] bottom-[50px]"
        >
          <path
            d="M12 23L12 698"
            stroke="#CBCBCB"
            stroke-linecap="round"
            stroke-dasharray="8 8"
          />

          <circle cx="12" cy="12" r="12" fill="#1D91CC" />
          <circle cx="12" cy="149" r="12" fill="#1D91CC" />
          <circle cx="12" cy="282" r="12" fill="#1D91CC" />
          <circle cx="12" cy="420" r="12" fill="#1D91CC" />
          <circle cx="12" cy="554" r="12" fill="#1D91CC" />
          <circle cx="12" cy="692" r="12" fill="#1D91CC" />

          <text
            x="12"
            y="17"
            fill="white"
            font-size="14px"
            font-family="Arial"
            font-weight="bold"
            text-anchor="middle"
          >
            1
          </text>
          <text
            x="12"
            y="154"
            fill="white"
            font-size="14px"
            font-family="Arial"
            font-weight="bold"
            text-anchor="middle"
          >
            2
          </text>
          <text
            x="12"
            y="287"
            fill="white"
            font-size="14px"
            font-family="Arial"
            font-weight="bold"
            text-anchor="middle"
          >
            3
          </text>
          <text
            x="12"
            y="425"
            fill="white"
            font-size="14px"
            font-family="Arial"
            font-weight="bold"
            text-anchor="middle"
          >
            4
          </text>
          <text
            x="12"
            y="559"
            fill="white"
            font-size="14px"
            font-family="Arial"
            font-weight="bold"
            text-anchor="middle"
          >
            5
          </text>
          <text
            x="12"
            y="697"
            fill="white"
            font-size="14px"
            font-family="Arial"
            font-weight="bold"
            text-anchor="middle"
          >
            6
          </text>
        </svg>
        <div className="w-[80%] h-[70%]  gap-[12px] flex flex-col justify-start items-center ">
          <div className="w h flex flex-col justify-start gap-[20px] items-start">
            <div className=" font-semibold w  flex justify-start gap-3 text-[25px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                  fill="#868686"
                />
                <path
                  d="M22 22.7499C21.81 22.7499 21.62 22.6799 21.47 22.5299L19.47 20.5299C19.18 20.2399 19.18 19.7599 19.47 19.4699C19.76 19.1799 20.24 19.1799 20.53 19.4699L22.53 21.4699C22.82 21.7599 22.82 22.2399 22.53 22.5299C22.38 22.6799 22.19 22.7499 22 22.7499Z"
                  fill="#868686"
                />
              </svg>
              جستجوی بلیط
            </div>
            <p className="text-wrap">
              در بخش جستجو، نوع سفر (یکطرفه یا رفت و برگشت)و مبدأ و مقصد خود را
              وارد کنید، تاریخ سفر را انتخاب کنید و تعداد مسافران را مشخص کنید.
            </p>
          </div>
          <div className="w h flex flex-col justify-start gap-[20px] items-start">
            <div className=" w font-semibold flex justify-start gap-3 text-[25px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
              >
                <path
                  d="M6.58023 21.5501C6.36023 21.5501 6.13023 21.5101 5.92023 21.4201C5.45023 21.2201 5.09023 20.8301 4.93023 20.3401L4.49023 19.0201C4.29023 18.4201 4.47023 17.6701 4.91023 17.2201L7.18023 14.9401C7.21024 14.9101 7.25023 14.8001 7.25023 14.7501V12.2801L2.69023 14.2501C2.08023 14.5101 1.46023 14.4801 0.990234 14.1701C0.520234 13.8601 0.240234 13.3001 0.240234 12.6501V11.3601C0.240234 10.3801 0.940234 9.33007 1.83023 8.98007L7.24023 6.64007V3.80007C7.24023 2.59007 8.09023 1.20007 9.17023 0.640068C9.69024 0.380068 10.2902 0.380068 10.8002 0.640068C11.8902 1.20007 12.7402 2.58007 12.7402 3.79007V6.63007L18.1802 8.97007C19.0702 9.35007 19.7502 10.3701 19.7502 11.3601V12.6501C19.7502 13.3101 19.4802 13.8601 19.0002 14.1701C18.5202 14.4801 17.9102 14.5101 17.3002 14.2601L12.7402 12.2901V14.7601C12.7402 14.8001 12.7802 14.9001 12.8102 14.9301L15.0902 17.2201C15.5302 17.6601 15.7102 18.4301 15.5102 19.0201L15.0702 20.3401C14.9002 20.8301 14.5402 21.2201 14.0602 21.4101C13.5902 21.6001 13.0702 21.5801 12.6202 21.3601C12.5702 21.3301 12.5202 21.3001 12.4702 21.2601L10.1402 19.3001C10.0602 19.2301 9.90023 19.2401 9.83023 19.3001L7.50023 21.2601C7.46023 21.3001 7.41023 21.3301 7.36023 21.3501C7.12023 21.4901 6.85023 21.5501 6.58023 21.5501ZM7.56024 10.6401C7.79024 10.6401 8.01023 10.7001 8.20023 10.8301C8.55023 11.0601 8.75023 11.4501 8.75023 11.9101V14.7601C8.75023 15.1901 8.54023 15.7001 8.24023 16.0001L5.97023 18.2801C5.93023 18.3301 5.89023 18.4801 5.91023 18.5401L6.35023 19.8701C6.38024 19.9701 6.45023 20.0101 6.49023 20.0301C6.52023 20.0401 6.57023 20.0601 6.63023 20.0401L8.87023 18.1501C9.50023 17.6101 10.4902 17.6101 11.1202 18.1501L13.3502 20.0301C13.4202 20.0401 13.4702 20.0301 13.5002 20.0201C13.5402 20.0001 13.6202 19.9601 13.6502 19.8601L14.0902 18.5401C14.1102 18.4701 14.0702 18.3201 14.0302 18.2801L11.7602 16.0001C11.4602 15.7201 11.2402 15.2001 11.2402 14.7601V11.9101C11.2402 11.4601 11.4302 11.0701 11.7702 10.8401C12.1102 10.6101 12.5502 10.5801 12.9702 10.7601L17.8902 12.8801C18.0402 12.9401 18.1402 12.9401 18.1702 12.9201C18.2002 12.9001 18.2402 12.8101 18.2402 12.6501V11.3601C18.2402 10.9801 17.9202 10.4901 17.5802 10.3501L12.0002 7.94007C11.5602 7.75007 11.2502 7.27007 11.2502 6.79007V3.79007C11.2502 3.13007 10.7302 2.28007 10.1302 1.98007C10.0502 1.94007 9.95023 1.94007 9.86023 1.98007C9.28023 2.28007 8.75023 3.15007 8.75023 3.80007V6.80007C8.75023 7.27007 8.44023 7.76007 8.00023 7.95007L2.42023 10.3601C2.07023 10.5001 1.75023 10.9901 1.75023 11.3601V12.6501C1.75023 12.8101 1.79023 12.9001 1.82023 12.9201C1.85023 12.9401 1.95023 12.9401 2.10023 12.8801L7.01023 10.7601C7.19023 10.6801 7.38024 10.6401 7.56024 10.6401Z"
                  fill="#868686"
                />
              </svg>
              انتخاب پرواز
            </div>
            <p className="text-wrap">
              بر اساس اطلاعاتی که وارد کرده‌اید، نتایجی شامل لیست پروازها و
              قیمت‌ها نمایش داده می‌شود. می‌توانید پروازهای مختلف را بررسی کنید
              و براساس ترجیحات خود،یک پرواز را انتخاب کنید
            </p>
          </div>
          <div className="w h flex flex-col justify-start gap-[20px] items-start">
            <div className=" w font-semibold flex justify-start gap-3 text-[25px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                  fill="#868686"
                />
                <path
                  d="M10.58 15.5801C10.38 15.5801 10.19 15.5001 10.05 15.3601L7.22 12.5301C6.93 12.2401 6.93 11.7601 7.22 11.4701C7.51 11.1801 7.99 11.1801 8.28 11.4701L10.58 13.7701L15.72 8.6301C16.01 8.3401 16.49 8.3401 16.78 8.6301C17.07 8.9201 17.07 9.4001 16.78 9.6901L11.11 15.3601C10.97 15.5001 10.78 15.5801 10.58 15.5801Z"
                  fill="#868686"
                />
              </svg>
              انتخاب صندلی
            </div>
            <p className="text-wrap">
              پس از انتخاب پرواز،شما باید صندلی یا صندلی های مورد نظرخود
              راانتخاب کنید .
            </p>
          </div>
          <div className="w h flex flex-col justify-start gap-[20px] items-start">
            <div className=" w font-semibold flex justify-start gap-3 text-[25px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
                  fill="#868686"
                />
                <path
                  d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
                  fill="#868686"
                />
                <path
                  d="M15 13.75H7C6.59 13.75 6.25 13.41 6.25 13C6.25 12.59 6.59 12.25 7 12.25H15C15.41 12.25 15.75 12.59 15.75 13C15.75 13.41 15.41 13.75 15 13.75Z"
                  fill="#868686"
                />
                <path
                  d="M12 17.75H7C6.59 17.75 6.25 17.41 6.25 17C6.25 16.59 6.59 16.25 7 16.25H12C12.41 16.25 12.75 16.59 12.75 17C12.75 17.41 12.41 17.75 12 17.75Z"
                  fill="#868686"
                />
                <path
                  d="M15 22.75H9C3.38 22.75 2.25 20.1 2.25 15.82V9.65C2.25 4.91 3.85 2.98 7.96 2.75H16C16.01 2.75 16.03 2.75 16.04 2.75C20.15 2.98 21.75 4.91 21.75 9.65V15.82C21.75 20.1 20.62 22.75 15 22.75ZM8 4.25C5.2 4.41 3.75 5.29 3.75 9.65V15.82C3.75 19.65 4.48 21.25 9 21.25H15C19.52 21.25 20.25 19.65 20.25 15.82V9.65C20.25 5.3 18.81 4.41 15.98 4.25H8Z"
                  fill="#868686"
                />
              </svg>
              اطلاعات مسافران
            </div>
            <p className="text-wrap">
              دراین مرحله باید اطلاعات مسافران را وارد کنید.این اطلاعات شامل نام
              ونام خانوادگی ،جنسیت ،تاریخ تولد واطلاعات تماس می باشد.
            </p>
          </div>
          <div className="w h flex flex-col justify-start gap-[20px] items-start">
            <div className=" w font-semibold flex justify-start gap-3 text-[25px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3.93 16.6301C3.74 16.6301 3.55 16.5601 3.4 16.4101C3.11 16.1201 3.11 15.6401 3.4 15.3501L15.35 3.40012C15.64 3.11012 16.12 3.11012 16.41 3.40012C16.7 3.69012 16.7 4.17012 16.41 4.46012L4.46 16.4201C4.32 16.5601 4.12 16.6301 3.93 16.6301Z"
                  fill="#868686"
                />
                <path
                  d="M11.1 19.03C10.91 19.03 10.72 18.96 10.57 18.81C10.28 18.52 10.28 18.04 10.57 17.75L11.77 16.55C12.06 16.26 12.54 16.26 12.83 16.55C13.12 16.84 13.12 17.32 12.83 17.61L11.63 18.81C11.49 18.95 11.3 19.03 11.1 19.03Z"
                  fill="#868686"
                />
                <path
                  d="M13.79 16.3399C13.6 16.3399 13.41 16.2699 13.26 16.1199C12.97 15.8299 12.97 15.3499 13.26 15.0599L15.65 12.6699C15.94 12.3799 16.42 12.3799 16.71 12.6699C17 12.9599 17 13.4399 16.71 13.7299L14.32 16.1199C14.18 16.2599 13.98 16.3399 13.79 16.3399Z"
                  fill="#868686"
                />
                <path
                  d="M11.1 22.7499C10.12 22.7499 9.13998 22.1499 7.94998 20.9599L3.03998 16.0499C0.649975 13.6599 0.659975 12.1199 3.06998 9.70991L9.70998 3.06991C12.12 0.659914 13.66 0.649914 16.05 3.03991L20.96 7.94991C23.35 10.3399 23.34 11.8799 20.93 14.2899L14.29 20.9299C13.08 22.1399 12.09 22.7499 11.1 22.7499ZM12.9 2.74991C12.38 2.74991 11.72 3.17991 10.77 4.12991L4.12998 10.7699C3.17998 11.7199 2.74998 12.3799 2.74998 12.8899C2.74998 13.4099 3.14998 14.0399 4.09998 14.9899L9.00998 19.8999C9.95998 20.8499 10.58 21.2499 11.1 21.2499C11.1 21.2499 11.1 21.2499 11.11 21.2499C11.63 21.2499 12.28 20.8199 13.23 19.8699L19.87 13.2299C20.82 12.2799 21.25 11.6199 21.25 11.1099C21.25 10.5899 20.85 9.95991 19.9 9.00991L14.99 4.09991C14.05 3.14991 13.42 2.74991 12.9 2.74991Z"
                  fill="#868686"
                />
                <path
                  d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z"
                  fill="#868686"
                />
              </svg>
              تایید وپرداخت
            </div>
            <p className="text-wrap">
              دراین مرحله باید هزینه بلیط را پرداخت کنید. شما میتوانیدبا کارت
              بانکی،که رمز پویا دارد وارد درگاه پرداخت شده وپس از پرداخت
              موفق،بلیط شما تایید می شود ویک بلیط الکترونیکی به شما ارائه می
              شود.
            </p>
          </div>
          <div className="w h flex flex-col justify-start gap-[20px] items-start">
            <div className=" w font-semibold flex justify-start gap-3 text-[25px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.69 22.75H7.31C3.14 22.75 1.87 21.48 1.87 17.31V16.85C1.87 16.44 2.21 16.1 2.61999 16.1C3.49999 16.1 4.22 15.38 4.22 14.5C4.22 13.62 3.49999 12.9 2.61999 12.9C2.21 12.9 1.87 12.56 1.87 12.15V11.69C1.87 7.52 3.14 6.25 7.31 6.25H16.69C20.86 6.25 22.13 7.52 22.13 11.69V12.63C22.13 13.04 21.79 13.38 21.38 13.38C20.5 13.38 19.78 14.1 19.78 14.98C19.78 15.86 20.5 16.57 21.38 16.57C21.79 16.57 22.13 16.91 22.13 17.32C22.12 21.48 20.85 22.75 16.69 22.75ZM3.38 17.51C3.4 20.69 4.03 21.25 7.32 21.25H16.7C19.82 21.25 20.54 20.74 20.63 17.97C19.29 17.63 18.29 16.42 18.29 14.97C18.29 13.52 19.29 12.3 20.64 11.96V11.68C20.64 8.33 20.05 7.74 16.7 7.74H7.31C4.03 7.74 3.39999 8.31 3.36999 11.48C4.72 11.82 5.72 13.04 5.72 14.49C5.72 15.94 4.72 17.17 3.38 17.51Z"
                  fill="#868686"
                />
                <path
                  d="M10 10.25C9.59 10.25 9.25 9.91 9.25 9.5V7C9.25 6.59 9.59 6.25 10 6.25C10.41 6.25 10.75 6.59 10.75 7V9.5C10.75 9.91 10.41 10.25 10 10.25Z"
                  fill="#868686"
                />
                <path
                  d="M10 16.9201C9.59 16.9201 9.25 16.5801 9.25 16.1701V12.8401C9.25 12.4301 9.59 12.0901 10 12.0901C10.41 12.0901 10.75 12.4301 10.75 12.8401V16.1701C10.75 16.5801 10.41 16.9201 10 16.9201Z"
                  fill="#868686"
                />
                <path
                  d="M10 22.75C9.59 22.75 9.25 22.41 9.25 22V19.5C9.25 19.09 9.59 18.75 10 18.75C10.41 18.75 10.75 19.09 10.75 19.5V22C10.75 22.41 10.41 22.75 10 22.75Z"
                  fill="#868686"
                />
                <path
                  d="M16.33 7.74989H7.23999C6.93999 7.74989 6.65999 7.56989 6.54999 7.28989C6.43999 7.00989 6.49999 6.67989 6.70999 6.46989L9.63999 3.53989C12.34 0.839893 13.99 0.839893 16.68 3.53989L17.28 4.13989C17.42 4.27989 17.5 4.46989 17.5 4.66989C17.5 4.86989 17.42 5.05989 17.28 5.19989C16.88 5.59989 16.77 6.18989 17 6.69989C17.11 6.92989 17.09 7.19989 16.95 7.41989C16.82 7.61989 16.58 7.74989 16.33 7.74989ZM9.04999 6.24989H15.38C15.36 5.71989 15.49 5.18989 15.76 4.72989L15.63 4.59989C13.54 2.50989 12.8 2.50989 10.71 4.59989L9.04999 6.24989Z"
                  fill="#868686"
                />
              </svg>
              دریافت بلیط
            </div>
            <p className="text-wrap">
              پس از تایید خرید،بلیط را از وب سایت زرروشده دریافت کنید ویا آن را
              چاپ کنید.
            </p>
          </div>
        </div>
      </div>
      <Question backgroundImage="/public/image/tour-background-copy.png" />
      <Footer />
    </motion.div>
  );
};

export default Flight;
