const MiniMenu = () => {
  return (
    <div className="w  h-[20%] mo:flex justify-center   items-start de:hidden">
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
  );
};

export default MiniMenu;
