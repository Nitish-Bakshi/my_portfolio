import React from "react";
import myImg from "../img/home/me2.png";
const Contact = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-start items-center h-full lg:flex-row pt-36 gap-x-8 text-center lg:text-left">
          {/* bg */}
          <div>bg</div>
          {/* text and form */}
          <div className="lg:flex-1 lg:pt-32 px-4">
            <h1 className="h1">Conatct me</h1>
            <p className="mb-12">I would love to get suggestions from you.</p>
            <form className="flex flex-col gap-y-4">
              <div className=" flex gap-x-10">
                <input
                  type="text"
                  placeholder="Your name"
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]]"
                />
                <input
                  type="text"
                  placeholder="Your email address"
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]]"
                />
              </div>
              <input
                type="text"
                placeholder="Your message"
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]]"
              />
              <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                Send it
              </button>
            </form>
          </div>
          {/* image */}
          <div className="lg:flex-1">
            <img src={myImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
