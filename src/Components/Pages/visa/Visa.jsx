import TopLogo from "../Header/TopLogo";
import MenuDesk from "../Header/MenuDesk";
import React, { useState } from "react";
import Footer from "../footer/Footer";
import Question from "../question/question";
import VisaSwitcher from "./VisaSwitcher";
import { motion } from "framer-motion";
import SelectWithOptions from "../flight/SelectWithOptions";
import { Drawer } from "@material-tailwind/react";
import MiniMenu from "../Header/MiniMenu";
const Visa = () => {
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

  const options1 = [
    { label: "کانادا", value: "کانادا" },
    { label: "یونان", value: "یونان" },
    { label: "آلمان", value: "آلمان" },
    { label: "هلند", value: "هلند" },
    { label: "اسپانیا", value: "اسپانیا" },
    { label: "سوئد", value: "سوئد" },
  ];
  const options2 = [
    { label: "یکبار", value: "یکبار" },
    { label: "چندبار", value: "چندبار" },
    { label: "گروهی", value: "گروهی" },
  ];
  const options3 = [
    { label: "توریستی", value: "توریستی" },
    { label: "تحصیلی", value: "تحصیلی" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w h-[1069px]  top-0 bg-cover de:bg-[url('/public/image/visa-back.jpg')] mo:bg-[url('/public/image/tour-elima-mobile-background.png')]   bg-no-repeat bg-center ">
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
              <div className="w-[20%]  flex justify-center items-center text-white  h-[40px] rounded-xl   backdrop-blur-3xl  backdrop-brightness-150">
                <SelectWithOptions
                  label="کشور"
                  name="way1"
                  options={options1}
                  selectedValue={selectedWay1} // Bind state
                  onSelect={setSelectedWay1} // Handle selection
                />
              </div>

              <div className="w-[20%] h-[40px] rounded-xl relative text-white backdrop-blur-3xl  backdrop-brightness-150 ">
                <SelectWithOptions
                  label="نوع ورود"
                  name="way2"
                  options={options2}
                  selectedValue={selectedWay2} // Bind state
                  onSelect={setSelectedWay2} // Handle selection
                />
              </div>
              <div className="w-[20%] h-[40px] rounded-xl relative text-white backdrop-blur-3xl  backdrop-brightness-150 ">
                <SelectWithOptions
                  label="نوع ویزا"
                  name="way3"
                  options={options3}
                  selectedValue={selectedWay3} // Bind state
                  onSelect={setSelectedWay3} // Handle selection
                />
              </div>
            </div>
            <div className="w-full h-full px-[50px] flex justify-end items-center ">
              <div className="border-[1px] border-white text-[#414A53] text-[13px] backdrop-brightness-200 flex  px-[7px] justify-between items-center hover:border-orange-500 transition-all duration-500  border-solid rounded-full backdrop-blur-3xl  w-[80px] cursor-pointer h-[30px] group shadow-md hover:shadow-lg shadow-black/40 hover:shadow-black/40">
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
            <div className="w flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-150 cursor-pointer">
              <input
                type="text"
                name=""
                autocomplete="off"
                value={selectedWay1} // Bind to same state
                onClick={() => openDrawerTop("way1")} // Pass identifier
                readOnly
                placeholder="کشور"
                className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
              />
            </div>
            <div className="w gap-[20px] flex justify-between items-center  ">
              <div className="w-full flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-150 cursor-pointer">
                <input
                  type="text"
                  name=""
                  autocomplete="off"
                  value={selectedWay2} // Bind to same state
                  onClick={() => openDrawerTop("way2")} // Pass identifier
                  readOnly
                  placeholder="نوع ورود"
                  className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                />
              </div>
              <div className="w-full flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-90 cursor-pointer">
                <input
                  type="text"
                  name=""
                  autocomplete="off"
                  value={selectedWay3} // Bind to same state
                  onClick={() => openDrawerTop("way3")} // Pass identifier
                  readOnly
                  placeholder="نوع ویزا"
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
                label="کشور"
                name="way1"
                options={options1}
                selectedValue={selectedWay1}
                onSelect={setSelectedWay1}
              />
            )}

            {activeInput === "way2" && (
              <SelectWithOptions
                label="نوع ورود"
                name="way2"
                options={options2}
                selectedValue={selectedWay2}
                onSelect={setSelectedWay2}
              />
            )}
            {activeInput === "way3" && (
              <SelectWithOptions
                label="نوع ویزا"
                name="way3"
                options={options3}
                selectedValue={selectedWay3}
                onSelect={setSelectedWay3}
              />
            )}
          </Drawer>
        </div>
          <MiniMenu/>
      </div>
      <VisaSwitcher />
      <div className="w h-auto bg-bottom mt-[100px]  flex justify-start flex-col items-center bg-no-repeat bg-[url('/public/image/tour-background.png')]  bg-cover relative">
        <div className="w h-[15%] f relative ">
          <div className="max-[2000px]:text-[45px] relative max-[800px]:text-[35px] max-[600px]:text-[25px] font-bold ">
            خدمات ویزای آنلاین ما !
            <img
              src="./public/image/visa-elima-pic-1.png"
              className="absolute w-[200px] max-[800px]:w-[120px] max-[600px]:top-[-50px] right-[-160px] max-[800px]:right-[-80px] max-[800px]:top-0 top-[-40px] "
              alt=""
            />
            <img
              src="./public/image/visa-pic-1.png"
              className="absolute w-[100px] max-[600px]:hidden max-[600px]:top-[-60px] max-[800px]:w-[65px] left-[-130px] max-[800px]:left-[-70px] top-[-40px] max-[800px]:top-[-10px] "
              alt=""
            />
          </div>
        </div>
        <div className="w h-[30%] gap-[20px] flex items-center flex-col justify-around ">
          <div className=" max-[2000px]:w-[550px] max-[800px]:w-[300px] relative text-wrap max-[2000px]:text-[20px] max-[800px]:text-[15px] max-[600px]:text-[10px] text-center">
            با الیماگشت، سفری به دنیایی از تجربه و هیجان خواهید داشت.از تورهای
            داخلی گرفته تا سفرهای خارجی، همراهی صفر تا صد اخذ ویزا تا بیمه
            مسافرتی با الیماگشت برای شما یک تجربه آسان و بی‌نظیر رقم می خورد
            <img
              src="./public/image/visa-elima-pic-2.png"
              className="absolute w-[140px] max-[600px]:hidden max-[800px]:w-[100px] right-[-180px] max-[800px]:right-[-130px] bottom-0"
              alt=""
            />
            <img
              src="./public/image/visa-pic-2.png"
              className="absolute w-[160px] max-[600px]:bottom-[-100px] max-[600px]:w-[100px] max-[600px]:left-[-30px] max-[800px]:w-[130px] bottom-[-20px]  left-[-180px] max-[800px]:left-[-130px]"
              alt=""
            />
          </div>
          <a
            href=""
            className="w-[120px] max-[600px]:w-[75px] h-[30px] max-[600px]:h-[23px] rounded-[25px] pt-[2.5px] text-center border-[1px] border-black font-light text-[15px] max-[600px]:text-[10px] hover:bg-[#024B74]/80   hover:text-white  transition-all duration-200"
          >
            بیشتر بخوانید...{" "}
          </a>
        </div>

        <div className="w min-[600px]:h-[500px] h-[300px]  f flex-col gap-[30px] py-[20px]">
          <div className="w  max-[2000px]:text-[44px] max-[1000px]:text-[30px] font-bold  max-[600px]:text-[25px] max-[500px]:text-[19px] min-[800px]:pr-[80px] max-[800px]:pr-[30px]">
            نیاز به مشاوره دارید؟!
          </div>
          <div className="w-[90%] max-[2000px]:h-[85%]   max-[1300px]:h-[90%]  max-[1000px]:h-[70%] max-[800px]:h-[50%] max-[600px]:h-[80%] flex-wrap border-[1px] max-[1350px]:hidden flex flex-row justify-evenly  items-center overflow-hidden border-black rounded-t-[70px]">
            <div className="flex mx-[10px] w-[400px] justify-between items-center  h flex-col p-[15px]">
              <div className="w flex justify-start items-center gap-[35px] pr-[10px] ">
                <img
                  src="./public/image/headphone.png"
                  className="w-[100px] h-[100px] "
                  alt=""
                />
                <h1 className="text-[30px] font-bold text-black">
                  مشاوره آنلاین ویزا
                </h1>
              </div>
              <div className="w-[400px] text-right text-wrap">
                کاهش حجم مراجعات حضوری و تماس‌های صورت گرفته با کارشناسان
                ویزالند، به منظور ارائه مشاوره دقیق‌تر به مشتریانی که قصد
                جدی‌تری برای اخذ ویزای کانادا داشته باشند.کاهش حجم مراجعات حضوری
                و تماس‌های صورت گرفته با کارشناسان ویزالند، به منظور ارائه
                مشاوره دقیق‌تر به مشتریانی که قصد جدی‌تری برای اخذ ویزای کانادا
                داشته باشند.
              </div>
              <div className=" cursor-pointer flex w justify-end items-center">
                <span className="text-[20px] font-medium">
                  مشاهده تمامی ویزا ها
                </span>
                <img
                  src="./public/image/arrow-tour.png"
                  className="w-[25px]"
                  alt=""
                />
              </div>
            </div>
            <img src="./public/image/backup.jpg" className="h-full" alt="" />
            <div className="flex mx-[10px] w-[400px] justify-between items-center  h flex-col p-[15px]">
              <div className="w flex justify-start items-center gap-[35px] pr-[10px] ">
                <img
                  src="./public/image/headphone-2.png"
                  className="w-[80px] h-[80px] "
                  alt=""
                />
                <h1 className="text-[30px] font-bold text-black">
                  تماس تلفنی با ما
                </h1>
              </div>
              <div className="w-[400px] text-right text-wrap">
                کاهش حجم مراجعات حضوری و تماس‌های صورت گرفته با کارشناسان
                ویزالند، به منظور ارائه مشاوره دقیق‌تر به مشتریانی که قصد
                جدی‌تری برای اخذ ویزای کانادا داشته باشند.کاهش حجم مراجعات حضوری
                و تماس‌های صورت گرفته با کارشناسان ویزالند، به منظور ارائه
                مشاوره دقیق‌تر به مشتریانی که قصد جدی‌تری برای اخذ ویزای کانادا
                داشته باشند.
              </div>
              <div className=" cursor-pointer flex w justify-end items-center">
                <span className="text-[20px] font-medium">تماس بگیرید</span>
                <img
                  src="./public/image/arrow-tour.png"
                  className="w-[25px]"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-[90%] min-[1350px]:hidden max-[2000px]:h-[100%] max-[1300px]:h-[90%]  max-[1000px]:h-[70%] max-[800px]:h-[50%] max-[600px]:h-[50%]  border-[1px] flex flex-row justify-start  items-center overflow-hidden border-black rounded-[15px]">
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
                    تماس بگیرید{" "}
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

export default Visa;
