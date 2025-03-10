import { Link } from "react-router-dom";

const MenuDesk = ({bgColor}) => {
  return (
    <>
      <div className="w  justify-center items-center mt-[120px]  mo:hidden de:flex  ">
        <div
          className={`w-[85%] h-[60px] f gap-[2%]  ${bgColor}  rounded-t-[15px] border-[1px] pl-[20px] border-white backdrop-blur-3xl backdrop-brightness-110`}
        >
          <Link
            className="w-[150px] h-[100%] f  gap-[20px] cursor-pointer  "
            to="/flight"
          >
            <span className="text-[25px]  pb-[7px] text-white ">پرواز</span>
          </Link>
          <Link
            to="/tour"
            className="w-[150px] h-[100%] f  gap-[20px] cursor-pointer  "
          >
            <span className="text-[25px]  pb-[7px] text-white ">تور</span>
          </Link>
          <Link
            to="/visa"
            className="w-[150px] h-[100%] f  gap-[20px] cursor-pointer  "
          >
            <span className="text-[25px]  pb-[7px] text-white ">ویزا</span>
          </Link>
          <Link
            to="/insurance"
            className="w-[150px] h-[100%] f  gap-[20px] cursor-pointer  "
          >
            <span className="text-[25px]  pb-[7px] text-white ">بیمه</span>
          </Link>
          <Link
            to="/certificate"
            className="w-[150px] h-[100%] f  gap-[20px] cursor-pointer  "
          >
            <span className="text-[25px]  pb-[7px] text-white ">گواهینامه</span>
          </Link>
          <img
            src="./public/image/elima-charecter.png"
            className="fixed top-[-134px] left-[2%] w-[132px] h-[176px]"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default MenuDesk;
