import React from "react";
// import motions
import { motion } from "motion/react";

const angular = (delay) => ({
  leftupcorner: {
    opacity: 0,
    x: -100,
    y: -100,
  },
  rightdowncorner: {
    opacity: 0,
    x: 100,
    y: 100,
  },
  show1: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.2,
      delay: delay,
    },
  },
  show2: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1.2,
      delay: delay,
    },
  },
});
const horizontal = (delay) => ({
  leftdowncorner: {
    opacity: 0,
    x: -100,
    y: 100,
  },
  rightupcorner: {
    opacity: 0,
    x: 100,
    y: -100,
  },
  show3: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      delay: delay,
    },
  },
  show4: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay,
    },
  },
});
const vertical = (delay) => ({
  centerup: {
    opacity: 0,
    y: -100,
    x: 0,
  },
  centerdown: {
    opacity: 0,
    y: 100,
    x: 0,
  },
  show5: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.4,
      delay: delay,
    },
  },
  show6: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      delay: delay,
    },
  },
});

const Portfolio = () => {
  return (
    <section className="section ">
      <div className="container mx-auto h-full relative flex flex-col justify-center items-center">
        <div className="my-4 sm:my-6 md:my-8 lg:my-12 xl:my-14 h-[20%] ">
          <h1 className="h1 myheading">Recent Work</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full h-3/5">
          <motion.div
            variants={angular(0.2)}
            initial="leftupcorner"
            whileInView="show1"
            className="block bg-[#dbedff] hover:scale-[1.05]"
          >
            Item 1
          </motion.div>
          <motion.div
            variants={vertical(0.4)}
            initial="centerup"
            whileInView="show5"
            className="block bg-[#dbedff]"
          >
            Item 2
          </motion.div>
          <motion.div
            variants={horizontal(0.6)}
            initial="rightupcorner"
            whileInView="show4"
            className="block bg-[#dbedff]"
          >
            Item 3
          </motion.div>
          <motion.div
            variants={horizontal(0.8)}
            initial="leftdowncorner"
            whileInView="show3"
            className="block bg-[#dbedff]"
          >
            Item 4
          </motion.div>
          <motion.div
            variants={vertical(1)}
            initial="centerdown"
            whileInView="show6"
            className="block bg-[#dbedff]"
          >
            Item 5
          </motion.div>
          <motion.div
            variants={angular(1.2)}
            initial="rightdowncorner"
            whileInView="show2"
            className="block bg-[#dbedff]"
          >
            Item 6
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
