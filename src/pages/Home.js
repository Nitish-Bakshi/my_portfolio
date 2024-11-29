import React from "react";
// import images
import WomanImg from "../img/home/man.png";
// import Link
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        {/* text and img wrapper */}
        <div className="flex flex-col justify-center mx-20">
          {/* text */}
          <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start top-[180px] left-[-10px]">
            <h1 className="h1">
              Web Developer <br /> & Designer{" "}
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              from india
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              hire me
            </Link>
          </div>
          {/* img */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <div className="relative lg:-right-40 w-[65%] bottom-20 overflow-hidden">
              <img src={WomanImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
