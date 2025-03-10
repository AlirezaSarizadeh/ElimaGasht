import { useState, useEffect } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import * as React from "react";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180 text-orange-500"  : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Question = ({ backgroundImage }) => {
  const [open, setOpen] = useState(null);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    axios.post("https://elimagasht.net/api/qAndAList", { category_id: 0 })
      .then(response => {
        if (Array.isArray(response.data)) {
          const filteredFaqs = response.data
            .filter(item => item.status === 1)
            .sort((a, b) => a.sort_order - b.sort_order);
          setFaqs(filteredFaqs);
        }
      })
      .catch(error => console.error("Error fetching FAQs:", error));
  }, []);
  const handleOpen = (id) => setOpen(open === id ? null : id);

  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
    
  };
  return (
    < >
      <div
        className="w h-[700px] max-[600px]:h-[600px]  flex justify-start    pb-[30px]  relative  flex-col px-[60px]  bg-bottom items-center bg-no-repeat  bg-cover "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <img
          src="./public/image/quastion-pic-1.png"
          className="w-[330px] max-[1000px]:top-[20px] max-[1000px]:left-0 max-[800px]:w-[200px] max-[600px]:top-[-60px] max-[450px]:left-[-30px] max-[450px]:w-[170px] max-[450px]:top-0 max-[1000px]:w-[280px] max-[1000px]:right-auto  absolute right-[5%] bottom-[-50px]"
          alt=""
        />
        <img
          src="./public/image/quastion-pic-2.png"
          className="w-[330px] absolute left-[5%] max-[1000px]:hidden bottom-[-50px]"
          alt=""
        />
        <div className="w f h-[20%] max-[2000px]:text-[45px] max-[800px]:text-[35px] max-[600px]:text-[25px] font-bold ">
          پرسش و پاسخ
        </div>
        <div
          className="w h-[20%] mo:hidden de:flex max-[1500px]:flex-wrap max-[1500px]:w-[700px]  justify-around
 items-center "
        >
          <a
            href=""
            className="w-[190px] h-[60px]  rounded-[100px] hover:bg-white hover:font-semibold hover:text-[#F64218] transition-all duration-200 hover:border-[#F64218] pt-[10px] text-center border-[1px] bg-[#F64218] border-white font-light text-[23px] text-white"
          >
            تورهای داخلی
          </a>
          <a
            href=""
            className="w-[190px] h-[60px] rounded-[100px] hover:bg-white hover:font-semibold hover:text-[#F64218] transition-all duration-200 hover:border-[#F64218] pt-[10px] text-center border-[1px] bg-[#F64218] border-white font-light text-[23px] text-white"
          >
            تورهای خارجی
          </a>
          <a
            href=""
            className="w-[190px] h-[60px] rounded-[100px] hover:bg-white hover:font-semibold hover:text-[#F64218] transition-all duration-200 hover:border-[#F64218] pt-[10px] text-center border-[1px] bg-[#F64218] border-white font-light text-[23px] text-white"
          >
            تورهای زمینی
          </a>
          <a
            href=""
            className="w-[190px] h-[60px] rounded-[100px] hover:bg-white hover:font-semibold hover:text-[#F64218] transition-all duration-200 hover:border-[#F64218] pt-[10px] text-center border-[1px] bg-[#F64218] border-white font-light text-[23px] text-white"
          >
            تورهای اقساطی
          </a>
          <a
            href=""
            className="w-[190px] h-[60px] rounded-[100px] hover:bg-white hover:font-semibold hover:text-[#F64218] transition-all duration-200 hover:border-[#F64218] pt-[10px] text-center border-[1px] bg-[#F64218] border-white font-light text-[23px] text-white"
          >
            تورهای اروپایی
          </a>
          <a
            href=""
            className="w-[190px] h-[60px] rounded-[100px] hover:bg-white hover:font-semibold hover:text-[#F64218] transition-all duration-200 hover:border-[#F64218] pt-[10px] text-center border-[1px] bg-[#F64218] border-white font-light text-[23px] text-white"
          >
            تور های پیشنهادی
          </a>
        </div>
        <div className="  w  mo:flex de:hidden  justify-center items-start      ">
          <ul
            className="   text-sm font-medium   max-[450px]:h-[40px] backdrop-blur-2xl  text-center rounded-[15px]  f border-[1px]  border-black/30"
            id="default-tab"
            data-tabs-toggle="#tour-tab-content"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className=" p-4 flex flex-row-reverse justify-center  items-center text-[15px] gap-[5px]    rounded-t-lg"
                id="tour-tab-1"
                data-tabs-target="#tour-1"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <span className="text-black text-[20px] max-[600px]:text-[15px] max-[450px]:text-[10px]  ">
                  تورهای پرطرفدار
                </span>
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className=" p-4 flex flex-row-reverse justify-center  items-center  gap-[5px]    rounded-t-lg"
                id="tour-tab-2"
                data-tabs-target="#tour-2"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <span className="text-black text-[20px] max-[600px]:text-[15px] max-[450px]:text-[10px]">
                  تورهای لحظه آخری
                </span>
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className=" p-4 flex flex-row-reverse justify-center  items-center text-[10px] gap-[5px]    rounded-t-lg"
                id="tour-tab-3"
                data-tabs-target="#tour-3"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <span className="text-black text-[20px] max-[600px]:text-[15px] max-[450px]:text-[10px]">
                  تورهای اقساطی
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div className="backdrop-blur-2xl justify-self-center rounded-[15px] border-[1px] border-white mt-[50px]">
      {faqs.length > 0 ? (
        faqs.map((faq) => (
          <Accordion key={faq.id} open={open === faq.id} animate={{ mount: { scale: 1 }, unmount: { scale: 0.9 } }}>
            <AccordionHeader onClick={() => handleOpen(faq.id)}>
              <div className={`group relative gap-[20px] flex w-full items-center rounded-t-lg px-5 text-left text-base transition ${
                open === faq.id ? "text-[#F64218] font-bold" : "text-neutral-800"}`}
              >
                <div className="w-[30px] h-[30px] bg-[#F64218]/20 brightness-110 rounded-[100px] text-[#F64218] text-[20px] f pt-[2px]">
                  ?
                </div>
                {faq.question}
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className="px-5 text-wrap backdrop-blur-2xl">{faq.answer}</div>
            </AccordionBody>
          </Accordion>
        ))
      ) : (
        <p className="text-center text-neutral-600 py-4">هیچ سوالی یافت نشد.</p>
      )}
    </div>
      </div>
    </>
  );
};

export default Question;
