const Footer = () => {
  return (
    <>
      {" "}
      <div className="w h-[300px] mo:hidden de:flex items-center  flex-col bg-[url('/public/image/tour-background.png')]  bg-cover bg-[100% ]">
        <div className="w h-[80%] gap-[200px] flex px-[50px] max-[1400px]:scale-[80%] max-[1400px]:w-[130%] max-[1400px]:pr-[80px] max-[1400px]:pl-[60px] justify-around pt-[50px]">
          <div className="h w-[26%] flex flex-col justify-around   items-start ">
            <div className="flex w ">
              <img
                src="./public/image/phone-icon.png"
                className="w-[30px] h-[30px]  rotate-180 -scale-x-[1]"
                alt=""
              />
              <span className="text-black text-[20px] leading-[30px] mb-[7px]  ">
                سوالی دارید؟! 42907 - 021
              </span>
            </div>
            <div className="flex w">
              <img
                src="./public/image/location-icon.png"
                className="w-[30px] h-[30px]"
                alt=""
              />

              <span className="text-black  text-[20px] text-wrap leading-[30px]  ">
                سهروردی شمالی.قبل از تقاطع بهشتی برج زیبا پلاک 455 طبقه اول
              </span>
            </div>
          </div>
          <div className="h  flex flex-col justify-center w-[24%] gap-[25px] items-start">
            <span className="text-[20px]">درباره ما</span>
            <span className="text-[20px]">تماس با ما </span>
            <span className="text-[20px]">چرا الیماگشت</span>
          </div>
          <div className="h flex  flex-col justify-center w-[24%] gap-[25px] items-start">
            <span className="text-[20px]">راهنمای خرید</span>
            <span className="text-[20px]">راهنمای استرداد</span>
            <span className="text-[20px]">قوانین و مقررات</span>
          </div>
          <div className="h flex flex-col  justify-center w-[24%] gap-[25px] items-start">
            <span className="text-[20px]">باشگاه مشتریان</span>
            <span className="text-[20px]">مجله الیماگشت</span>
            <span className="text-[20px]">فرصت های شغلی</span>
          </div>
        </div>
        <div className="w h-[20%] flex justify-center items-center">
          کلیه حقوق این سایت متعلق به الیما گشت پاسارگاد می باشد.
        </div>
      </div>
    </>
  );
};

export default Footer;
