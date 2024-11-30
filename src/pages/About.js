import React from "react";
// IMPORT IMAGES
import meImg from "../img/home/about.png";
// import links
import { Link } from "react-router-dom";
// import motions
import { motion } from "framer-motion";
// import transitions
import { transition1 } from "../transitions";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section "
    >
      <div className="container mx-auto h-full relative">
        {/* text & image wrapper*/}
        <div className=" flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={meImg} alt="" />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              I'm <b>Nitish Bakshi</b>, a web developer and designer from India,
              always excited to dive into the world of pixels and code. My
              journey into the digital realm is fueled by a passion for crafting
              beautiful and functional websites.
              <br />
              <br />I love turning ideas into reality, transforming complex
              concepts into elegant digital experiences. Let's create something
              amazing together!
            </p>
            <Link className="btn" to={"/portfolio"}>
              View My Work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
