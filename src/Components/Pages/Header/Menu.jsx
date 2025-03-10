import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="w  justify-center items-center mt-[120px]  mo:hidden de:flex  ">
        <div
          className="w-[85%] h-[60px] f gap-[2%] relative  rounded-t-[15px] border-[1px] pl-[20px] border-white backdrop-blur-3xl backdrop-brightness-110"
          to="/flight"
        >
          <Link
            className="w-[150px] h-[100%] f  gap-[20px] cursor-pointer  "
            to="/flight"
          >
            <span className="text-[25px]  pb-[7px] text-white ">پرواز</span>
            <img
              src="./public/image/menu-arrow.png"
              className="w-[25px] h-[25px] rotate-90  "
              alt=""
            />
          </Link>
          <Link
            to="/tour"
            className="w-[150px] h-[100%] f  gap-[20px] cursor-pointer  "
          >
            <span className="text-[25px]  pb-[7px] text-white ">تور</span>
            <img
              src="./public/image/menu-arrow.png"
              className="w-[25px] h-[25px] rotate-90  "
              alt=""
            />
          </Link>
          <Link
            to="/visa"
            className="w-[150px] h-[100%] f  gap-[20px] cursor-pointer  "
          >
            <span className="text-[25px]  pb-[7px] text-white ">ویزا</span>
            <img
              src="./public/image/menu-arrow.png"
              className="w-[25px] h-[25px] rotate-90  "
              alt=""
            />
          </Link>
          <Link
            to="/insurance"
            className="w-[150px] h-[100%] f  gap-[20px] cursor-pointer  "
          >
            <span className="text-[25px]  pb-[7px] text-white ">بیمه</span>
            <img
              src="./public/image/menu-arrow.png"
              className="w-[25px] h-[25px] rotate-90  "
              alt=""
            />
          </Link>
          <Link
            to="/certificate"
            className="w-[150px] h-[100%] f  gap-[20px] cursor-pointer  "
          >
            <span className="text-[25px]  pb-[7px] text-white ">گواهینامه</span>
            <img
              src="./public/image/menu-arrow.png"
              className="w-[25px] h-[25px] rotate-90  "
              alt=""
            />
          </Link>
          <img
            src="./public/image/elima-charecter.png"
            className="absolute w-[132px] h-[176px] bottom-4 left-0"
            alt=""
          />
        </div>
      </div>

      <div className=" w-[70%] mt-[59px]  flex justify-center items-center gap-x-[10px] gap-y-[10px]   mx-auto h-[165px] de:hidden mo:flex flex-row flex-wrap ">
        <Link
          className="w-[48%] h-[50px]  f border-[1px] cursor-pointer border-white m-[0]  rounded-[10px] backdrop-blur-3xl backdrop-brightness-125  "
          to="/flight"
        >
          <span className="text-white  text-[15px] pb-[5px] ">پرواز</span>
        </Link>
        <Link
          to="/tour"
          className="w-[48%] h-[50px] relative f border-[1px] cursor-pointer border-white m-[0] rounded-[10px] backdrop-blur-3xl backdrop-brightness-125 "
        >
          <img
            src="./public/image/elima-charecter.png"
            className="h-[75px] absolute top-[-58px] left-4  "
            alt=""
          />
          <span className="text-white  text-[15px] pb-[5px] ">تور</span>
        </Link>
        <Link
          to="/visa"
          className="w-[48%] h-[50px]  f border-[1px] cursor-pointer border-white m-[0] rounded-[10px] backdrop-blur-3xl backdrop-brightness-125 "
        >
          <span className="text-white  text-[15px] pb-[5px] ">ویزا</span>
        </Link>
        <Link
          className="w-[48%] h-[50px]  f border-[1px] cursor-pointer border-white m-[0] rounded-[10px] backdrop-blur-3xl backdrop-brightness-125 "
          to="/insurance"
        >
          <span className="text-white  text-[15px] pb-[5px] ">بیمه</span>
        </Link>
        <div className="w-[48%] h-[50px]  f border-[1px] cursor-pointer border-white m-[0] rounded-[10px] backdrop-blur-3xl backdrop-brightness-150 ">
          <span className="text-white  text-[15px] pb-[5px] ">گواهینامه</span>
        </div>
        <div className="w-[48%] h-[50px]  f border-[1px] cursor-pointer border-white m-[0] rounded-[10px] backdrop-blur-3xl backdrop-brightness-150 ">
          <span className="text-white  text-[15px] pb-[5px] ">هتل</span>
        </div>
      </div>
    </>
  );
};

export default Menu;
