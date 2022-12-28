import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Cover1 from "../../assets/imageone.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "swiper/css/navigation"

import "./Style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Autoplay } from "swiper";

export default function Slider() {
  const [text, setText] = useState("");
  return (
    <>
      <div className=" flex justify-center items-center mt-6 ">
        <button className=" text-[#4ADE80] hover:text-black prevElem ">
          <svg
            width="49"
            height="16"
            viewBox="0 0 49 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.292893 7.29289C-0.0976295 7.68341 -0.0976296 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.928929C7.68054 0.538404 7.04738 0.538404 6.65685 0.928928L0.292893 7.29289ZM49 7L1 7L1 9L49 9L49 7Z" />
          </svg>
        </button>
        <button className=" border-2 bg-clip-border px-14 py-4 border-[#4ADE80] text-[#FFFFFF] mx-4 bg-[#4ADE80]/10   ">
          {" "}
          {text}
        </button>
        <button className="text-[#4ADE80] hover:text-black nextElem ">
          <svg
            width="49"
            height="16"
            viewBox="0 0 49 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M48.7071 8.70711C49.0976 8.31658 49.0976 7.68342 48.7071 7.29289L42.3431 0.928932C41.9526 0.538408 41.3195 0.538408 40.9289 0.928932C40.5384 1.31946 40.5384 1.95262 40.9289 2.34315L46.5858 8L40.9289 13.6569C40.5384 14.0474 40.5384 14.6805 40.9289 15.0711C41.3195 15.4616 41.9526 15.4616 42.3431 15.0711L48.7071 8.70711ZM0 9H48V7H0V9Z" />
          </svg>
        </button>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        navigation={{
          prevEl: ".prevElem",
          nextEl: " .nextElem",
        }}
        breakpoints={{
          480: {
            width: 480,
            slidesPerView: 2,
          },
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 3,
          },
          // when window width is >= 768px
        }}
        // when window width is >= 320px

        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        onRealIndexChange={(obj) => {
          console.log(obj.realIndex);
          let myArr = [
            "Humidity",
            " Temprature",
            " Water stress",
            " Plant Health ",
          ];
          setText([myArr[obj.realIndex]]);
        }}
        loop={false}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="swiper-container"
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide>
          <img className="  " src={Cover1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cover1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cover1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cover1} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
