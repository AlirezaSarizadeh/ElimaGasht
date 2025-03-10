import { motion } from "framer-motion";
import Header from "../Header/Header";
import Menu from "../Header/Menu";
import TopLogo from "../Header/TopLogo";
import React, { useRef, useEffect } from "react";
const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col  h-[100vh] justify-between items-center">
        <video
        ref={videoRef}
          src="./public/video/island.mp4"
          className="m-0 p-0 scale-[1.009] w-[100vw] h-[100vh] fixed top-0 object-cover  z-[-999]"
          loop
          muted
        ></video>
        <TopLogo />

        <Menu />
        <div className="w flex justify-end h-[100vh] flex-col items-center flex-grow ">
          <span className="text-white  de:text-[13px] mo:text-[10px] mb-[20px] ">
            کلیه حقوق این سایت متعلق به الیما گشت پاسارگاد می باشد. 
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
