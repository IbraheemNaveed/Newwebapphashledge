import React, { useRef, Fragment, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Imagee from "../../assets/image.svg";

import Qoute from "../../assets/qoute.svg";
import "./Style.css";
import { EffectCoverflow, Navigation } from "swiper";
//import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// import Swiper styles
import "swiper/css";

function Reviews() {
  const [text, setText] = useState("");
  return (
    <Fragment>
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
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        onRealIndexChange={(obj) => {
          console.log(obj.realIndex);
          let myArr = ["Page 1", " page 2", " page 3"];
          setText([myArr[obj.realIndex]]);
        }}
        loop={false}
        pagination={true}
        autoplay={true}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="translate-x-20 ">
          <div className=" border border-[#4ADE80] rounded-lg ultimate bg-ultimateplan backdrop-blur-[50px] h-[400px] overflow-visible   max-w-[328px] min-w-[328px] w-full cursor-pointer bg-gradient-to-r   pt-12 pb-4 flex justify-evenly flex-col text-white px-6">
          <div className="bg-gradient-to-r from-[#4ADE80] to-[#6EE7B7] h-40 sm:w-52 w-full absolute top-10 sm:right-24 sm:top-0 blur-[100px]"></div>
            <div className="relative -top-14 ml:0  sm:ml-28  overflow-visible   ">
              <div className=" overflow-visible  ">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_biii_215_1825)">
                    <circle
                      cx="24"
                      cy="24"
                      r="21"
                      fill="#4B5563"
                      fill-opacity="0.01"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14 30.7435V17H20.3534C22.3941 17 24.0484 18.6543 24.0484 20.695C24.0484 21.9918 23.6497 22.7951 22.1876 23.6192C23.9372 24.4164 24.4231 25.5212 24.4231 27.0624C24.4231 29.1471 22.5711 30.7435 20.4863 30.7435H14ZM16.6885 19.275V22.5798H19.8351C19.8351 22.5798 21.3644 22.5798 21.3644 20.9274C21.3644 19.275 19.8351 19.275 19.8351 19.275H16.6885ZM16.6885 28.4159V24.8475H20.0636C20.6085 24.8475 21.7511 25.1287 21.7511 26.8163C21.7511 28.0679 20.6261 28.4042 20.0636 28.4159H16.6885Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M30.1713 20.7868C28.2377 20.7868 25.3724 22.1755 25.3724 25.867C25.3724 28.1148 26.6029 31 30.2944 31C33.2476 31 34.607 28.832 34.9176 27.7479H32.1402C31.9995 28.2401 31.4546 28.7851 30.2944 28.7851C28.6068 28.7851 28.0092 27.3436 27.9213 26.6229H34.9176V25.867C34.9176 22.1755 32.105 20.7868 30.1713 20.7868ZM30.1713 22.8962C28.5963 22.8962 28.015 24.197 27.9213 24.8475H32.1402C32.1402 24.197 31.7464 22.8962 30.1713 22.8962Z"
                      fill="white"
                    />
                    <path
                      d="M26.8138 17.7808V19.4859H33.441V17.7808H26.8138Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_biii_215_1825"
                      x="-50"
                      y="-50"
                      width="148"
                      height="148"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur in="BackgroundImage" stdDeviation="25" />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_215_1825"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_215_1825"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="5.2136"
                        operator="dilate"
                        in="SourceAlpha"
                        result="effect2_innerShadow_215_1825"
                      />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect2_innerShadow_215_1825"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="18.2476"
                        operator="dilate"
                        in="SourceAlpha"
                        result="effect3_innerShadow_215_1825"
                      />
                      <feOffset dy="-1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.56 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect2_innerShadow_215_1825"
                        result="effect3_innerShadow_215_1825"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="46.9224"
                        operator="dilate"
                        in="SourceAlpha"
                        result="effect4_innerShadow_215_1825"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect3_innerShadow_215_1825"
                        result="effect4_innerShadow_215_1825"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <p className=" text-base ">
              “We strongly support Ibraheem Naveed IoT sensor manufacturing
              proposal and commend his leadership on this critical topic,”{" "}
            </p>
            <div className=" flex ml-60  mt-8 ">
              <img className="   " src={Qoute} />
            </div>
            <div className=" flex mt-8 mb-4 ">
              <div>
                <img src={Imagee} />
              </div>
              <div className=" text-center px-4 ">
                <h1>Abigail Ross Hopper</h1>
                <p>president and CEO of the PLANTS WELL BEING companys</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="translate-x-20">
          <div className=" border border-[#4ADE80] rounded-lg ultimate bg-ultimateplan backdrop-blur-[50px] h-[400px] overflow-visible   max-w-[328px] min-w-[328px] w-full cursor-pointer bg-gradient-to-r   pt-12 pb-4 flex justify-evenly flex-col text-white px-6">
          <div className="bg-gradient-to-r from-[#4ADE80] to-[#6EE7B7] h-40 sm:w-52 w-full absolute top-10 sm:right-24 sm:top-0 blur-[100px]"></div>
     
            <div className="relative -top-14 ml-28 overflow-visible   ">
              <div className=" overflow-visible  ">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_biii_215_1825)">
                    <circle
                      cx="24"
                      cy="24"
                      r="21"
                      fill="#4B5563"
                      fill-opacity="0.01"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14 30.7435V17H20.3534C22.3941 17 24.0484 18.6543 24.0484 20.695C24.0484 21.9918 23.6497 22.7951 22.1876 23.6192C23.9372 24.4164 24.4231 25.5212 24.4231 27.0624C24.4231 29.1471 22.5711 30.7435 20.4863 30.7435H14ZM16.6885 19.275V22.5798H19.8351C19.8351 22.5798 21.3644 22.5798 21.3644 20.9274C21.3644 19.275 19.8351 19.275 19.8351 19.275H16.6885ZM16.6885 28.4159V24.8475H20.0636C20.6085 24.8475 21.7511 25.1287 21.7511 26.8163C21.7511 28.0679 20.6261 28.4042 20.0636 28.4159H16.6885Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M30.1713 20.7868C28.2377 20.7868 25.3724 22.1755 25.3724 25.867C25.3724 28.1148 26.6029 31 30.2944 31C33.2476 31 34.607 28.832 34.9176 27.7479H32.1402C31.9995 28.2401 31.4546 28.7851 30.2944 28.7851C28.6068 28.7851 28.0092 27.3436 27.9213 26.6229H34.9176V25.867C34.9176 22.1755 32.105 20.7868 30.1713 20.7868ZM30.1713 22.8962C28.5963 22.8962 28.015 24.197 27.9213 24.8475H32.1402C32.1402 24.197 31.7464 22.8962 30.1713 22.8962Z"
                      fill="white"
                    />
                    <path
                      d="M26.8138 17.7808V19.4859H33.441V17.7808H26.8138Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_biii_215_1825"
                      x="-50"
                      y="-50"
                      width="148"
                      height="148"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur in="BackgroundImage" stdDeviation="25" />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_215_1825"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_215_1825"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="5.2136"
                        operator="dilate"
                        in="SourceAlpha"
                        result="effect2_innerShadow_215_1825"
                      />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect2_innerShadow_215_1825"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="18.2476"
                        operator="dilate"
                        in="SourceAlpha"
                        result="effect3_innerShadow_215_1825"
                      />
                      <feOffset dy="-1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.56 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect2_innerShadow_215_1825"
                        result="effect3_innerShadow_215_1825"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="46.9224"
                        operator="dilate"
                        in="SourceAlpha"
                        result="effect4_innerShadow_215_1825"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect3_innerShadow_215_1825"
                        result="effect4_innerShadow_215_1825"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <p className=" text-base ">
              This legislation is an important step for spurring domestic
              manufacturing across all key elements of the plants suppliding as
              many IoT sensors at our own expense to the people investing never
              dying efforts in plants industry.
            </p>
            <div className=" flex ml-60  mt-8 ">
              <img className="   " src={Qoute} />
            </div>
            <div className=" flex mt-8 mb-4 ">
              <div>
                <img src={Imagee} />
              </div>
              <div className=" text-center px-4 ">
                <h1>Ahmed Ali</h1>
                <p>Product Manger</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="-translate-x-20">
          <div className=" border border-[#4ADE80] rounded-lg ultimate bg-ultimateplan backdrop-blur-[50px] h-[400px] overflow-visible   max-w-[328px] min-w-[328px] w-full cursor-pointer bg-gradient-to-r   pt-12 pb-4 flex justify-evenly flex-col text-white px-6">
          <div className="bg-gradient-to-r from-[#4ADE80] to-[#6EE7B7] h-40 sm:w-52 w-full absolute top-10 sm:right-24 sm:top-0 blur-[100px]"></div>
     
            <div className="relative -top-14 ml-28 overflow-visible   ">
              <div className=" overflow-visible  ">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_biii_215_1825)">
                    <circle
                      cx="24"
                      cy="24"
                      r="21"
                      fill="#4B5563"
                      fill-opacity="0.01"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14 30.7435V17H20.3534C22.3941 17 24.0484 18.6543 24.0484 20.695C24.0484 21.9918 23.6497 22.7951 22.1876 23.6192C23.9372 24.4164 24.4231 25.5212 24.4231 27.0624C24.4231 29.1471 22.5711 30.7435 20.4863 30.7435H14ZM16.6885 19.275V22.5798H19.8351C19.8351 22.5798 21.3644 22.5798 21.3644 20.9274C21.3644 19.275 19.8351 19.275 19.8351 19.275H16.6885ZM16.6885 28.4159V24.8475H20.0636C20.6085 24.8475 21.7511 25.1287 21.7511 26.8163C21.7511 28.0679 20.6261 28.4042 20.0636 28.4159H16.6885Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M30.1713 20.7868C28.2377 20.7868 25.3724 22.1755 25.3724 25.867C25.3724 28.1148 26.6029 31 30.2944 31C33.2476 31 34.607 28.832 34.9176 27.7479H32.1402C31.9995 28.2401 31.4546 28.7851 30.2944 28.7851C28.6068 28.7851 28.0092 27.3436 27.9213 26.6229H34.9176V25.867C34.9176 22.1755 32.105 20.7868 30.1713 20.7868ZM30.1713 22.8962C28.5963 22.8962 28.015 24.197 27.9213 24.8475H32.1402C32.1402 24.197 31.7464 22.8962 30.1713 22.8962Z"
                      fill="white"
                    />
                    <path
                      d="M26.8138 17.7808V19.4859H33.441V17.7808H26.8138Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_biii_215_1825"
                      x="-50"
                      y="-50"
                      width="148"
                      height="148"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur in="BackgroundImage" stdDeviation="25" />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_215_1825"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_215_1825"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="5.2136"
                        operator="dilate"
                        in="SourceAlpha"
                        result="effect2_innerShadow_215_1825"
                      />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect2_innerShadow_215_1825"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="18.2476"
                        operator="dilate"
                        in="SourceAlpha"
                        result="effect3_innerShadow_215_1825"
                      />
                      <feOffset dy="-1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.56 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect2_innerShadow_215_1825"
                        result="effect3_innerShadow_215_1825"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="46.9224"
                        operator="dilate"
                        in="SourceAlpha"
                        result="effect4_innerShadow_215_1825"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect3_innerShadow_215_1825"
                        result="effect4_innerShadow_215_1825"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <p className=" text-base ">
              Excellent work. this is the best front end web developer and
              designer. Thank you man. Highly recommended.{" "}
            </p>
            <div className=" flex ml-60  mt-8 ">
              <img className="   " src={Qoute} />
            </div>
            <div className=" flex mt-8 mb-4 ">
              <div>
                <img src={Imagee} />
              </div>
              <div className="text-center px-4">
                <h1> amna amir</h1>
                <p>VP, Operations</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className=" flex mt-5  justify-center gap-4 ">
        <button className="rounded-full prevElem bg-gradient-to-r  from-[#000000] to-[#4ADE80]  px-3 py-2 ">
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.1705 15.5455C8.73116 15.9848 8.01884 15.9848 7.5795 15.5455L0.829505 8.7955C0.390165 8.35616 0.390165 7.64384 0.829505 7.2045L7.5795 0.454506C8.01884 0.0151653 8.73116 0.0151653 9.1705 0.454506C9.60983 0.893845 9.60983 1.60616 9.1705 2.04549L3.21599 8L9.1705 13.9545C9.60983 14.3938 9.60983 15.1062 9.1705 15.5455Z"
              fill="#9CA3AF"
            />
          </svg>
        </button>
        <button className="rounded-full nextElem bg-gradient-to-r  from-[#000000] to-[#4ADE80]  px-3 py-2 ">
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.829505 0.454505C1.26884 0.015165 1.98116 0.015165 2.4205 0.454505L9.1705 7.2045C9.60983 7.64384 9.60983 8.35616 9.1705 8.7955L2.4205 15.5455C1.98116 15.9848 1.26884 15.9848 0.829505 15.5455C0.390165 15.1062 0.390165 14.3938 0.829505 13.9545L6.78401 8L0.829505 2.0455C0.390165 1.60616 0.390165 0.893845 0.829505 0.454505Z"
              fill="#9CA3AF"
            />
          </svg>
        </button>
      </div>
    </Fragment>
  );
}

export default Reviews;
