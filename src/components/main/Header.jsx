import React, { Fragment } from "react";
import Slider from "./Slider";
import { NavLink } from "react-router-dom";
import Groupo from "../../assets/Group.png";
import Logooo from "../../assets/3d-1.png";

import Plate from "../../assets/plate.png";
import "./Style.css";

export default function header() {
  return (
    <Fragment>
      <div className=" overflow-hidden bg-top w-full py-7  bg-repeat-x ">
        <div className=" mt-4 ">
          <div className="h-16 w-full bg-[#6AE6B0] mt-7 blur-[250px] absolute "></div>
          {/* <img src={Logooo} /> */}
          <h1 className="text-center text-3xl sm:text-8xl font-bold mt-10  meet1 text-[#FAFAFA]">
            Hash
          </h1>
          <h1 className=" pb-2 mt-3 text-center text-3xl sm:text-7xl  font-bold  text-transparent bg-clip-text bg-gradient-to-l from-[#4ade80]/30 to-[#6ee7b7]/70 ">
            Ledge
          </h1>
          <p className=" mt-2 text-[#E5E5E5] text-sm sm:text-2xl text-center   ">
            Harnessing the Power of Data: Unlocking Solutions for a Better
            Tomorrow
          </p>
          {/* <p className=" mt-3 text-[#A3A3A3] text-xs sm:text-base text-center mx-8 md:mx-20 lg:mx-52 ">
          Monitoring plant health is very important for their fast growth. In this busy world, people usually forget to water their plants which leads to bad growth and health of their plants. For ensuring complete development of plants it is necessary to develop proper surrounding conditions in which plants grow. We are now going to make IoT Sensor Plant Monitoring system whose data will be displayed on the your screen.  </p> */}
        </div>

        <div className=" flex justify-center mt-10 ">
          <NavLink exact to="register">
            <button class="md:px-2 md:py-2 text-base md:text-[20px] leading-5 w-[267px] rounded h-10 md:h-14 text-white font-bold tracking-[-0.03em] bg-gradient-to-r from-[#15803D] to-[#34D399] hover:from-[#34D399] hover:to-[#15803D]">
              Contact Us
            </button>
          </NavLink>
        </div>
        <div></div>
        <div className=" relative -top-4 z-50  ">
          <div className=" translate-y-12  relative flex justify-center  px-10 sm:px-28 md:px-36 lg:px-44  -z-10">
            <img className=" -mb-10 -z-20" src={Logooo} />
          </div>
          <div className=" absolute ml-[50%] top-[50%]  ">
            {" "}
            {/* <img className=" -ml-20 " src={Logooo} /> */}
          </div>
          <div className="   ">
            <div className="   items-center flex justify-center  h-10         ">
              <img className="  " src={Plate} />{" "}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
