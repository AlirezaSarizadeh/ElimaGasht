import { motion } from "framer-motion";
import Question from "../question/question";
import Footer from "../footer/Footer";
import TopLogo from "../Header/TopLogo";
import MenuDesk from "../Header/MenuDesk";
import SelectWithOptions from "../flight/SelectWithOptions";
import { useState } from "react";
import { Drawer } from "@material-tailwind/react";
const Certificate = () => {
  const [activeInput, setActiveInput] = useState(null); // Track which input was clicked
  const [selectedWay1, setSelectedWay1] = useState(""); // State for selected value
  const [selectedWay2, setSelectedWay2] = useState(""); // State for selected value
  const [selectedWay3, setSelectedWay3] = useState(""); // State for selected value
  const [selectedWay4, setSelectedWay4] = useState(""); // State for selected value
  const [selectedWay5, setSelectedWay5] = useState(""); // State for selected value
  const options1 = [
    { label: "حضوری", value: "حضوری" },
    { label: "غیر حضوری", value: "غیر حضوری" },
  ];

  const options2 = [
    { label: "خودرو", value: "خودرو" },
    { label: "خودرو و موتور", value: "خودرو و موتور" },
  ];
  const options3 = [
    { label: "پایه یک", value: "پایه یک" },
    { label: "پایه دو", value: "پایه دو" },
    { label: "پایه سه", value: "پایه سه" },
  ];
  const options4 = [
    { label: "آلمان", value: "آلمان" },
    { label: "انگلیس", value: "انگلیس" },
  ];
  const options5 = [
    { label: "یکساله", value: "یکساله" },
    { label: "سه ساله", value: "سه ساله" },
  ];
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="  wraper flex  justify-start items-center flex-col  w h m-[0] p-[0]">
        <div className="w h-[1069px]  top-0 bg-cover bg-[url('/public/image/certi.png')]    bg-no-repeat bg-center ">
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
                      label="نحوه اخذ"
                      name="way1"
                      options={options1}
                      selectedValue={selectedWay1} // Bind state
                      onSelect={setSelectedWay1} // Handle selection
                    />

                    <SelectWithOptions
                      label="وسیله نقلیه"
                      name="way2"
                      options={options2}
                      selectedValue={selectedWay2} // Bind state
                      onSelect={setSelectedWay2} // Handle selection
                    />
                  </div>

                  <div className="w-[20%] h-[40px] gap-[20px] flex justify-center items-center ">
                    <SelectWithOptions
                      label="نوع پایه"
                      name="way3"
                      options={options3}
                      selectedValue={selectedWay3} // Bind state
                      onSelect={setSelectedWay3} // Handle selection
                    />
                    <SelectWithOptions
                      label="کشور"
                      name="way4"
                      options={options4}
                      selectedValue={selectedWay4} // Bind state
                      onSelect={setSelectedWay4} // Handle selection
                    />
                  </div>
                  <div className="w-[20%] h-[40px] text-white rounded-xl backdrop-blur-3xl">
                    <SelectWithOptions
                      label="اعتبار"
                      name="way5"
                      options={options5}
                      selectedValue={selectedWay5} // Bind state
                      onSelect={setSelectedWay5} // Handle selection
                    />
                  </div>
                </div>
                <div className="w-full h-full px-[50px] flex justify-end items-center ">
                  <div className="border-[1px] border-white text-[#414A53] text-[13px] flex  px-[7px] justify-between items-center hover:border-orange-500 transition-all duration-500  border-solid rounded-full backdrop-brightness-150 backdrop-blur-3xl  w-[80px] cursor-pointer h-[30px] group shadow-md hover:shadow-lg shadow-black/40 hover:shadow-black/40">
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
                    گواهینامه
                  </div>
                </div>

                <div className="w gap-[20px] flex justify-between items-center  ">
                  <div className="w flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-90 cursor-pointer">
                    <input
                      type="text"
                      name=""
                      autocomplete="off"
                      value={selectedWay1} // Bind to same state
                      onClick={() => openDrawerTop("way1")}
                      readOnly
                      placeholder="نحوه اخذ"
                      className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                    />
                  </div>
                  <div className="w-full flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-150 cursor-pointer">
                    <input
                      type="text"
                      name=""
                      autocomplete="off"
                      value={selectedWay2} // Bind to same state
                      onClick={() => openDrawerTop("way2")}
                      readOnly
                      placeholder="نوع گواهینامه"
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
                      onClick={() => openDrawerTop("way3")}
                      readOnly
                      placeholder="نوع پایه"
                      className="t border-none text-center w-full h-full placeholder:text-zinc-200/80 rounded-xl !ring-0 bg-transparent focus:border-none"
                    />
                  </div>
                  <div className="w-full flex justify-center items-center   text-white  h-[40px] border-[1px] border-solid rounded-xl   backdrop-blur-3xl  backdrop-brightness-150 cursor-pointer">
                    <input
                      type="text"
                      name=""
                      autocomplete="off"
                      value={selectedWay4} // Bind to same state
                      onClick={() => openDrawerTop("way4")}
                      readOnly
                      placeholder="کشور"
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
                      value={selectedWay5} // Bind to same state
                      onClick={() => openDrawerTop("way5")}
                      readOnly
                      placeholder="اعتبار"
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
                    label="نحوه اخذ"
                    name="way1"
                    options={options1}
                    selectedValue={selectedWay1} // Bind state
                    onSelect={setSelectedWay1} // Handle selection
                  />
                )}

                {activeInput === "way2" && (
                  <SelectWithOptions
                    label="وسیله نقلیه"
                    name="way2"
                    options={options2}
                    selectedValue={selectedWay2} // Bind state
                    onSelect={setSelectedWay2} // Handle selection
                  />
                )}
                {activeInput === "way3" && (
                  <SelectWithOptions
                    label="نوع پایه"
                    name="way3"
                    options={options3}
                    selectedValue={selectedWay3} // Bind state
                    onSelect={setSelectedWay3} // Handle selection
                  />
                )}
                {activeInput === "way4" && (
                  <SelectWithOptions
                    label="کشور"
                    name="way4"
                    options={options4}
                    selectedValue={selectedWay4} // Bind state
                    onSelect={setSelectedWay4} // Handle selection
                  />
                )}
                {activeInput === "way5" && (
                  <SelectWithOptions
                    label="اعتبار"
                    name="way5"
                    options={options5}
                    selectedValue={selectedWay5} // Bind state
                    onSelect={setSelectedWay5} // Handle selection
                  />
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
      <div class="w min-h-[750px] h-auto overflow-hidden pt-[40px] min-[800px]:pr-[70px] max-[800px]:pr-[20px] min-[1000px]:gap-[75px] min-[800px]:pl-[70px] max-[800px]:pl-[20px]  flex justify-start ro flex-col items-center bg-no-repeat  bg-cover bg-[url('/public/image/visa-back-canada.png')]  ">
        <div class=" w h-[50px]  text-black font-bold max-[2000px]:text-[44px] max-[1000px]:text-[30px] max-[600px]:text-[25px] max-[500px]:text-[19px] ">
          صدور گواهینامه بین المللی
        </div>
        <div class="w h-[60%] flex-wrap flex gap-[20px] justify-around items-center  ">
          <div class="w-[370px] h-[350px] hover:scale-[1.02] group hover:backdrop-blur-2xl hover:backdrop-brightness-105 flex justify-center t cursor-default items-center flex-col rounded-xl border-[1px] pt-[30px] border-solid border-white/70 shadow-lg hover:shadow-black/40">
            <img src="./public/image/Certificate.png" alt="" />
            <div class="w-full h-[20%] flex flex-col justify-end gap-[10px] font-bold text-[25px] items-center  ">
              گواهینامه بین المللی چیست؟
            </div>
            <div class="w-full h-[50%] flex px-[20px] text-[20px]  text-center text-wrap flex-col justify-around items-center ">
              یکی از مهم ترین شرایط استفاده از وسایل نقلیه موتوری و رانندگی با
              آن ها، داشتن مجوزی است که تحت عنوان گواهینامه
            </div>
          </div>
          <div class="w-[370px] h-[350px] hover:scale-[1.02] group hover:backdrop-blur-2xl hover:backdrop-brightness-105 flex justify-center t cursor-default items-center flex-col rounded-xl border-[1px] pt-[30px] border-solid border-white/70 shadow-lg hover:shadow-black/40">
            <img src="./public/image/Certificate.png" alt="" />
            <div class="w-full h-[20%] flex flex-col justify-end gap-[10px] font-bold text-[25px] items-center  ">
              گواهینامه بین المللی چیست؟
            </div>
            <div class="w-full h-[50%] flex px-[20px] text-[20px]  text-center text-wrap flex-col justify-around items-center ">
              یکی از مهم ترین شرایط استفاده از وسایل نقلیه موتوری و رانندگی با
              آن ها، داشتن مجوزی است که تحت عنوان گواهینامه
            </div>
          </div>
          <div class="w-[370px] h-[350px] hover:scale-[1.02] group hover:backdrop-blur-2xl hover:backdrop-brightness-105 flex justify-center t cursor-default items-center flex-col rounded-xl border-[1px] pt-[30px] border-solid border-white/70 shadow-lg hover:shadow-black/40">
            <img src="./public/image/Certificate.png" alt="" />
            <div class="w-full h-[20%] flex flex-col justify-end gap-[10px] font-bold text-[25px] items-center  ">
              گواهینامه بین المللی چیست؟
            </div>
            <div class="w-full h-[50%] flex px-[20px] text-[20px]  text-center text-wrap flex-col justify-around items-center ">
              یکی از مهم ترین شرایط استفاده از وسایل نقلیه موتوری و رانندگی با
              آن ها، داشتن مجوزی است که تحت عنوان گواهینامه
            </div>
          </div>
        </div>
        <div class="h w flex justify-start flex-row items-center">
          <span class="max-[2000px]:text-[30px] max-[1000px]:text-[25px] max-[500px]:text-[20px] font-medium">
            شما کدام نوع دریافت را انتخاب می کنید ؟!
          </span>
        </div>
      </div>
      <div class="w h-[750px] bg-bottom   flex justify-between flex-col items-center  bg-no-repeat  bg-cover relative bg-[url('/public/image/visa-back-canada-copy.png')]">
        <img
          src="./public/image/certi-elima.png"
          class="w-96 absolute bottom-0 left-[50px]"
          alt=""
        />
        <div class=" w h-[50px] pr-[70px] text-black font-bold max-[2000px]:text-[44px] max-[1000px]:text-[30px] max-[600px]:text-[25px] max-[500px]:text-[19px] ">
          مدارک و شرایط لازم دریافت گواهینامه بین المللی
        </div>
        <div class="flex w h-[90%] justify-start items-center">
          <div class="flex w-[80%] h-full justify-center items-center ">
            <div class="w-[70%] h-[350px] border-[1px] border-solid border-zinc-100  backdrop-blur-2xl backdrop-brightness-110 shadow-xl rounded-xl"></div>
          </div>
        </div>
      </div>
      <div class="w h-[750px] bg-bottom mt-[80px]  flex justify-between flex-col items-center  bg-no-repeat  bg-cover relative bg-[url('/public/image/visa-back-canada-copy.png')]">
        <div class=" w h-[50px] pr-[70px] text-black font-bold max-[2000px]:text-[44px] max-[1000px]:text-[30px] max-[600px]:text-[25px] max-[500px]:text-[19px] ">
          نحوه ثبت نام آنلاین
        </div>
        <div class="w h-[80%] flex justify-center items-center  ">
          <div class="flex flex-col justify-center items-center px-[50px] w-[40%] h ">
            <p class="text-right text-[25px] font-semibold text-wrap ">
              دریافت هر مجوز، در هر یک از زمینه های اقتصادی، فرهنگی و اجتماعی،
              مستلزم دارا بودن شرایط خاص تعیین شده، از سوی مرجع صادرکننده آن
              مجوز می باشد. ثبت نام و دریافت گواهینامه بین المللی رانندگی نیز
              همچون سایر مجوزها، نیازمند دارا بودن شرايط بين المللی كردن
              گواهينامه است که شرایط گرفتن گواهینامه بین المللی رانندگی​.......
            </p>
            <a
              href=""
              class="flex w items-center justify-end ml-[200px] text-[20px]"
            >
              ادامه آموزش
              <img src="./public/image/arrow-tour.png" class="w-7 h-7" alt="" />
            </a>
          </div>
          <div class="flex flex-col justify-center items-center w-[60%] h ">
            <div class="w-[70%] h-[70%] rounded-2xl f border-[1px] border-solid border-zinc-100 backdrop-blur-2xl bg-white/50 ">
              <img src="./public/image/video.png" class="w-[90px]" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Question backgroundImage="/public/image/visa-back-canada.png" />

      <Footer />
    </motion.div>
  );
};

export default Certificate;
