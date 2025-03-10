import { Link } from "react-router-dom";

const VisaSteps = ({ onSwitch }) => {
  return (
    <>
      {" "}
      <div className="w h-[750px] overflow-hidden pt-[40px] min-[800px]:pr-[70px] max-[800px]:pr-[20px] min-[1000px]:gap-[35px] min-[800px]:pl-[70px] max-[800px]:pl-[20px]  flex justify-start ro flex-col items-center bg-[url('/public/image/tour-background-Copy.png')]     bg-no-repeat  bg-cover ">
        <div className=" w h-[50px]  text-black font-bold max-[2000px]:text-[44px] max-[1000px]:text-[30px] max-[600px]:text-[25px] max-[500px]:text-[19px] ">
          تضمین بالاترین کیفیت در کمترین زمان ممکن{" "}
        </div>
        <div className=" w h-[100px] flex max-[2000px]:justify-center max-[600px]:justify-start max-[2000px]:flex-row  max-[600px]:flex-col-reverse text-black font-bold text-[44px] ">
          <div className="h w-auto flex justify-start flex-row items-center">
            <span className="max-[2000px]:text-[35px] max-[1000px]:text-[25px] max-[500px]:text-[20px] font-medium">
              مراحل اخذ ویزا :
            </span>
          </div>
          <div className="h w-full justify-end gap-[20px] items-center flex">
            <Link
              to="/visa-canada"
              className="flex flex-col gap-[5px]  relative cursor-pointer justify-center group items-center"
            >
              <div className="w-[120px] max-[1000px]:hidden absolute top-[-45px] h-[40px] opacity-0 text-[15px] flex group-hover:opacity-100 transition-all duration-300 shadow-lg text-zinc-700 rounded-full justify-center items-center  bg-white">
                ویزای کانادا
              </div>
              <div className="bg-white group-hover:shadow-xl  group-hover:shadow-black/30 overflow-hidden transition-all duration-300   w-[90px] h-[90px] max-[1200px]:w-[7vw] max-[1000px]:w-[9vw] max-[1000px]:h-[9vw] max-[1200px]:h-[7vw]    f border-[1px] border-solid border-zinc-200 rounded-full">
                <img
                  src="./public/image/canada.jpg"
                  className=" scale-[2] object-cover "
                  alt=""
                />
              </div>
            </Link>
            <div className="flex flex-col gap-[5px]  relative  justify-center group items-center">
              <div className="w-[120px] max-[1000px]:hidden absolute top-[-45px] h-[40px] opacity-0 text-[15px] flex group-hover:opacity-100 transition-all duration-300 shadow-lg text-zinc-700 rounded-full justify-center items-center  bg-white">
                ویزای انگلیس
              </div>
              <div className="bg-white group-hover:shadow-xl  group-hover:shadow-black/30 overflow-hidden transition-all duration-300   w-[90px] h-[90px] max-[1200px]:w-[7vw] max-[1000px]:w-[9vw] max-[1000px]:h-[9vw]  max-[1200px]:h-[7vw]   f border-[1px] border-solid border-zinc-200 rounded-full">
                <img
                  src="./public/image/england.jpg"
                  className=" scale-[2] object-cover "
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-[5px]  relative  justify-center group items-center">
              <div className="w-[120px] max-[1000px]:hidden absolute top-[-45px] h-[40px] opacity-0 text-[15px] flex group-hover:opacity-100 transition-all duration-300 shadow-lg text-zinc-700 rounded-full justify-center items-center  bg-white">
                ویزای امارات
              </div>
              <div className="bg-white group-hover:shadow-xl  group-hover:shadow-black/30 overflow-hidden transition-all duration-300   w-[90px] h-[90px] max-[1200px]:w-[7vw] max-[1000px]:w-[9vw] max-[1000px]:h-[9vw] max-[1200px]:h-[7vw]   f border-[1px] border-solid border-zinc-200 rounded-full">
                <img
                  src="./public/image/emirate.jpg"
                  className=" scale-[2] object-cover "
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-[5px]  relative  justify-center group items-center">
              <div className="w-[120px] max-[1000px]:hidden absolute top-[-45px] h-[40px] opacity-0 text-[15px] flex group-hover:opacity-100 transition-all duration-300 shadow-lg text-zinc-700 rounded-full justify-center items-center  bg-white">
                ویزای مالزی
              </div>
              <div className="bg-white group-hover:shadow-xl  group-hover:shadow-black/30 overflow-hidden transition-all duration-300   w-[90px] h-[90px] max-[1200px]:w-[7vw] max-[1000px]:w-[9vw] max-[1000px]:h-[9vw] max-[1200px]:h-[7vw]   f border-[1px] border-solid border-zinc-200 rounded-full">
                <img
                  src="./public/image/malaysia.jpg"
                  className=" scale-[2] object-cover "
                  alt=""
                />
              </div>
            </div>
            <div
              className=" cursor-pointer flex max-[2000px]:justify-start h-full max-[600px]:justify-start flex-row items-center"
            >
              <button
                onClick={onSwitch}
                className="max-[2000px]:text-[25px] max-[1000px]:text-[20px] max-[500px]:text-[15px] font-medium"
              >
                مشاهده تمامی ویزا ها
              </button>
              <img
                src="./public/image/arrow-tour.png"
                className="w-[25px]"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w flex flex-wrap flex-grow justify-between max-[610px]:justify-center gap-[30px] items-center ">
          <div className="w-[270px] flex flex-col gap-[15px] justify-center items-center ">
            <img
              src="./public/image/person-visa.png"
              className="h-[100px] w-[100px]"
              alt=""
            />
            <h1 className="text-[22px] font-bold text-center ">
              مشاوره تخصصی ویزا
            </h1>
            <p className="w-[270px] text-wrap text-center text-[18px]">
              سه خدمت مشاوره آنلاین، حضوری و تلفنی الیماگشت، نتیجه سال‌ها تجربه
              ما در زمینه مشاوره، بررسی و اخذ ویزا در هزاران پرونده مختلف است.
            </p>
          </div>
          <div className="w-[270px] flex flex-col gap-[15px] justify-center items-center ">
            <img
              src="./public/image/reserve-visa.png"
              className="h-[100px] w-[100px]"
              alt=""
            />
            <h1 className="text-[22px] font-bold text-center ">
              رزرو وقت سفارت
            </h1>
            <p className="w-[270px] text-wrap text-center text-[18px]">
              برای انگشت نگاری و تحویل مدارک به وقت سفارت نیاز دارید! پس همین
              حالا با ما تماس گرفته و وقت سفارت خود را در کمترین زمان از
              الیماگشت بخواهید.
            </p>
          </div>
          <div className="w-[270px] flex flex-col gap-[15px] justify-center items-center ">
            <img
              src="./public/image/docs-visa.png"
              className="h-[100px] w-[100px]"
              alt=""
            />
            <h1 className="text-[22px] font-bold text-center ">
              تکمیل مدارک ویزا
            </h1>
            <p className="w-[270px] text-wrap text-center text-[18px]">
              مدارک شما هستند که با افسر سفارت صحبت می‌کنند. با الیماگشت در
              کمترین زمان مدارک ویزا را تکمیل و ترجمه کرده و نواقص پرونده خود را
              برطرف نمایید.
            </p>
          </div>
          <div className="w-[270px] flex flex-col gap-[15px] justify-center items-center ">
            <img
              src="./public/image/card-visa.png"
              className="h-[100px] w-[100px]"
              alt=""
            />
            <h1 className="text-[22px] font-bold text-center ">
              پیگیری اخذ ویزا
            </h1>
            <p className="w-[270px] text-wrap text-center text-[18px]">
              از لحظه تحویل مدارک تا آماده شدن جواب ویزا، زمان به کندی می‌گذرد.
              با الیماگشت وضعیت درخواست ویزای خود را تا زمان صدور پیگیری کنید!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisaSteps;
