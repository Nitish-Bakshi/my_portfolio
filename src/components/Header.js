import React from "react";
import { Link } from "react-router-dom";
// import components
import Socials from "./Socials";
import MobileNav from "./MobileNav";

import Logo from "../img/header/logo.png";

const Header = () => {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/*    logo   */}
        <Link to={"/"} className="max-w-[200px]">
          <h1 className="text-primary font-primary text-3xl font-extrabold hover:text-white hover:bg-primary border-2 border-solid border-primary w-[120px] p-3">
            Nitish.
          </h1>
        </Link>
        {/* nav will be initially hidden and only will be visible in desktop mode  */}
        <div className="flex">
          <nav className="hidden xl:flex gap-x-12 font-semibold">
            <Link
              to={"/"}
              className="text-[#696c6d] hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="text-[#696c6d] hover:text-primary transition"
            >
              About
            </Link>
            <Link
              to={"/portfolio"}
              className="text-[#696c6d] hover:text-primary transition"
            >
              Portfolio
            </Link>
            <Link
              to={"/contact"}
              className="text-[#696c6d] hover:text-primary transition"
            >
              Contact
            </Link>
          </nav>
          {/* socials */}
          <Socials />
          {/* mobile nav */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
