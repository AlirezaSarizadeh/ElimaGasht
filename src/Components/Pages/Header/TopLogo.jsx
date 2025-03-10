import { Link } from "react-router-dom";
import { Drawer } from "@material-tailwind/react";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { LogOut, LogOutIcon, X } from "lucide-react";
import axios from "axios";
import { useAuth } from "../../../context/AuthContext";
import { BiLogOut } from "react-icons/bi";

const TopLogo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [info, setInfo] = useState(null);

  const { auth, logout } = useAuth(); // Get auth state and logout function from context

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.post("https://elimagasht.net/api/menu_items", { id: 1 });
        const filteredMenu = response.data.filter((item) => item.status === 1);
        setMenuItems(filteredMenu);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    const fetchInfo = async () => {
      try {
        const response = await axios.post("https://elimagasht.net/api/info");
        setInfo(response.data);
      } catch (error) {
        console.error("Error fetching info:", error);
      }
    };

    fetchMenu();
    fetchInfo();
  }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchText(""); // Reset text when closing
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => {
    setOpenRight(true);
    document.body.style.overflow = "hidden";
  };
  const closeDrawerRight = () => {
    document.body.style.overflow = "auto";
    setOpenRight(false);
  };
  const theme = {
    drawer: {
      styles: {
        base: {
          overlay: {
            position: "absolute",
            inset: "inset-0",
            width: "w-full",
            height: "h-full",
            pointerEvents: "pointer-events-auto",
            zIndex: "z-[9995]",
            backgroundColor: "bg-black",
            backgroundOpacity: "bg-opacity-60",
            backdropBlur: "backdrop-blur-sm",
          },
        },
      },
    },
  };
  return (
    <>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4 z-[100000000000] bg-[#183B5B]  !w-[100vw] h-screen"
      >
        {/* Top Section */}
        <div className="flex justify-between items-center h-[10%]">
          <Link to="/">
            {info && <img src={info.logo} className="w-[60px]" alt="Logo" />}
          </Link>
          <button onClick={closeDrawerRight} className="text-gray-400 text-sm p-1 rounded-[5px]">
            ✖
          </button>
        </div>
        {/* Menu Links */}
        <div className="py-4 overflow-y-auto h-[60%]">
          <ul className="space-y-2 font-medium">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link to={item.link} className="flex items-center p-2 text-white hover:bg-gray-100 group">
                  <span className="ms-3 group-hover:text-[#183B5B] group-hover:font-bold">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Info Section */}
        {info && (
          <div className="w h-[30%] flex flex-col items-start">
            <div className="flex items-center">
              <img src="/image/location-icon.png" className="w-[25px]" alt="Location" />
              <span className="text-white text-[15px]">آدرس :</span>
            </div>
            <span className="text-white text-[16px] leading-[30px] text-wrap">{info.address}</span>

            <div className="flex items-center mt-2">
              <img src="/image/phone-icon.png" className="w-[25px] h-[25px]" alt="Phone" />
              <span className="text-white text-[16px] leading-[30px]">
                سوالی دارید؟! <a href={info.phone}>{info.phone.replace("tel:", "")}</a>
              </span>
            </div>
          </div>
        )}

        {/* Social Media */}
        {info && (
          <div className="flex space-x-4 absolute bottom-10 left-0">
            {info.social_media
              .filter((social) => social.status === "1")
              .map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="">
                  <img src={social.image} className="w-[20px] cursor-pointer" alt={social.title} />
                </a>
              ))}
          </div>
        )}
      </Drawer>
      <div className="w-full  h-[80px]  flex justify-between  items-center px-[25px] ">
        <div className="w-[33%] h flex justify-start items-center de:gap-[20px]">
          <button type="button" onClick={openDrawerRight}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="mo:w-[25px] hover:animate-jump hover:animate-ease-linear mo:h-[25px] de:w-[40px] de:h-[40px] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g clip-path="url(#clip0_429_11066)">
                  <path
                    d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
                    stroke="#F0421A"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_429_11066">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.000915527)"
                    ></rect>
                  </clipPath>
                </defs>
              </g>
            </svg>
          </button>
          <div
            className="relative flex items-center ml-[100px] justify-start "
            ref={inputRef}
          >
            {/* Search Input with Icon Inside */}
            <motion.div
              animate={{ width: isOpen ? "30vw" : "60px", opacity: 1 }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className={`flex items-center  rounded-lg overflow-hidden  ${isOpen
                ? "border border-[#F0421A]   backdrop-blur-xl  backdrop-brightness-110"
                : ""
                }`}
            >
              {/* Search Button (Stays in place) */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#F0421A"
                  className="stroke-[#F0421A] !stroke-[1px] mr-[20px] de:w-[30px] mo:w-[20px] "
                >
                  <path d="M20 5.75H14C13.59 5.75 13.25 5.41 13.25 5C13.25 4.59 13.59 4.25 14 4.25H20C20.41 4.25 20.75 4.59 20.75 5C20.75 5.41 20.41 5.75 20 5.75Z" />
                  <path d="M17 8.75H14C13.59 8.75 13.25 8.41 13.25 8C13.25 7.59 13.59 7.25 14 7.25H17C17.41 7.25 17.75 7.59 17.75 8C17.75 8.41 17.41 8.75 17 8.75Z" />
                  <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C11.91 1.25 12.25 1.59 12.25 2C12.25 2.41 11.91 2.75 11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 11.09 20.59 10.75 21 10.75C21.41 10.75 21.75 11.09 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75Z" />
                  <path d="M21.9999 22.75C21.8099 22.75 21.6199 22.68 21.4699 22.53L19.4699 20.53C19.1799 20.24 19.1799 19.76 19.4699 19.47C19.7599 19.18 20.2399 19.18 20.5299 19.47L22.5299 21.47C22.8199 21.76 22.8199 22.24 22.5299 22.53C22.3799 22.68 22.1899 22.75 21.9999 22.75Z" />
                </svg>
              </button>

              {/* Search Input */}
              <input
                type="text"
                placeholder="جستجو کنید..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className={`p-2 flex-grow focus:outline-none caret-[#F0421A]/60 placeholder:pr-[10px] text-right text-white/80 placeholder:text-[#f0411aa8] pr-[20px] transition-opacity bg-transparent ${isOpen ? "opacity-100" : "opacity-0"
                  } `}
              />

              {/* Close Button (Only visible when open) */}
              {isOpen && (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setSearchText(""); // Reset text when closing
                  }}
                  className="p-2 text-[#F0421A]/60 hover:text-[#F0421A] transition-all duration-200"
                >
                  <X size={20} />
                </button>
              )}
            </motion.div>
          </div>
        </div>
        <div className="w-[33%]  h flex justify-center items-start gap-[20px]">
          <Link to="/">
            <img
              src="./public/image/elima-logo.png "
              className="mo:w-[100px]   de:w-[150px]"
              alt=""
            />
          </Link>
        </div>
        <div className="w-[33%] h flex justify-end items-center">
          {
            auth.token ? (
              <div className="flex items-center">
                <span className="text-white mr-2">
                  <span className="me-1" style={{ color:'#ffa182'}} >خوش آمدید</span>
                  <b className="me-2" style={{ color:'#ffa182'}} >
                    {auth.user?.name}
                  </b>
                </span> {/* Display user name */}
                <button
                  onClick={() => {
                    logout(); // Call logout when the button is clicked
                  }}
                  className="text-white border px-2 py-2 rounded-lg bg-red-500 hover:bg-red-600"
                >
                  <BiLogOut />
                </button>
              </div>
            ) : (
              <Link to="/login">
                <img
                  src="./public/image/user-home.png"
                  className="mo:w-[25px] mo:h-[25px] de:w-[40px] de:h-[40px]"
                  alt="Login"
                />
              </Link>
            )
          }
        </div>
      </div>
    </>
  );
};

export default TopLogo;
