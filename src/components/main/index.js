import React, { Fragment } from "react";
import Nav from "./Navbar";
import Header from "./Header";
import Weeb from "../../assets/Web.png";
import Web from "../../assets/bgimg.png";

import Body from "./body";
import CompOne from "./compOne";
import Services from "./services";

import "./Style.css";

function Index() {
  return (
    <Fragment>
      <div className="      bg-[#171717] ">
        <div
          className="   bg-repeat-x bg-no-repeat-y   bg-center  "
          style={{ backgroundImage: `url(${Weeb})` }}
        >
          <Nav />
          <Header />
        </div>
        <div className=" bg-[#171717]  ">
          <Body />
          <Services/>
          <CompOne />
        </div>
      </div>
    </Fragment>
  );
}

export default Index;
