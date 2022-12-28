import React, { Fragment, useState, useRef } from "react";

// import { } from 'react'
import HamburgerIcon from "../../assets/Hamburger.svg";

import CloseIcon from "../../assets/Close.svg";

import { Link } from "react-scroll";

// import { a } from 'react-router-dom'

export default function Navbar() {
  // const [currentState, setState] = useState(HamburgerIcon);
  const [currentOp, setOpacity] = useState(0);
  const [currentTop, setTop] = useState("-400px");
  const [isActive, setActive] = useState(false);
  const hamburgerIcon = useRef(null);
  const mobileNavBar = useRef(null);
  const mobileNavHandler = () => {
    console.log(hamburgerIcon.current);
    hamburgerIcon.current.classList.toggle("active");
    if (hamburgerIcon.current.classList.contains("active")) {
      //    mobileNavBar.current.classList.remove("top-[80px]")
      mobileNavBar.current.classList.add("left-[-800px]");
      mobileNavBar.current.classList.remove("left-[0px]");
      //  mobileNavBar.current.classList.remove("top-[80px]")
      hamburgerIcon.current.src = HamburgerIcon;
    } else {
      //  mobileNavBar.current.classList.add("top-[80px]")

      mobileNavBar.current.classList.remove("left-[-800px]");
      mobileNavBar.current.classList.add("left-[0px]");

      hamburgerIcon.current.src = CloseIcon;
    }
  };
  return (
    <Fragment>
      <nav className="p-5   md:flex firstBackgroundProperty">
        <div className="flex justify-between lg:w-full  ">
          <div className="flex mx-4 lg:mx-auto">
            <img
              src={HamburgerIcon}
              ref={hamburgerIcon}
              alt=""
              onClick={mobileNavHandler}
              className=" invert w-[30px] absolute right-2 lg:hidden"
            />
            <ul
              className={`deskstop-nav  lg:flex  hidden  items-center lg:items-center  md:items-center z-10 opacity-100 lg:z-auto lg:static absolute mx-auto md:py-0 py-4  md:pl-0 pl-7 lg:opacity-100   text-black  transition-all ease-in duration-500  `}
            >
              <li className=" w-max mx-4 my-6 md:my-0">
                <Link
                  className="text-[14px] hover:text-cyan-500 text-[#ffffff] hover:underline-offset-4 hover:underline duration-500"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                >
                  Home
                </Link>
              </li>
              <li className="mx-6 w-max  my-6 md:my-0">
                <Link className="text-[14px] hover:text-cyan-500 duration-500 text-[#ffffff] hover:underline-offset-4 hover:underline">
                  Partners
                </Link>
              </li>
              <li className="mx-6 w-max my-6 md:my-0">
                <Link className="text-[14px] hover:text-cyan-500 duration-500 text-[#ffffff] hover:underline-offset-4 hover:underline">
                  About
                </Link>
              </li>
              <li className="mx-6 w-max my-6 md:my-0">
                <Link className="text-[14px] hover:text-cyan-500 text-[#ffffff] duration-500 hover:underline-offset-4 hover:underline">
                  Pricing
                </Link>
              </li>
              <li className="mx-6 w-max my-6 md:my-0">
                <Link className="text-[14px] hover:text-cyan-500 text-[#ffffff] duration-500 hover:underline-offset-4 hover:underline active:">
                  Testimonials
                </Link>
              </li>
              <li className="mx-6 w-max my-6 md:my-0">
                <Link className="text-[14px] hover:text-cyan-500 text-[#ffffff] duration-500 hover:underline-offset-4 hover:underline active:">
                  What’s inside
                </Link>
              </li>
              <li className="mx-6 w-max my-6 md:my-0">
                <Link className="text-[14px] hover:text-cyan-500 text-[#ffffff] duration-500 hover:underline-offset-4 hover:underline active:">
                  F.A.Q
                </Link>
              </li>

              {/* <h2 className=""></h2> */}
            </ul>
          </div>
        </div>
      </nav>
      <ul
        ref={mobileNavBar}
        className={`mobile-navbar   lg:hidden w-[80vw] h-[100vh]  lg:items-center z-50 opacity-100 lg:z-auto lg:static absolute  lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 md:opacity-100  left-[-800px]  text-black  bg-white transition-all ease-in duration-500  lg:mx-[60px] `}
      >
        <li className="mx-2 my-6 md:my-0">
          <Link
            href="/"
            className="text-xl hover:text-cyan-500 hover:underline-offset-4 hover:underline duration-500"
          >
            Home
          </Link>
        </li>
        <li className="mx-2 my-6 md:my-0">
          <Link
            href="about"
            className="text-xl hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline"
          >
            About Us
          </Link>
        </li>
        <li className="mx-2 my-6 md:my-0">
          <Link
            href="working"
            className="text-xl hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline"
          >
            How it works
          </Link>
        </li>
        <li className="mx-2 my-6 md:my-0">
          <Link
            href="contact"
            className="text-xl hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline"
          >
            Contact Us
          </Link>
        </li>
        <li className="mx-2 my-6 md:my-0">
          <Link
            href="help"
            className="text-xl hover:text-cyan-500 duration-500 hover:underline-offset-4 hover:underline active:"
          >
            Help
          </Link>
        </li>
      </ul>

      {/* <script>
        function Menu(e){
          let list = document.querySelector('ul');
          e.name === 'menu' ? (e.name = "close",list.classNameList.add('top-[80px]') , list.classNameList.add('opacity-100')) :( e.name = "menu" ,list.classNameList.remove('top-[80px]'),list.classNameList.remove('opacity-100'))
        }

      </script> */}
    </Fragment>
  );
}
