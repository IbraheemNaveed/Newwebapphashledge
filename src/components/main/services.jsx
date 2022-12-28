import React from "react";

import b1 from "../../assets/WebDesign.png";
import b2 from "../../assets/Branding.png";
import b3 from "../../assets/Development.png";
import b4 from "../../assets/Strategy.png";
import b5 from "../../assets/SocialMedia.png";
import b6 from "../../assets/Ecommerce.png";
import Teamsvg from "../../assets/team2.gif";

const About = () => {
  return (
    <div id="three" className="  pt-6 ">
     <h1 className=" text-[#FFFFFF]  text-2xl sm:text-4xl md:text-5xl font-bold text-center align-bottom  backdrop-blur-md mt-28 ">
          Our Services
        </h1>
      <div className="flex  justify-center ">
        {" "}
        <div class="absolute right-[30%] translate-y-80 pointer-events-none">
            <svg x-data="{
        initializeAnimation: false,
        init() {
            setTimeout(() => {
                this.initializeAnimation = true;
            }, 0);
        },
    }"  class=" text-[#27352b]  animate-cube animate-spin " width="46" height="53" viewBox="0 0 46 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m23.102 1 22.1 12.704v25.404M23.101 1l-22.1 12.704v25.404" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel"></path><path d="m45.202 39.105-22.1 12.702L1 39.105" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel"></path><path transform="matrix(.86698 .49834 .00003 1 1 13.699)" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel" d="M0 0h25.491v25.405H0z"></path><path transform="matrix(.86698 -.49834 -.00003 1 23.102 26.402)" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel" d="M0 0h25.491v25.405H0z"></path><path transform="matrix(.86701 -.49829 .86701 .49829 1 13.702)" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel" d="M0 0h25.491v25.491H0z"></path>
</svg>
        </div>
        <img
          className=" rounded-3xl flex  justify-items-center "
          src={Teamsvg}
          style={{}}
        />
        <div class="absolute right-[30%] translate-y-80 pointer-events-none">
            <svg x-data="{
        initializeAnimation: false,
        init() {
            setTimeout(() => {
                this.initializeAnimation = true;
            }, 0);
        },
    }"  class=" text-[#27352b]  animate-cube animate-spin " width="46" height="53" viewBox="0 0 46 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m23.102 1 22.1 12.704v25.404M23.101 1l-22.1 12.704v25.404" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel"></path><path d="m45.202 39.105-22.1 12.702L1 39.105" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel"></path><path transform="matrix(.86698 .49834 .00003 1 1 13.699)" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel" d="M0 0h25.491v25.405H0z"></path><path transform="matrix(.86698 -.49834 -.00003 1 23.102 26.402)" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel" d="M0 0h25.491v25.405H0z"></path><path transform="matrix(.86701 -.49829 .86701 .49829 1 13.702)" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel" d="M0 0h25.491v25.491H0z"></path>
</svg>
        </div>
      </div>

      <div className=" flex flex-col px-6 gap-4 -mt-16  ">
        <div className=" flex sm:flex-row flex-col gap-4 ">
          {/* 1 */}
          <div className="  opacity-70 rounded-3xl  shadow-md border border-[#4ADE80] text-white ultimate bg-ultimateplan backdrop-blur-[50px] w-fit sm:w-1/3 px-3 pt-3 group pb-3 ">
          <div className="bg-gradient-to-r from-[#4ADE80] to-[#6EE7B7] h-40 sm:w-52 w-full absolute top-10 sm:right-24 sm:top-0 blur-[100px]"></div>
            <div className=" flex flex-col gap-4 ">
              <div className="flex justify-center ">
                <img
                  className=" group-hover:animate-bounce bg-gradient-to-bl  from-[#000000] via-[#4B5563] to-[#4ADE80] rounded-full "
                  src={`${b1}`}
                ></img>
              </div>
              <div className=" group-hover:animate-pulse flex flex-col gap-4 ">
                <h1 className=" text-2xl font-bold text-center ">Web Design</h1>
                <p className=" text-sm text-center  ">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="  opacity-70 rounded-3xl  shadow-md border border-[#4ADE80] text-white ultimate bg-ultimateplan backdrop-blur-[50px] w-fit sm:w-1/3 px-3 pt-3 group pb-3   ">
           
            <div className=" flex flex-col gap-4 ">
              <div className="flex justify-center ">
                <img
                  className="group-hover:animate-bounce bg-gradient-to-tr from-[#000000] via-[#4B5563] to-[#4ADE80] rounded-full  "
                  src={`${b2}`}
                ></img>
              </div>
              <div className=" flex flex-col gap-4 ">
                <h1 className=" text-2xl font-bold text-center ">Branding</h1>
                <p className=" text-sm text-center  ">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
              </div>
            </div>
          </div>
          
          {/* 3 */}
          <div className="  opacity-70 rounded-3xl  shadow-md border border-[#4ADE80] text-white ultimate bg-ultimateplan backdrop-blur-[50px] w-fit sm:w-1/3 px-3 pt-3 group pb-3  ">
          <div className="bg-gradient-to-r from-[#4ADE80] to-[#6EE7B7] h-40 sm:w-52 w-full absolute top-10 sm:right-24 sm:top-0 blur-[100px]"></div>
         
            <div className=" flex flex-col gap-4 ">
              <div className="flex justify-center ">
                <img
                  className="group-hover:animate-bounce bg-gradient-to-br from-[#000000] via-[#4B5563] to-[#4ADE80] rounded-full  "
                  src={`${b3}`}
                ></img>
              </div>
              <div className=" flex flex-col gap-4 ">
                <h1 className=" text-2xl font-bold text-center ">
                  Development
                </h1>
                <p className=" text-sm text-center  ">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex sm:flex-row flex-col gap-4 ">
          {/* 4 */}
          <div className=" opacity-70 rounded-3xl  shadow-md border border-[#4ADE80] text-white ultimate bg-ultimateplan backdrop-blur-[50px] w-fit sm:w-1/3 px-3 pt-3 group pb-3  ">
            <div className=" flex flex-col gap-4 ">
              <div className="flex justify-center ">
                <img
                  className="group-hover:animate-bounce bg-gradient-to-tl from-[#000000] via-[#4B5563] to-[#4ADE80] rounded-full   "
                  src={`${b4}`}
                ></img>
              </div>
              <div className=" flex flex-col gap-4 ">
                <h1 className=" text-2xl font-bold text-center ">Strategy</h1>
                <p className=" text-sm text-center  ">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className=" opacity-70 rounded-3xl  shadow-md border border-[#4ADE80] text-white ultimate bg-ultimateplan backdrop-blur-[50px] w-fit sm:w-1/3 px-3 pt-3 group pb-3 ">
          <div className="bg-gradient-to-r from-[#4ADE80] to-[#6EE7B7] h-40 sm:w-52 w-full absolute top-10 sm:right-24 sm:top-0 blur-[100px]"></div>
         
            <div className=" flex flex-col gap-4 ">
              <div className="flex justify-center ">
                <img
                  className="group-hover:animate-bounce bg-gradient-to-bl from-[#000000] via-[#4B5563] to-[#4ADE80] rounded-full  "
                  src={`${b5}`}
                ></img>
              </div>
              <div className=" flex flex-col gap-4 ">
                <h1 className=" text-2xl font-bold text-center ">
                  Social Media
                </h1>
                <p className=" text-sm text-center  ">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className="  opacity-70 rounded-3xl  shadow-md border border-[#4ADE80] text-white ultimate bg-ultimateplan backdrop-blur-[50px] w-fit sm:w-1/3 px-3 pt-3 group pb-3  ">
            <div className=" flex flex-col gap-4 ">
              <div className="flex justify-center ">
                <img
                  className="group-hover:animate-bounce  bg-gradient-to-tr from-[#000000] via-[#4B5563] to-[#4ADE80]   rounded-full   "
                  src={`${b6}`}
                ></img>
              </div>
              <div className=" flex flex-col gap-4 ">
                <h1 className=" text-2xl font-bold text-center ">Ecommerce</h1>
                <p className=" text-sm text-center  ">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
