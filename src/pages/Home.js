import React from "react";
// import images
import WomanImg from "../img/home/woman.png";
// import links
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="mx-auto  ">
      <div className="container mx-auto h-full relative">
        {/* text & image wrapper */}
        <div className="flex flex-col justify-center max-w-[1200px] mx-auto px-[30px] my-0 relative ">
          {/* text */}
          <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute bottom-[350px] left-[-15px] flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">
              webdeveloper
              <br />& designer
            </h1>
            <p className="text-[26px] mb-[2px] lg:text-[36px] font-primary  lg:mb-12">
              Punjab,India
            </p>
            <Link className="btn mb-[30px]" to={"/contact"}>
              Hire me{" "}
            </Link>
          </div>
          {/* image */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <div className="relative lg:-right-40 overflow-hidden mx-auto lg:mx-0">
              <img src={WomanImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
