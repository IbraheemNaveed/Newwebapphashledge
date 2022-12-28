import React, { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GroupONE from "../../assets/Groupone.svg";
import Ling from "../../assets/Lineg.svg";
import Imageone from "../../assets/imageone.png";
import Eye from "../../assets/eye.svg";
import Vector from "../../assets/vector.svg";
//import Angular from '../../assets/assetsangular.svg';
import Reacto from "../../assets/reacto.svg";
import Vujs from "../../assets/vujs.svg";
import Slider from "./Slider";
import Line from "../../assets/Line.svg";
import LineR from "../../assets/Line.svg";
import Rectangle from "../../assets/Rectangle.png";
import Fully from "../../assets/fully.svg";
import Cross from "../../assets/cross.svg";
import High from "../../assets/high.svg";
import Pkg from "../../assets/pkg.svg";
import Rigo from "../../assets/rigo.svg";
import Screen from "../../assets/screen.svg";
import Support from "../../assets/support.svg";
import Tail from "../../assets/tail.svg";
import Updatee from "../../assets/updatee.svg";
import Slidee from "../../assets/slide.png";
import LineP from "../../assets/linep.svg";
// const onHandleClick = () => {
//     var location = this.state.currentLocation;

//     location.then(function(location){
//       var link = `https://create.arduino.cc/iot/dashboards/19ece546-bf08-4559-afc4-c922ac2b5396?mode=view`

//       //window.location.href = link;
//       window.location.assign(link);
//     })
//   }
function index() {
  return (
    <Fragment>
      <div className="      bg-[#171717] ">
        <div className="w-full sm:w-10/12 mx-auto">
          <h1 className=" text-center font-extrabold text-transparent text-5xl sm:text-7xl bg-clip-text bg-gradient-to-br from-[#4ADE80] to-[#6EE7B7] pt-6 ">
            IOT Result Dashboard{" "}
          </h1>
          <p className="text-[#9CA3AF] text-center font-normal px-4 sm:px-16   ">
            Dashboard with results of sensors. Every screen is highly detailed
            with interactions embedded down to the smallest component.
          </p>
          <div className="  flex justify-center flex-row   mt-3.5 ">
            <div>
              <NavLink exact to="/New">
                <button className=" border-0 text-[#FFFFFF] mx-4 bg-gradient-to-br from-[#2b302d] to-[#b9c7c2] px-8 py-4  ">
                  View Database
                </button>
              </NavLink>
            </div>

            <button className="border-0 text-[#FFFFFF] mx-4  bg-gradient-to-br from-[#15803D] to-[#34D399]  px-8 py-4 ">
              {" "}
              <a href="https://create.arduino.cc/iot/dashboards/19ece546-bf08-4559-afc4-c922ac2b5396?mode=fullscreen">
                {" "}
                view result{" "}
              </a>{" "}
            </button>
          </div>
        </div>
        <div className=" sm:px-32 flex justify-center mt-20   shadow-lg-[#FFFFFF] ">
          <img className=" inline-block " src={GroupONE} />
        </div>
        <div className=" -mt-24 "></div>
        <div className=" flex justify-center mt-28 text-center ">
          <img className=" mt-10 " src={Line} />
        </div>
        <div className=" text-center w-full sm:w-10/12 mx-auto  ">
          <h1 className=" text-5xl font-bold text-transparent  bg-clip-text bg-gradient-to-br from-[#E879F9] to-[#C084FC] ">
            Checkout your ongoin Project
          </h1>
          <p className=" pt-5 text-lg text-[#9CA3AF]">
            Don’t waste time in starting your next project from scratch. With
            over 100 screens and multiple pages, choose the one that suits your
            needs and start editing right away.
          </p>
        </div>
        <div className=" sm:px-52 flex justify-center mt-16  relative  ">
          <img className=" flex justify-center " src={Rectangle} />
          <div className="  absolute top-[50%] left-[50%] translate-x-[-50%] text-white border border-[#ffffff]">
            {" "}
            <p>Video Placeholder</p>{" "}
          </div>
        </div>
        <div className=" flex justify-center mt-14 ">
          <img src={Line} />
        </div>
        <div className="text-center w-full sm:w-10/12 mx-auto mt-8">
          <h1 className="font-bold text-5xl text-transparent  bg-clip-text bg-gradient-to-br from-[#4ADE80] to-[#2DD4BF]">
            Different Sensors Results
          </h1>
          <p className=" mt-5 text-sm text-[#ffffff]">
            Here we have results of different using sensors.Data is mentioned in
            slider and slide to preview.{" "}
          </p>
        </div>

        <div className=" w-[9v0%] sm:w-full ">
          <Slider />
        </div>

        <div className=" flex justify-center mt-14 ">
          <img src={Ling} />
        </div>
        <div className="text-center w-full sm:w-10/12 mx-auto mt-8  ">
          <h1 className="font-bold text-5xl text-transparent  bg-clip-text bg-gradient-to-br from-[#06B6D4]/100 to-[#06B6D4]">
            Explore the Demos
          </h1>
          <p className=" mt-5 text-sm text-[#ffffff]">
            Don’t waste time in starting your next project from scratch. With
            over 100 screens and multiple pages, choose the one that suits your
            needs and start editing right away.
          </p>
        </div>
        <div className=" flex flex-col sm:flex-row gap-4 justify-center ">
          <div className="flex flex-col items-center mt-16 ">
            <div className=" bg-[#E5E5E5]/20 border-2 rounded-xl   ">
              {" "}
              <img className="  border-[#E5E5E5] " src={Imageone} />{" "}
            </div>
            <div className=" flex items-center mt-4  ">
              <button className="border-2  border-[#06B6D4] bg-gradient-to-br from-[#06B6D4]/10 to-[#2DD4BF]/10 text-[#ffffff] px-8 py-[17px] ">
                Layout 01
              </button>
              <button className="border-2  border-[#06B6D4] px-4 py-4 bg-gradient-to-br from-[#06B6D4]/10 to-[#2DD4BF]/10 ">
                {" "}
                <img src={Eye} />{" "}
              </button>
            </div>
            <div className=" flex gap-4 py-4 hover:w-12 hover:h-8 ">
              <button>
                {" "}
                <img src={Vector} />{" "}
              </button>
              <button>
                {" "}
                <img src={Vector} />{" "}
              </button>
              <button>
                {" "}
                <img src={Reacto} />{" "}
              </button>
              <button>
                {" "}
                <img src={Vujs} />{" "}
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center mt-16 ">
            <div className=" bg-[#E5E5E5]/20 border-2 rounded-xl   ">
              {" "}
              <img className="  border-[#E5E5E5] " src={Imageone} />{" "}
            </div>
            <div className=" flex items-center mt-4  ">
              <button className="border-2  border-[#06B6D4] bg-gradient-to-br from-[#06B6D4]/10 to-[#2DD4BF]/10 text-[#ffffff] px-8 py-[17px]">
                Layout 01
              </button>
              <button className="border-2  border-[#06B6D4] px-4 py-4 bg-gradient-to-br from-[#06B6D4]/10 to-[#2DD4BF]/10 ">
                {" "}
                <img src={Eye} />{" "}
              </button>
            </div>
            <div className=" flex gap-4 py-4 ">
              <button>
                {" "}
                <img src={Vector} />{" "}
              </button>
              <button>
                {" "}
                <img src={Vector} />{" "}
              </button>
              <button>
                {" "}
                <img src={Reacto} />{" "}
              </button>
              <button>
                {" "}
                <img src={Vujs} />{" "}
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center mt-16 ">
            <div className=" bg-[#E5E5E5]/20 border-2 rounded-xl   ">
              {" "}
              <img className="  border-[#E5E5E5] " src={Imageone} />{" "}
            </div>
            <div className=" flex items-center mt-4  ">
              <button className="border-2  border-[#06B6D4] bg-gradient-to-br from-[#06B6D4]/10 to-[#2DD4BF]/10 text-[#ffffff] px-8 py-[17px] ">
                Layout 01
              </button>
              <button className="border-2  border-[#06B6D4] px-4 py-4 bg-gradient-to-br from-[#06B6D4]/10 to-[#2DD4BF]/10 ">
                {" "}
                <img src={Eye} />{" "}
              </button>
            </div>
            <div className=" flex gap-4 py-4 ">
              <button>
                {" "}
                <img src={Vector} />{" "}
              </button>
              <button>
                {" "}
                <img src={Vector} />{" "}
              </button>
              <button>
                {" "}
                <img src={Reacto} />{" "}
              </button>
              <button>
                {" "}
                <img src={Vujs} />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className=" flex flex-col sm:flex-row justify-center gap-4 ">
          <div className="flex flex-col items-center mt-16 ">
            <div className=" bg-[#E5E5E5]/20 border-2 rounded-xl   ">
              {" "}
              <img className="  border-[#E5E5E5] " src={Imageone} />{" "}
            </div>
            <div className=" flex items-center mt-4  ">
              <button className="border-2  border-[#06B6D4] bg-gradient-to-br from-[#06B6D4]/10 to-[#2DD4BF]/10 text-[#ffffff] px-8 py-[17px] ">
                Layout 01
              </button>
              <button className="border-2  border-[#06B6D4] px-4 py-4 bg-gradient-to-br from-[#06B6D4]/10 to-[#2DD4BF]/10 ">
                {" "}
                <img src={Eye} />{" "}
              </button>
            </div>
            <div className=" flex gap-4 py-4 ">
              <button>
                {" "}
                <img src={Vector} />{" "}
              </button>
              <button>
                {" "}
                <img src={Vector} />{" "}
              </button>
              <button>
                {" "}
                <img src={Reacto} />{" "}
              </button>
              <button>
                {" "}
                <img src={Vujs} />{" "}
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center mt-16 ">
            <div className=" bg-[#E5E5E5]/20 border-2 rounded-xl   ">
              {" "}
              <img className="  border-[#E5E5E5] " src={Imageone} />{" "}
            </div>
            <div className=" flex items-center mt-4  ">
              <button className="border-2  border-[#06B6D4] bg-gradient-to-br from-[#06B6D4]/10 to-[#2DD4BF]/10 text-[#ffffff] px-8 py-[17px] ">
                Layout 01
              </button>
              <button className="border-2  border-[#06B6D4] px-4 py-4 bg-gradient-to-br from-[#06B6D4]/10 to-[#2DD4BF]/10 ">
                {" "}
                <img src={Eye} />{" "}
              </button>
            </div>
            <div className=" flex gap-4 py-4 ">
              <button>
                {" "}
                <img src={Vector} />{" "}
              </button>
              <button>
                {" "}
                <img src={Vector} />{" "}
              </button>
              <button>
                {" "}
                <img src={Reacto} />{" "}
              </button>
              <button>
                {" "}
                <img src={Vujs} />{" "}
              </button>
            </div>
          </div>
        </div>

        {/* comp 5 */}
        <div className=" flex justify-center mt-8  ">
          <img src={LineR} />
        </div>
        <div className=" text-center w-full sm:w-10/12 mx-auto  ">
          <h1 className=" mt-8 text-5xl font-bold text-transparent  bg-clip-text bg-gradient-to-r  from-[#FFE57F] to-[#FF7170] ">
            Our Powerful Features
          </h1>
        </div>

        <div className=" flex flex-wrap  mx-30 gap-0 py-4 ">
          <div className=" py-4 px-2 basis-full sm:basis-[40%] md:basis-[60%] lg:basis-[33%] text-[#D1D5DB] hover:bg-gray-800 group  rounded-sm">
            <div className=" flex w-[60px] h-[60px]  border-2 rounded-full px-2 py-2 group-hover:bg-gradient-to-br from-[#FFE57F] to-[#FF7170]  ">
              <img src={Fully} />
            </div>
            <h1 className=" text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br from-[#FFE57F] to-[#FF7170]">
              Fully Accessible
            </h1>
            <p>
              Every component passes the WCAG to ensure that it is accessible to
              every user out there
            </p>
          </div>
          <div className="py-4 px-2 justify-center basis-full sm:basis-[40%] md:basis-[60%] lg:basis-[33%]  text-[#D1D5DB] hover:bg-gray-800 group ">
            <div className=" flex w-[60px] h-[60px]  border-2 rounded-full px-2 py-2 group-hover:bg-gradient-to-br from-[#FFE57F] to-[#FF7170]  ">
              <img src={Tail} />
            </div>
            <h1 className=" text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br from-[#FFE57F] to-[#FF7170]">
              Mobile View
            </h1>
            <p>
              Every component passes the WCAG to ensure that it is accessible to
              every user out there
            </p>
          </div>
          <div className=" py-4 px-2 basis-full sm:basis-[40%] md:basis-[60%] lg:basis-[33%] justify-center text-[#D1D5DB] hover:bg-gray-800 group rounded-sm ">
            <div className=" flex w-[60px] h-[60px]  px-2 py-2 group-hover:bg-gradient-to-br from-[#FFE57F] to-[#FF7170]  ">
              <img src={Screen} />
            </div>
            <h1 className=" text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br from-[#FFE57F] to-[#FF7170]">
              90+ Screens
            </h1>
            <p>
              Every component passes the WCAG to ensure that it is accessible to
              every user out there
            </p>
          </div>
          <div className=" py-4 px-2 basis-full sm:basis-[40%] md:basis-[60%] lg:basis-[33%] justify-center text-[#D1D5DB] hover:bg-gray-800 group  rounded-sm">
            <div className=" flex w-[60px] h-[60px]  border-2 rounded-full px-2 py-2 group-hover:bg-gradient-to-br from-[#FFE57F] to-[#FF7170]  ">
              <img src={Rigo} />
            </div>
            <h1 className=" text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br from-[#FFE57F] to-[#FF7170]">
              Rigorously Tested
            </h1>
            <p>
              Every component passes the WCAG to ensure that it is accessible to
              every user out there
            </p>
          </div>
          <div className=" py-4 px-2 basis-full sm:basis-[40%] md:basis-[60%] lg:basis-[33%] justify-center text-[#D1D5DB] hover:bg-gray-800 group  rounded-sm">
            <div className=" flex w-[60px] h-[60px]  border-2 rounded-full px-2 py-2 group-hover:bg-gradient-to-br from-[#FFE57F] to-[#FF7170]  ">
              <img src={Cross} />
            </div>
            <h1 className=" text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br from-[#FFE57F] to-[#FF7170]">
              Cross-browser Compatible
            </h1>
            <p>
              Every component passes the WCAG to ensure that it is accessible to
              every user out there
            </p>
          </div>
          <div className=" py-4 px-2 basis-full sm:basis-[40%] md:basis-[60%] lg:basis-[33%] justify-center text-[#D1D5DB] hover:bg-gray-800 group rounded-sm ">
            <div className=" flex w-[60px] h-[60px]  border-2 rounded-full px-2 py-2 group-hover:bg-gradient-to-br from-[#FFE57F] to-[#FF7170]  ">
              <img src={Support} />
            </div>
            <h1 className=" text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br from-[#FFE57F] to-[#FF7170]">
              1 Day Support
            </h1>
            <p>
              Every component passes the WCAG to ensure that it is accessible to
              every user out there
            </p>
          </div>
          <div className=" py-4 px-2 basis-full sm:basis-[40%] md:basis-[60%] lg:basis-[33%] text-[#D1D5DB] hover:bg-gray-800 group rounded-sm ">
            <div className=" flex w-[60px] h-[60px]  border-2 rounded-full px-2 py-2 group-hover:bg-gradient-to-br from-[#FFE57F] to-[#FF7170]  ">
              <img src={High} />
            </div>
            <h1 className=" text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br from-[#FFE57F] to-[#FF7170]">
              Highly Customizable
            </h1>
            <p>
              Every component passes the WCAG to ensure that it is accessible to
              every user out there
            </p>
          </div>
          <div className=" py-4 px-2 basis-full sm:basis-[40%] md:basis-[60%] lg:basis-[33%] text-[#D1D5DB] hover:bg-gray-800 group rounded-sm ">
            <div className=" flex w-[60px] h-[60px]  border-2 rounded-full px-2 py-2 group-hover:bg-gradient-to-br from-[#FFE57F] to-[#FF7170]  ">
              <img src={Pkg} />
            </div>
            <h1 className=" basis-full sm:basis-[40%] md:basis-[60%] lg:basis-[33%] text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br from-[#FFE57F] to-[#FF7170]">
              Complete Package
            </h1>
            <p>
              Every component passes the WCAG to ensure that it is accessible to
              every user out there
            </p>
          </div>
          <div className=" py-4 px-2 basis-full sm:basis-[40%] md:basis-[60%] lg:basis-[33%] text-[#D1D5DB] hover:bg-gray-800 group  rounded-sm">
            <div className=" flex w-[60px] h-[60px]  border-2 rounded-full px-2 py-2 group-hover:bg-gradient-to-br from-[#FFE57F] to-[#FF7170]  ">
              <img src={Updatee} />
            </div>
            <h1 className=" text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br from-[#FFE57F] to-[#FF7170]">
              Free Updates
            </h1>
            <p>
              Every component passes the WCAG to ensure that it is accessible to
              every user out there
            </p>
          </div>
        </div>

        {/* COMP 6  */}

        <div className=" flex flex-col sm:flex-row justify-between mt-16 px-20  ">
          <div className=" text-[#ffffff]  py-10 px-4 ">
            <h1 className=" text-2xl font-bold  ">
              One Time Payment.
              <br />
              Lifetime Access.
            </h1>
            <p className=" py-5 ">Simple and Transparent Pricing. No BS.</p>
            <p className=" py-2 ">
              <ul className=" list-disc ">
                <li>90+ Screens </li>
                <li>200+ Components</li>
                <li>HTML & TailwindCSS</li>
                <li>Premium Support</li>
                <li>Use on Unlimited Projects</li>
              </ul>
            </p>
            <button className=" mt-6 border-0 text-[#FFFFFF]  bg-gradient-to-br from-[#7DD3FC]/100 to-[#3B82F6]/100  sm:px-8 sm:py-4 px-3 py-2 ">
              Buy Now at $79
            </button>
          </div>

          <div>
            <img src={Slidee} />
          </div>
        </div>
        {/* COMP 7  */}

        <div className=" flex justify-center mt-8  ">
          <img src={LineP} />
        </div>
        <div className=" text-center w-full sm:w-10/12 mx-auto  ">
          <h1 className=" mt-8 text-5xl font-bold text-transparent  bg-clip-text bg-gradient-to-r  from-[#FFAEC1] to-[#FF7293] ">
            Powerful Features
          </h1>
        </div>
        <div className=" bg-[#6B7280] flex flex-col sm:flex-row justify-between items-center w-[200px] sm:w-[600px] h-[56px] rounded mx-auto ">
          <div>
            {" "}
            <input
              className="bg-[#6B7280] text-[16px] mx-4 "
              type={"email"}
              placeholder={"johnnyappleseed@gmail.com"}
            />
          </div>
          <div>
            <button className="bg-[#FFFFFF] rounded text-[#FF3565] mx-4 w-[80px] sm:w-[120px] h-[40px]">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default index;
